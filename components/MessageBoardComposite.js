import React, { useState } from 'react';
import NewMessageForm from '@/components/NewMessageForm';
import MessageBoard from '@/components/MessageBoard';

const MessageBoardComposite = () => {
  const [messages, setMessages] = useState([
    { id: "1", myName: "Bill", mySentence: "Hi All!" },
    { id: "2", myName: "Ann", mySentence: "ICS 221 is fun!" },
    { id: "3", myName: "Johnny", mySentence: "I'm Stranded" },
    { id: "4", myName: "Barb", mySentence: "Hi" },
    { id: "5", myName: "Frank", mySentence: "Who's tried?" },
    { id: "6", myName: "Sarah", mySentence: "I heart React" }
  ]);

  const addNewMessage = (values) => {
    console.log(values);
    const newMessage = {
      id: messages.length,
      myName: values.name,
      mySentence: values.msgText
    };
    setMessages([newMessage, ...messages]); // Update state with new message at the beginning
    console.log(messages); // For debugging purposes
  };

  return (
    <>
      <NewMessageForm addNewMessage={addNewMessage} />
      <MessageBoard messages={messages} />
    </>
  );
}

export default MessageBoardComposite;
