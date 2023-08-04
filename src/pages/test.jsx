import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const Test = () => {
  const notificationSocket = new WebSocket(
    "ws://127.0.0.1:8000/ws/notification/"
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    // notificationSocket.on = (e) => {
    //   const data = JSON.parse(e.data);
    //   console.log("lala" + data.message);
    //   setData(data.message);
    // };

    // return () => {
    //   notificationSocket.close();
    // };
    notificationSocket.onopen = function () {
      console.log("connexion reussi");
    };

    notificationSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);
      setData(data.message);
      console.log("Donnees recues", data);
    };

    notificationSocket.onclose = function () {
      console.log("connexion ferme");
    };
  }, []);

  const handleClick = () => {
    const user = document.querySelector("#user").value;
    const message = user + "clicked";
    notificationSocket.send(
      JSON.stringify({
        message: message,
      })
    );
  };

  return (
    <div>
      <input type="text" id="user" />
      <button onClick={handleClick}>send</button>
      <div>{data}</div>
    </div>
  );
};

export default Test;
