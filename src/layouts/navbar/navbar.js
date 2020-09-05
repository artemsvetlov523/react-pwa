import React, { Component } from "react";
import './navbar.css'
import 'antd/dist/antd.css'
import { Menu } from "antd";

class Navbar extends Component{

    state = {
        current: 'explore'
    }

    handleClick = e => {
        this.setState({ current: e.key });
    };

    render() {

        const { current } = this.state

        return (
            <div className='navbarContainer'>
                <Menu onClick={this.handleClick} mode='horizontal' defaultSelectedKeys={[current]}>
                    <Menu.Item style={{border: 'none'}} key="explore">
                        <i className="fas fa-home"></i>
                        <p>Home</p>
                    </Menu.Item>
                    <Menu.Item style={{border: 'none'}} key="Learn">
                        <i className="fas fa-plane"></i>
                        <p>Flights</p>
                    </Menu.Item>
                    <Menu.Item style={{border: 'none'}} key="Sell">
                        <i className="fas fa-user-alt"></i>
                        <p>Profile</p>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

export default Navbar