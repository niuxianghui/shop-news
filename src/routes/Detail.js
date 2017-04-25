import React from 'react';
import { connect } from 'dva';
import styles from './Detail.css';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon, Carousel, Collapse } from 'antd';
const Panel = Collapse.Panel;
import { Card, Col, Row, Table, Button } from 'antd';

//评论内容
const text = `
  白菜好吃、 萝卜好吃、 土豆好吃.
`;

function Detail({ detail }) {
  const columns = [{
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  }, {
    title: 'Introduce',
    dataIndex: 'introduction',
    key: 'introduction',
  }];

  const tableProps = {
    columns: columns,
    dataSource: detail.good,
    onChange() {

    }
  }
  return(
    <div>
      <Carousel autoplay>
        <div>
          <img alt="example" width="100%" high="30%" src="http://xianghui.chinacloudapp.cn:8080/image4.jpeg" />
        </div>
        <div>
          <img alt="example" width="100%" high="30%" src="http://xianghui.chinacloudapp.cn:8080/image5.jpeg" />
        </div>
        <div>
          <img alt="example" width="100%" high="30%" src="http://xianghui.chinacloudapp.cn:8080/image6.jpeg" />
        </div>
      </Carousel>
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <Row>
          <Col span="8">
            <Card title="Introduction" bordered={false}>{detail.merchant.introduction}</Card>
          </Col>
          <Col span="8">
            <Card title="Address" bordered={false}>{detail.merchant.address}</Card>
          </Col>
          <Col span="8">
            <Card title="phone number" bordered={false}>{detail.merchant.phoneNumber}</Card>
          </Col>
        </Row>
      </div>
      <br/>
      <br/>
      <br/>
      <h1>商品信息</h1>
      <div>
        <Table  {...tableProps}/>
      </div>
      <h1>客户评论</h1>
      <Collapse bordered={false} defaultActiveKey={['1']}>
        <Panel header="user1 2017.4.1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="user2 2017.4.2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="user3 2017.4.3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  )
}

function mapStateToProps({ detail }) {
  return { detail };
}

export default connect(mapStateToProps)(Detail);
