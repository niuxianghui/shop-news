import React from 'react';
import { connect } from 'dva';

import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb, Icon, Carousel, Collapse } from 'antd';
const Panel = Collapse.Panel;
import { Card, Col, Row, Table, Button, Popconfirm } from 'antd';
import MerchatModal from '../components/MerchantModal'
import styles from './Users.css';
import GoodModal from '../components/GoodModal'

//评论内容
const text = `
  白菜好吃、 萝卜好吃、 土豆好吃.
`;

function MerchantDetail({ detail, dispatch }) {
  function editHandler2(id, values) {
    console.log(id)
    console.log(values)
    dispatch({ type: "detail/patchGood", payload: { id, values}})
  }
  function deleteHandler(id) {
    dispatch({ type: "detail/deleteGood", payload: { id }})
  }
  function createHandler(id, values) {
    dispatch({ type: "detail/createGood", payload: { values }})
  }
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
  },
  {
    title: 'Operation',
    key: 'operation',
    render: (text, record) => (
      <span className={styles.operation}>
          <GoodModal record={record} onOk={editHandler2}>
            <a>Edit</a>
          </GoodModal>
          <br/>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, record.id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
    ),
  }
  ];

  const tableProps = {
    columns: columns,
    dataSource: detail.good,
    onChange() {

    }
  }
  function editHandler(id, values) {
    // dispatch({
    //   type: 'users/patch',
    //   payload: { id, values },
    // });
    dispatch({ type: "detail/patch", payload: {id, values}})
    console.log(id)
    console.log(values);
  }
  return(
    <div>
      <Carousel autoplay>
        <div>
          <img alt="example" width="100%" high="30%" src="/image4.png" />
        </div>
        <div>
          <img alt="example" width="100%" high="30%" src="/image5.png" />
        </div>
        <div>
          <img alt="example" width="100%" high="30%" src="/image6.png" />
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
        <br/>
        <MerchatModal record={detail.merchant} onOk={editHandler}>
          <Button type="primary">Edit</Button>
        </MerchatModal>
      </div>
      <br/>
      <br/>
      <br/>
      <h1>商品信息</h1>
      <div>
        <br/>
        <GoodModal record={{}} onOk={createHandler}>
          <Button type="primary">Create</Button>
        </GoodModal>
        <br/>
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

export default connect(mapStateToProps)(MerchantDetail);
