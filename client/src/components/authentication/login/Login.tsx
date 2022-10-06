import {Form, Button, Input, Checkbox} from 'antd';
import { LockOutlined, MailOutlined} from '@ant-design/icons';
import './Login.css'

const Login = () => {

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };

    return (
       
        <Form
         name="normal_login"
         className="login-form"
         initialValues={{ remember: true }}
         onFinish={onFinish}
       >
         <Form.Item
           name="email"
           rules={[{ required: true, message: 'Please input your username!' }]}
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
           <Button type="default" htmlType="submit" className="login-form-button">
           Guest
           </Button>
         </Form.Item>
       </Form>
    )
  }
  
  export default Login
  