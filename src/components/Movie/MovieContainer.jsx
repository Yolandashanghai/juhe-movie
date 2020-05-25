import React, { Component } from 'react'
import HotMoviesTody from './HotMoviesTody.jsx'
import TheatersMovies from './TheatersMovies.jsx'
import Theaters from './Theaters.jsx'
import { Layout, Menu } from 'antd';

import { Link, Route,Switch } from 'react-router-dom'
const { Content, Sider } = Layout;
export default class MovieContainer extends Component {
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Layout style={{ height: '100%' }}>
                    <Sider width={200} className="site-layout-background">
                        <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
                            <Menu.Item key="1"><Link to="/movie/city/3">今日热映</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/movie/theaters/1188">影院上映影片信息</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/movie/1/190465">影片上映影院查询</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/movie/city/5">今日热映2</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout style={{ paddingLeft: '1px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                        <Switch>
                                <Route path="/movie/city/:cityid" component={HotMoviesTody}></Route>
                                <Route path="/movie/theaters/:cinemaid" component={TheatersMovies}></Route>
                                <Route path="/movie/:cityid/:movieid" component={Theaters}></Route>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}