import './App.css';
import 'antd/dist/antd.css'
import {Route, Routes} from "react-router-dom";
import HomePage from './components/pages/homePage/HomePage';
import ChatPage from './components/pages/chatPage/ChatPage';

function App() {
  return (
    <div className="App">
         <Routes>
            <Route path='/' element = {<HomePage/>} />
            <Route path='/chats' element = {<ChatPage/>} />
         </Routes>
    </div>
  );
}

export default App;
