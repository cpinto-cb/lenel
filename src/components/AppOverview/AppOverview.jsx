import React from 'react';
import {
    Layout, Menu, Row, Col
} from 'antd';
// import WidgetDetailsContainer from './WidgetDetail/WidgetDetailContainer';
import ReaderListContainer from '../AccessList/AccessListContainer';
import ReaderDetailsContainer from '../AccessDetails/AccessDetailsContainer';

const { Header, Content, Footer } = Layout;
const AppOverview = () => (
    <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">Readers</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="overview">
                <Row gutter={16}>
                    <Col sm={24} md={12}>
                        <ReaderListContainer />
                    </Col>
                    <Col sm={24} md={12}>
                        <ReaderDetailsContainer />
                    </Col>
                </Row>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by Chris Pinto</Footer>
    </Layout>
);
export default AppOverview;
