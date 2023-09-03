import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import {
  InputBase,
  Avatar,
  Stack,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import EmojiPicker from "emoji-picker-react";
import { EmojiStyle } from "emoji-picker-react";
import { DarkModeContext } from "../../context/darkModeContext";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import EmojiIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import { ReactComponent as IconMenuDots } from "../../assets/SVG/menu-dots.svg";
import { ReactComponent as IconSend } from "../../assets/SVG/paper-plane.svg";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { SidebarContext } from "../../context/sidebarContext";

import { getUserById } from "../../redux/authSlice";
import { getMessageById } from "../../services/api";

const AvatarUser = styled(Avatar)({
  width: 40,
  height: 40,
  borderRadius: 10,
  padding: 3,
});

const UserName = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
}));

const MessageMyMessage = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  marginBottom: "1rem",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  gap: "1rem",
}));
const MessageFriendMessage = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
  display: "flex",
  marginBottom: "1rem",
  justifyContent: "flex-start",
  alignItems: "flex-end",
  gap: "1rem",
  color: "#fff",
}));
const ChatInput = styled("div")(({ theme }) => ({
  position: "relative",
  padding: "0.8rem 1rem",
  borderRadius: "1.2rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  columnGap: "0.5rem",
}));

const MessageUser = () => {
  const dispatch = useDispatch();
  const id_receiver = useParams();
  const navigate = useNavigate();
  const inputRef = useRef();
  const chatContainerRef = useRef();
  const user = useSelector((state) => state.auth.user.user);
  const receiver = useSelector((state) => state.auth.dataById);
  const { darkMode } = useContext(DarkModeContext);
  const { openSidebar } = useContext(SidebarContext);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(receiver ? receiver.is_online : false);
  const [showEmoji, setShowEmoji] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  // const input = inputRef.current;

  //Déclaration socket
  const socket = useMemo(
    () =>
      new WebSocket(
        `ws://127.0.0.1:8000/ws/chat/${parseInt(user.id)}/${parseInt(
          id_receiver.id
        )}/`
      ),
    [id_receiver, user]
  );

  const online_status = useMemo(
    () => new WebSocket(`ws://127.0.0.1:8000/ws/online/`),
    []
  );

  useEffect(() => {
    const chatForm = chatContainerRef.current;
    const scrollBottom = () => {
      chatForm.scrollTop = chatForm.scrollHeight;
    };
    socket.onopen = function (e) {
      console.log("chat connecté");
      scrollBottom();
    };

    socket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      setMessages([...messages, data]);
      scrollBottom();
    };

    socket.onclose = function (e) {
      console.log("chat déconnecté");
    };
  }, [socket, receiver, messages]);

  useEffect(() => {
    online_status.onopen = function (e) {
      console.log("connected to online_status consumer");
    };

    online_status.onmessage = function (e) {
      const data = JSON.parse(e.data);
      if (data.id_user === id_receiver.id) {
        setStatus(data.online_status);
      }
    };
    online_status.onclose = function (e) {
      console.log("disconnected to online_status consumer");
    };
  }, [online_status, id_receiver]);

  useEffect(() => {
    dispatch(getUserById(id_receiver.id));
    getMessageById(user.id, id_receiver.id).then((data) => {
      setMessages(data.AllMessage);
    });
  }, [dispatch, id_receiver, user]);

  // useEffect(() => {
  //   input.onClick = function () {
  //     console.log("focusing");
  //   };
  //   // console.log(input);
  // }, []);

  const handleShowEmoji = () => {
    inputRef.current.focus();
    setShowEmoji(!showEmoji);
  };

  const handleEmojiClick = (obj) => {
    console.log(obj);
    const emoji = obj.emoji;
    const ref = inputRef.current.querySelector("input");
    ref.focus();
    console.log(ref);
    const start = message.substring(0, ref.selectionStart);
    const end = message.substring(ref.selectionStart);
    const msg = start + emoji + end;
    setMessage(msg);
    setCursorPosition(start.length + emoji.length);

    // setMessage((prevMessage) => prevMessage + emoji);
  };

  useEffect(() => {
    inputRef.current.querySelector("input").selectionEnd = cursorPosition;
  }, [cursorPosition]);

  const handleSend = () => {
    socket.send(
      JSON.stringify({
        message: message,
        sender: user.id,
        receiver: receiver.id,
      })
    );
    setMessage("");
    setShowEmoji(!showEmoji);
  };

  return (
    <>
      <Stack
        direction={"column"}
        spacing={2}
        justifyContent={"space-between"}
        sx={{ flex: "1" }}
      >
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
          p={2}
          sx={{ bgcolor: "background.paper", borderRadius: 5 }}
        >
          <UserName>
            <AvatarUser
              src={receiver.avatar}
              alt="avatar"
              sx={{ bgcolor: receiver.background }}
            />
            <Stack direction={"column"}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 400, lineHeight: 1, cursor: "pointer" }}
                onClick={() => navigate("/profil/" + receiver.id)}
              >
                {receiver.username}
              </Typography>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    background: status ? "#50e450" : "gray",
                    borderRadius: 50,
                  }}
                ></span>
                <Typography
                  variant="caption"
                  color={"#888"}
                  sx={{ fontSize: "0.6rem" }}
                >
                  en ligne
                </Typography>
              </Stack>
            </Stack>
          </UserName>
          <IconButton>
            <IconMenuDots style={{ width: 20, height: 20, fill: "#333" }} />
          </IconButton>
        </Stack>
        <Stack
          // id="chat"
          ref={chatContainerRef}
          direction={"column"}
          sx={{
            width: "100%",
            height: "100%",
            overflowY: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {messages.map((message, index) =>
            message.user === user.id ? (
              <MessageMyMessage key={index}>
                <Stack
                  direction={"column"}
                  sx={{
                    maxWidth: "75%",
                    bgcolor: "#fff",
                    px: 2,
                    py: 1,
                    borderRadius: "1rem 1rem 0 1rem",
                  }}
                >
                  <Typography variant="body1">{message.messageText}</Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "0.6rem",
                      color: "#999",
                      alignSelf: "flex-end",
                    }}
                  >
                    {moment(message.createdAt).format("h:mm")}
                  </Typography>
                </Stack>
                <AvatarUser
                  src={user.avatar}
                  alt={user.username}
                  sx={{ bgcolor: user.background }}
                />
              </MessageMyMessage>
            ) : (
              <MessageFriendMessage key={index}>
                <AvatarUser
                  src={receiver.avatar}
                  alt="avatar"
                  sx={{ bgcolor: receiver.background }}
                />
                <Stack
                  direction={"column"}
                  sx={{
                    maxWidth: "75%",
                    bgcolor: "#2469d8",
                    px: 2,
                    py: 1,
                    borderRadius: "1rem 1rem 1rem 0",
                  }}
                >
                  <Typography variant="body1">{message.messageText}</Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: "0.6rem",
                      color: "#efefef",
                      alignSelf: "flex-start",
                    }}
                  >
                    {moment(message.createdAt).format("h:mm")}
                  </Typography>
                </Stack>
              </MessageFriendMessage>
            )
          )}
        </Stack>

        <ChatInput
          style={{
            background: darkMode ? "#121212" : "#fff",
          }}
        >
          <IconButton sx={{ bgcolor: darkMode ? "#333" : "#efefef" }}>
            <AttachFileIcon sx={{ color: darkMode ? "#fff" : "#333" }} />
          </IconButton>
          <IconButton
            sx={{ bgcolor: darkMode ? "#333" : "#efefef" }}
            onClick={handleShowEmoji}
          >
            <EmojiIcon sx={{ color: darkMode ? "#fff" : "#333" }} />
          </IconButton>

          <Box
            sx={{
              position: "absolute",
              top: -400,
              display: showEmoji ? "block" : "none",
            }}
          >
            <EmojiPicker
              onEmojiClick={handleEmojiClick}
              emojiStyle={EmojiStyle.NATIVE}
              width={300}
              height={400}
              skinTonesDisabled={false}
              sx={{ position: "absolute" }}
            />
          </Box>

          <InputBase
            ref={inputRef}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type de message"
            sx={{ width: "100%", fontSize: "0.9rem", px: 2 }}
          />
          <IconButton
            sx={{ bgcolor: darkMode ? "#333" : "#efefef", p: 1.5 }}
            onClick={handleSend}
          >
            <IconSend style={{ width: 17, height: 17, fill: "#2469d8" }} />
          </IconButton>
        </ChatInput>
      </Stack>
      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={3}
        sx={{
          width: "20vw",
          height: "auto",
          display: {
            md: openSidebar ? "none" : "flex",
            xl: "flex",
          },
          bgcolor: "background.paper",
          borderRadius: 5,
          py: 4,
        }}
      >
        <Box
          sx={{
            width: 150,
            height: 150,
            bgcolor: receiver.background,
            borderRadius: 5,
          }}
        >
          <Avatar
            src={receiver.avatar}
            alt={receiver.username}
            sx={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Typography>{receiver.username}</Typography>
        <Typography onClick={() => navigate("/profil/" + receiver.id)}>
          voir le profil
        </Typography>
      </Stack>
    </>
  );
};

export default MessageUser;
