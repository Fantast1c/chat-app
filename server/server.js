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


app.listen(PORT, console.log("SERVER STARTED"));