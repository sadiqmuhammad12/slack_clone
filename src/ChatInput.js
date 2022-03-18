import React, {useState} from 'react'
import {useStateValue} from './StateProvider';
import db from './firebse';
import './ChatInput.css';
// import firebase from 'firebase'
import firebase from 'firebase/compat/app';


 

const ChatInput = ({channelName,channelId}) => {
    const [input,setInput] = useState("");
    const [{user}] = useStateValue();

    const sendMessage =(e) =>{
        // console.log(channelId);
        console.log("sadiq")
        e.preventDefault();
        if(channelId)
        { 
           db.collection('rooms').doc(channelId).collection('messages').add({
               message : input,
               timestamp : firebase.firestore.FieldValue.serverTimestamp(),
               user : user.displayName,
               userImage : user.photoURL,
           });
        }
        setInput("");
    };
  return (
    <div className='chatinput'>
        <form>
            <input  value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName?.toLowerCase()}`}/>
            <button type='submit' onClick={sendMessage}>SEND</button>
        </form>
    </div>
  )
}

export default ChatInput