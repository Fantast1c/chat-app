import { useEffect, useState } from 'react'
import axios from 'axios'
import './ChatPage.css'


type dataType= {
    chatName:string
    isGroupChat:boolean
    users:{
        name:string
        email:string
    }
    _id:string
}

const ChatPage = () => {

    const [chats, setChats] = useState([])

    const fetchChatsAPI = async () => {
        const {data} = await axios.get('http://localhost:5000/api/chat')
        setChats(data);
    }

    useEffect(()=>{
        fetchChatsAPI();
    },[])

  return (
  <div >
    
  </div>
    )
  }

export default ChatPage
