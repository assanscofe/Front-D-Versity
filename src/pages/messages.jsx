import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import ListUser from "../components/message/listUser";

const Messages = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "stretch",
          overflow: "auto",
          gap: 2,
        }}
      >
        <ListUser />
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default Messages;
