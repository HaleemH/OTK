import React from 'react'

function Message({message}) {
  return (
    <div className="profile__message">
        Message: {message.comment}
        <br/>
        From: {message.user.username}
        <br/>
        Email: {message.user.email}
    </div>
  )
}

export default Message