import MessageBoardItem from '@/components/MessageBoardItem'
import Table from 'react-bootstrap/Table'
const MessageBoard= ({messages}) => {
    
    
  return(
    <Table striped border hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        {messages.map(item => (
          <MessageBoardItem key={item.id} {...item} />
        ))}
      </tbody>
    </Table>
      )
}
export default MessageBoard;