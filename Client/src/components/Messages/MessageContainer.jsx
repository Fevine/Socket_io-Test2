import React, { useState } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected'

function MessageContainer() {

  const [chatSelected, setChatSelected] = useState(false)

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {chatSelected ? (
        <>
          {/* Header */}
          <div className="bg-slate-500">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">Crisina</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )
        :
        <NoChatSelected />}
    </div>
  )
}

export default MessageContainer
