import React , {PureComponent}from 'react';
import { Row, Col, Card, Form, Input,
  Select, Icon, Button, Dropdown, Menu, InputNumber,
  DatePicker, Modal, message, Badge, Checkbox,} from 'antd';

  const FormItem = Form.Item;
  const { Option } = Select;

  export default class SelectSimpleForm extends PureComponent {
    constructor(props) {
      super(props);

    }

    handleSearch(event) {

    }

    handleFormReset() {

    }

    render () {
     const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return(
      <Form className="ant-advanced-search-form"
      onSubmit={this.handleSearch}>

      <Row gutter={24}>
      <FormItem {...formItemLayout} icon="key" label="Keys">

      <Input placeholder="请输入" />

      </FormItem>
      </Row>


      <Row gutter={24}>
      <FormItem {...formItemLayout} label="Server">
      <Input placeholder="请输入" />

      </FormItem>
      </Row>


      <Row gutter={24}>
      <FormItem  {...formItemLayout} label="类型">
      <Select placeholder="请选择" style={{ width: 100 }}>
      <Option value="0">Config</Option>
      <Option value="1">Report</Option>
      <Option value="2">Profile</Option>
      </Select>

      </FormItem>
      </Row>


      <Row gutter={24}>
      <FormItem {...formItemLayout} label="Enabel">
      <Checkbox></Checkbox>
      </FormItem>
      </Row>


      <Row>
      <Col span={24} style={{ textAlign: 'right' }}>
      <Button icon="search" type="primary" htmlType="submit">Search</Button>
      <Button style={{ marginLeft: 16 }} onClick={this.handleReset} type="primary"> Clear </Button>
      </Col>
      </Row>


      </Form>
      );

  }
}