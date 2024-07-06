import { Chat } from "../Models/chat.model.js"
import { Message } from "../Models/message.model.js"

export async function sendMessage(req, res) {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let chat = await Chat.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!chat) {
            chat = await Chat.create({
                participants: [senderId, receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            chat.messages.push(newMessage._id)
        }

        // Paralel
        await Promise.all([newMessage.save(), chat.save()])

        res.status(201).send(newMessage)

    } catch (error) {
        res.status(500).send("Something went wrong!")
    }
}


export async function getMessages(req, res) {
    try {
        const { id: userToChat } = req.params
        const senderId = req.user._id


        const chat = await Chat.findOne({
            participants: { $all: [senderId, userToChat] },
        }).populate("messages")

        if (!chat) return res.status(400).send([]);

        const messages = chat.messages

        res.status(201).send(messages)
    } catch (error) {
        res.status(500).send("Something went wrong!")
    }
}
