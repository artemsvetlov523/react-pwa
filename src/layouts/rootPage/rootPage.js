import React, {Component} from 'react'
import {Route} from "react-router-dom";

import { Layout } from 'antd';
import Navbar from "../navbar/navbar";
import Home from "../../containers/home/home";

const { Content } = Layout;

class RootPage extends Component{

    render() {

        return (
            <Layout>
                <Layout>
                    <Content className={'root-content'}>
                        <div className={'page-content'}>
                            <Route path="/home" component={Home} exact />
                        </div>
                    </Content>
                    <Navbar/>
                </Layout>
            </Layout>
        )
    }
}

export default RootPage
