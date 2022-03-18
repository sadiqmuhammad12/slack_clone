import React, { useState , useEffect} from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import  StarBorderOutlinedIcon  from '@material-ui/icons/StarBorderOutlined';
import  InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebse';
import Message from './Message';
import ChatInput from './ChatInput';
const Chat = () => {
  const {roomId} = useParams();
  const [roomDetails,setRoomdetails] = useState();
  const [roomMessages,setroomMessages] = useState([]);
  useEffect(() => {
    if(roomId)
    {
      db.collection("rooms")  
      .doc(roomId)
      .onSnapshot((snapshot) => (setRoomdetails(snapshot.data())))
    }
    db.collection("rooms")
    .doc(roomId)
    .collection("messages")
    .orderBy('timestamp','asc')
    .onSnapshot((snapshot) => (setroomMessages(snapshot.docs.map((doc) => doc.data()))))

  }, [roomId]);
  console.log(roomDetails);
  console.log("jjjjjjjjjjjjk", roomMessages);
  return (
    <div className='chat'>
      <div className="chat_header">
        <div className="chat_headerLeft">
          <h4 className="chat_channelName">
            <span>#{roomDetails?.name}</span>
             <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat_headerRight">
          <p><InfoOutlinedIcon /> Details</p>
        </div>
      </div>
      <div className="chat_message">
        {roomMessages.map(({message,user,userImage,timestamp}) => (
          <Message 
            message={message}
            user = {user}
            userImage = {userImage}
            timestamp={timestamp}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
      
    </div>
  )
}

export default Chat