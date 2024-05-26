import React, { useState } from 'react';
import NewMessageForm from '@/components/NewMessageForm';
import MessageBoard from '@/components/MessageBoard';
const MessageboardComposite = () =>{

    const [messages, setMessages] = useState([
        { id: "1", myName: "Bill", mySentence: "Hi All!" },
        { id: "2", myName: "Ann", mySentence: "ICS 221 is fun!" },
        { id: "3", myName: "Johnny", mySentence: "I'm Stranded" },
        { id: "4", myName: "Barb", mySentence: "Hi" },
        { id: "5", myName: "Frank", mySentence: "Who's tried?" },
        { id: "6", myName: "Sarah", mySentence: "I heart React" }
      ]);
      const addNewMessage = (values) => {
        
        };
        return (
            <>
              <NewMessageForm addNewMessage={addNewMessage} />
              <MessageBoard messages={messages} />
            </>
          );
}

export default MessageboardComposite;