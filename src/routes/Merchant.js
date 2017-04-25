import React, { PropTypes }  from 'react';
import { connect } from 'dva';
import { Button, Row, Form, Input } from 'antd'
import styles from './Login.less';
import 'antd/dist/antd.css';

const FormItem = Form.Item


function Merchant({
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
      dispatch({ type: "login/login" , payload: {
        username: values.username,
        password: values.password,
      }})
    })
  }
  return(
    <div className={styles.form}>
      <div className={styles.logo}>
        <h2>Change Merchant Info</h2>
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

      </form>
    </div>
  )
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Form.create()(Merchant));
