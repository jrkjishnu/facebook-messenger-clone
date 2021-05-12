import { CardContent, Card, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ userName, message }) {
  const isUser = userName === message.username;
  return (
    <div className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.username}:{message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Message;