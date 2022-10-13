import {Form, Button, Input, Checkbox, message} from 'antd';
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import { useNavigate  } from "react-router-dom";
import './Login.css'
import axios from 'axios';

const defaultGuest={
  email: "guest@guest.com",
password: "guest",
}

const Login = () => {

  const navigate  = useNavigate ();

    const onFinish = async (values: any) => {
      
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
  
        const { data } = await axios.post(
          "http://localhost:5000/api/user/login",
           values ,
          config
        );

         console.log(JSON.stringify(data));
        localStorage.setItem("userInfo", JSON.stringify(data));
       
        navigate ("/chats");
      } catch (error) {
        message.error("Неверное имя пользователя или пароль")
      }
    };
      
    const submitGuest = (defaultGuest:any) =>{
      console.log(defaultGuest);
      
      onFinish(defaultGuest)
    }

    return (
       
        <Form
         name="normal_login"
         className="login-form"
         initialValues={{ remember: true }}
         onFinish={onFinish}
       >
         <Form.Item
           name="email"
          rules={[
            {type: 'email', message: 'The input is not valid E-mail!'},
            {
              required: true,
              message: 'Please input your E-mail!'
            },
          ]}
         >
           <Input 
           prefix={<MailOutlined />} placeholder="Email"
           />
         </Form.Item>
   
         <Form.Item
           name="password"
           rules={[{ required: true, message: 'Please input your password!' }]}
         >
           <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
           />
         </Form.Item>
   
         <Form.Item name="remember" valuePropName="checked" >
           <Checkbox>Remember me</Checkbox>
         </Form.Item>
   
         <Form.Item>
           <Button type="primary" htmlType="submit" className="login-form-button">
           Log in
           </Button>
           <br />
           <Button onClick = {()=>{submitGuest(defaultGuest)}} type="default" htmlType="button" className="login-form-button">
           Guest
           </Button>
         </Form.Item>
       </Form>
    )
  }
  
  export default Login
  