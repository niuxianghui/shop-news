import React, { Component } from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class MerchantModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        onOk(this.props.record.id,values);
        this.hideModelHandler();
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { introduction, address, phoneNumber } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>
          { children }
        </span>
        <Modal
          title="Edit Merchant"
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
        >
          <Form horizontal onSubmit={this.okHandler}>
            <FormItem
              {...formItemLayout}
              label="introduction"
            >
              {
                getFieldDecorator('introduction', {
                  initialValue: introduction,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="address"
            >
              {
                getFieldDecorator('address', {
                  initialValue: address,
                })(<Input />)
              }
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="phoneNumber"
            >
              {
                getFieldDecorator('phoneNumber', {
                  initialValue: phoneNumber,
                })(<Input />)
              }
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(MerchantModal);

