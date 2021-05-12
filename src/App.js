import React from 'react';
import { Button, InputLabel, Input, FormControl } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase";
import Message from "./Message";
import firebase from 'firebase'; 
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([]);
  const [userName,setUserName] = useState('');


  //getting data from firebase

  useEffect(()=>
  {
    db.collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot =>
      {
        setMessage(snapshot.docs.map(doc => ({id:doc.id, message: doc.data()})))
      });
  },[])


  useEffect(()=>
  {
    setUserName(prompt('Enter Username'))
  },[])
  
  const sendMessage = (e) => {
    e.preventDefault();
    //adding to firebase
    db.collection('messages').add({
      message: input,
      username: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()//exact time when th message sent-local time of each person
    })

    setInput("");
  };
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399" alt="" height='100px'/>
      <h1>facebook messenger clone</h1>
      <h4>Welcome {userName}</h4>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
          className="app__input"
          placeholder="Enter the Message..."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-describedby="my-helper-text"
          />
          <IconButton
            className="app__iconbutton"
            disabled={!input}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon></SendIcon>
          </IconButton>
        </FormControl>
      </form>

      {/* Display the messages */}

      <FlipMove>
      {
      messages.map(({id,message}) => {
        return <Message key={id} userName={userName} message={message} />
      })
      }
      </FlipMove>
      
    </div>
  );
}

export default App;
