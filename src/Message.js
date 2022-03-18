import React from 'react'
import './Message.css';

const Message = ({message,user,userImage,timestamp}) => {
  return (
    <div className='message'>
        <img src={userImage} alt="Not found" />
        <div className="message_info">
            <h2>{user}  <span className='message_timestamp'> {new Date(timestamp?.toDate()).toUTCString()}</span></h2>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Message