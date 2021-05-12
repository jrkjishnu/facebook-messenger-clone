import { Button, InputLabel, Input, FormControl } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([
    {username:'kalasu',text:'hlooo'},
    {username:'jayasu',text:'hi kutta'},

  ]);
  const [userName,setUserName] = useState('');

  useEffect(()=>
  {
    setUserName(prompt('Enter Username'))
  },[])
  
  const sendMessage = (e) => {
    e.preventDefault();
    setMessage([...messages, {username:userName,text:input}]);
    setInput("");
  };
  return (
    <div className="App">
      <h1>facebook messenger clone</h1>
      <h4>Welcome {userName}</h4>
      <form>
        <FormControl>
          <InputLabel>Enter the Message...</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-describedby="my-helper-text"
          />
          <Button
            disabled={!input}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {/* Display the messages */}
      {
      messages.map((message) => {
        return <Message userName={userName} message={message} />
      })
      }
    </div>
  );
}

export default App;
