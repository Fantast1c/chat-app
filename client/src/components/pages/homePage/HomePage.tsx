import {Tabs, Typography} from 'antd';
import Login from '../../authentication/login/Login';
import Signup from '../../authentication/signup/Signup';
import './HomePage.css'
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


const HomePage = () => {

  const navigate = useNavigate()

   useEffect(() => {
     // @ts-ignore
     const user = JSON.parse(localStorage.getItem("userInfo"));

     if (user) navigate("/chats");
    }, [navigate]);

  return (
    <div className='container'>
      <Typography.Title>Messager</Typography.Title>
    <Tabs defaultActiveKey='1'>
    <Tabs.TabPane tab="Login" key="1">
      <Login/>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Registration" key="2">
      <Signup/>
      </Tabs.TabPane>
    </Tabs>
    </div>
  )
}

export default HomePage
