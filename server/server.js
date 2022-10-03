import express from "express"
import chats from "./data/data.js";

const PORT = 5000;

const app = express();

app.get('/', (req, res)=>{
        res.send("API is running")
})
app.get('/api/chat', (req, res)=>{
    res.send(chats)
})
app.get('/api/chat/:id', (req, res)=>{
    const singleChat = chats.find(c=>c._id === req.params.id)
    res.send(singleChat)
    
    console.log(req.params.id)
})


app.listen(PORT, console.log("SERVER STARTED"));