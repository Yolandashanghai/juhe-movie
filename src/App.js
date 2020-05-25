import React,{ Component }  from 'react';
import './css/App.scss';

import Home from './components/Home/HomeContainer.jsx'
import Movie from './components/Movie/MovieContainer.jsx'
import About from './components/About/AboutContainer.jsx'

import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export default class App extends Component {
  constructor(props){
    super(props)

  }
  UNSAFE_componentWillMount(){
    // console.log(window.location)
    // console.log(window.location.hash.split('/')[1])
  }
  render(){
    return (
      // <div className="App">
      <HashRouter>
        <Layout className='layout'>
          <Header>
            <div className='logo' />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={window.location.hash.split('/')[1]}>
              <Menu.Item key="#"><Link to="/home">首页</Link></Menu.Item>
              <Menu.Item key="movie"><Link to="/movie/in_theaters/1">电影</Link></Menu.Item>
              <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
            </Menu>
          </Header>
          <Content style={{ backgroundColor: '#fff' }}>
            <Switch>
              {/* <Switch>标签作用：在有switch标签时，<Route>在路径相同的情况下，只匹配第一个，这个可以避免重复匹配； */}
              {/* Route标签 2个作用，1匹配规则(模糊匹配或exact精确匹配)，2占位符，匹配的组件放在此处 */}
              <Route path="/home" component={Home} />
              <Route path="/movie" component={Movie} />
              <Route path="/about" component={About} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </HashRouter>
    );
  }
  }
