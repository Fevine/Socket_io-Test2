import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt='Tailwind css bouble component'
            src="https://avatar.iran.liara.run/public/girl?username=Crisina2"
          />
        </div>
      </div>

      <div className="chat-bubble text-white bg-blue-500">Hi Sup!</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">12:42</div>
    </div>
  )
}

export default Message
