import React, {useState} from 'react';
import {Button, Drawer} from "antd";
import {SearchOutlined} from "@ant-design/icons";


const SideDrawer = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={showDrawer} type="text">
                <SearchOutlined /> Search User
            </Button>
            <Drawer title="Search users" placement="left" onClose={onClose} open={open}>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export default SideDrawer;