import MessageBoardItem from '@/components/MessageBoardItem'
const MessageBoard= () => {
    const { Table } = ReactBootstrap;
    const MyList= [
    {id:"1",myName:"Bill", mySentence:"Hi All!"},
    {id:"2",myName:"Ann", mySentence:"ICS 221 is fun!"},
    {id:"3", myName:"Johnny", mySentence:"I'm Stranded"},
    {id:"4",myName:"Barb", mySentence:"Hi"},
    {id:"5",myName:"Frank", mySentence:"Who's tried?"},
  {id:"6",myName:"Sarah", mySentence:"I heart React"}
  ];
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
        {MyList.map(item => (
          <MessageBoardItem key={item.id} {...item} />
        ))}
      </tbody>
    </Table>
      )
}
export default MessageBoard;