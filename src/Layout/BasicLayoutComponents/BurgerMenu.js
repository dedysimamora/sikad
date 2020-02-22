import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import {Link} from "react-router-dom"
import MainLogo from "../../Components/MainLogo"
const {Sider} = Layout;
const { SubMenu } = Menu;


const BurgerMenu = (props) => {
    const {collapsed} = props
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} width={225} breakpoint={'xs'}>
            <div className="logo">
                <MainLogo collapsed={collapsed} />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to='/dashboard'>
                        <Icon type="bar-chart" />
                        <span>Menu Utama</span>
                    </Link>
                </Menu.Item>
                <SubMenu
                    key="2"
                    title={
                        <Link to='/arsip'>
                            <span>
                                <Icon type="database" />
                                <span>Arsip</span>
                            </span>
                        </Link>
                    }
                >
                    <Menu.Item key="5">
                        <Link to='/arsip/dokumen'>
                            <Icon type="file-text" />
                            <span>Arsip Dokumen</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to='/arsip/foto'>
                            <Icon type="picture" />
                            <span>Arsip Foto</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to='/arsip/video'>
                            <Icon type="play-square" />
                            <span>Arsip Video</span>
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="3">
                    <Link to='/profile'>
                        <Icon type="user" />
                        <span>Profile</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default BurgerMenu