import MessageBoardItem from '@/components/MessageBoardItem';
import React from 'react';
import Table from 'react-bootstrap/Table';

const MessageBoard = ({ messages }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((item, index) => (
          <MessageBoardItem key={item.id} {...item} msgNum={index + 1} />
        ))}
      </tbody>
    </Table>
  );
}

export default MessageBoard;
