import {Form, Button, Input, Upload, message} from 'antd';
import { LockOutlined, UserOutlined, MailOutlined} from '@ant-design/icons';
import type { RcFile} from 'antd/es/upload/interface';
import { UploadOutlined } from '@ant-design/icons';
import './Signup.css'

const Signup = () => {

    const beforeUpload = (file: RcFile) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
          return Upload.LIST_IGNORE
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
          return Upload.LIST_IGNORE
        }
        return isJpgOrPng && isLt2M;
      };

    return (
        <Form>
        <Form.Item
          name="nickname"
          rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
        >
          <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
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
          <Input  prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password  
           prefix={<LockOutlined className="site-form-item-icon" />}
           placeholder="Password"/>
        </Form.Item>
  
        <Form.Item
          name="confirm"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password   
          prefix={<LockOutlined className="site-form-item-icon" />}
           placeholder="Confirm password"/>
        </Form.Item>
        <Upload
        name="avatar"
        className="avatar-uploader"
        beforeUpload={beforeUpload}
        maxCount={1}
      >
       <Button icon={<UploadOutlined />}>Upload image</Button>
      </Upload>
        <Button type="primary" htmlType="submit" className="signup-form-button">
          Log in
          </Button>
          </Form>
    )
  }
  
  export default Signup
  