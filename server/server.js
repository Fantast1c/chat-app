import express from "express"
import chats from "./data/data.js";
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import {notFound, errorHandler} from "./middleware/errorMiddleware.js"

dotenv.config();
connectDB()

const PORT = 5000;

const app = express();
app.use(express.json())

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
app.use('/api/user', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(PORT, console.log("SERVER STARTED"));