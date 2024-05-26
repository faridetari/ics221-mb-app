import React from 'react';

const MessageBoardItem = ({ id, myName, mySentence, msgNum }) => {
  return (
    <tr>
      <td>{msgNum}</td>
      <td>{myName}</td>
      <td>{mySentence}</td>
    </tr>
  );
}

export default MessageBoardItem;
