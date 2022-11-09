import './ChatPage.css'
import {ChatState} from "../../../Context/ChatProvider";
import React, {useState} from "react";
import SideDrawer from "../../modules/SideDrawer";
import MyChats from "../MyChats/MyChats";
import {Button, Col, Dropdown, Layout, Menu, MenuProps, Row, Space, Typography} from "antd";
import ChatBox from "../ChatBox/ChatBox";
import {DownOutlined, MailOutlined} from "@ant-design/icons";
import Profile from "../../modules/Profile";

const ChatPage = () => {
    // @ts-ignore
    const { user } = ChatState();

    const onClick: MenuProps['onClick'] = ({ key }) => {

        console.log(`Click on item ${key}`);
    }
    const menu = (
        <Menu
            onClick={onClick}
            items={[
                // getItem()
            ]
            }
/>)
  return (
  <div className="chat_container">
      <header className="chat_header">{user && <SideDrawer />}
        <Typography.Title level={4}>Chat</Typography.Title>
          <Space>
          <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft">
                 <Button type="text">Profile <DownOutlined /></Button>
          </Dropdown>
          </Space>
      </header>
      <Row className="chat_block">
          <Col flex={2}>{user && <ChatBox />}</Col>
          <Col flex={5}>{user && <MyChats />}</Col>
      </Row>
      </div>
   )
  }
export default ChatPage
