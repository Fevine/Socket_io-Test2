import React from 'react'
import Chat from './Chat'

function Chats() {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Chat />
      <Chat />
      <Chat />
    </div>
  )
}

export default Chats
