
const socket =  io("http://localhost:8000")
const form = document.getElementById("send-container")
const na = prompt("enter your name")

const messageInput = document.getElementById("messageInp")
const messageContainer = document.querySelector(".container")
