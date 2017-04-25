import React, { PropTypes }  from 'react';
import { connect } from 'dva';
import { Button, Row, Form, Input } from 'antd'
import styles from './Login.less';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
function callback(key) {
  console.log(key);
}

const FormItem = Form.Item

function Login({
  login,
  dispatch,
  form: {
    getFieldDecorator,
    validateFieldsAndScroll,
  },
}) {
  function handleOk() {
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: "login/userlogin" , payload: {
        username: values.username,
        password: values.password,
      }})
    })
  }
  return (

    <div className={styles.form}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="User" key="1"><div className={styles.logo}>
          <h2>User Login</h2>
        </div>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '请填写用户名',
                  },
                ],
              })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请填写密码',
                  },
                ],
              })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
            </FormItem>
            <Row>
              <Button type="primary" size="large" onClick={handleOk} >
                登录
              </Button>
              <p>
                <span>账号：guest</span>
                <span>密码：guest</span>
              </p>
            </Row>

          </form></TabPane>
        <TabPane tab="Merchant" key="2">
          <div className={styles.logo}>
            <h2>Merchant Login</h2>
          </div>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '请填写用户名',
                  },
                ],
              })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请填写密码',
                  },
                ],
              })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
            </FormItem>
            <Row>
              <Button type="primary" size="large" onClick={handleOk} >
                登录
              </Button>
            </Row>

          </form>
        </TabPane>
        <TabPane tab="Admin" key="3">
          <div className={styles.logo}>
            <h2>Admin Login</h2>
          </div>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                    message: '请填写用户名',
                  },
                ],
              })(<Input size="large" onPressEnter={handleOk} placeholder="用户名" />)}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: '请填写密码',
                  },
                ],
              })(<Input size="large" type="password" onPressEnter={handleOk} placeholder="密码" />)}
            </FormItem>
            <Row>
              <Button type="primary" size="large" onClick={handleOk} >
                登录
              </Button>
            </Row>

          </form>
        </TabPane>
      </Tabs>
    </div>
  );
}

Login.propTypes = {
  form: PropTypes.object,
  login: PropTypes.object,
  dispatch: PropTypes.func,
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Form.create()(Login));
