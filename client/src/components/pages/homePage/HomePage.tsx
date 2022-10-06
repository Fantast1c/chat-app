import {Tabs, Typography} from 'antd';
import Login from '../../authentication/login/Login';
import Signup from '../../authentication/signup/Signup';
import './HomePage.css'


const HomePage = () => {

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
