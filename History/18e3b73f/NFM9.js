const asyncHandler = require("express-async-handler");
const User = require("../model/UserModel")
const Chat = require("../model/ChatModel")

const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body

    if (!userId) {
        console.log("UserId param not sent with request");
        return res.sendStatus(400)
    }

    var isChat = await Chat.find({
        isGroupChat: false,
        $and: [
            { users: { $elemMatch: { $eq: req.user._id } } },
            { users: { $elemMatch: { $eq: userId } } },
        ]
    }).populate("users", "-password").populate("latestMessage")

    isChat = await User.populate(isChat, {
        path: "latestMessage.sender",
        select: "name pic email"
    })

    if (isChat.length > 0) {
        res.send(isChat[0])
    }
    else {
        var chatData = {
            chatName: "sender",
            isGroupChat: false,
            users: [req.user._id, userId]
        }

        try {
            const createdChat = await Chat.create(chatData)
            const FullChat = await Chat.findOne({ _id: createdChat._id }).populate("users", "-password")
            res.status(200)
            res.send(FullChat)
        } catch (error) {
            res.status(400);
            throw new Error(error.message)
        }
    }
})

const fetchChats = asyncHandler(async (req, res) => {
    try {
        Chat.find({ users: { $elemMatch: { $eq: req.user._id } } })
        .populate("users" , "password")
            .populate("groupAdmin", "-password")
            .populate("latestMessage")
            .sort({ updatedAt: -1 })
            .then((async (result) => {
                result = await User.populate(isChat, {
                    path: "latestMessage.sender",
                    select: "name pic email"
                })
            }))

        res.status(200).send(result)
    } catch (error) {
        res.status(400)
        throw new Error(error.message)
    }
})

const createGroupChat = asyncHandler(async (req, res) => {
    if(!req.body.users || !req.body.name){
        return res.status(400).send({message : "Please Fill all the feilds"})
    }

    var users = JSON.parse(req.ody)

module.exports = { accessChat, fetchChats, createGroupChat }