import React, { useState } from 'react'
import useChat from '../zustand/useChat'
import toast from 'react-hot-toast'

function useSendMessage() {

  const [lodaing, setLodaing] = useState(false)
  const { messages, setMessages, selectedChat } = useChat()

  async function sendMessage(message) {
    setLodaing(true)
    try {
      const res = await fetch(`/api/messages/send/${selectedChat._id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      })

      const data = await res.json()
      if (data.error) {
        throw new Error(data.error)
      }

      setMessages([...messages, data])

    } catch (error) {
      toast.error(error.message)
    } finally {
      setLodaing(false)
    }
  }

  return { sendMessage, lodaing }
}

export default useSendMessage
