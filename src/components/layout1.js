import { Link } from "gatsby";
import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Logo from './logo';
import Lessons from '../components/lessons';
import Videos from '../components/videos';
import { Row, Col } from 'antd';

const { Header, Sider, Content } = Layout;

export default class Layout1 extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <Logo />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item className="menu-item" key="1">
              <span class="anticon">S</span>
              <span>Sarali Swaras</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="2">
            <span class="anticon">J</span>
              <span>Janta Swaras</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="3">
              <span class="anticon">D</span>
              <span>Datu Swaras</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="4">
              <span class="anticon">M</span>
              <span>Melasthai Swaras</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="5">
              <span class="anticon">A</span>
              <span>Alankaras</span>
            </Menu.Item>
            <Menu.Item className="menu-item" key="6">
              <span class="anticon">G</span>
              <span>Geethas</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className="lesson-content">
            <Row>
              <Col xs={24} sm={24} md={16}>
                <Lessons  />
              </Col>
              <Col  xs={24} sm={24} md={8}>
                <Videos  />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
