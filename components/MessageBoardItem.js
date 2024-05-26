const MessageBoardItem = ({id,myName,mySentence}) => {
    return(
    <tr>
      <td>{id}</td>
      <td>{myName}</td>
      <td>{mySentence}</td>
    </tr>
  );
  }
  export default MessageBoardItem;