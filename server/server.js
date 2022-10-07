import express from "express"
import chats from "./data/data.js";
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from "./config/db.js"

dotenv.config();
connectDB()

const PORT = 5000;

const app = express();

//CORS
const allowedOrigins = ['http://localhost:3000'];
const options = {
  origin: allowedOrigins
};

app.use(cors(options))

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