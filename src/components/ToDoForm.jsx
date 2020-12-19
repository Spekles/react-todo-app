import React from 'react';
import { Form, Input, Button } from 'antd';

export const ToDoForm = (props) => {
  const { onSubmit } = props;
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    if (onSubmit) {
      onSubmit(values.title, values.descript);
    }
    form.resetFields();
  }

  return (
    <Form className="todo-form" form={form} layout={'inline'} onFinish={onFinish}>
      <Form.Item name="title" className="todo-form-input">
        <Input placeholder={'Title'} minLength="3" pattern="[A-Z][A-Za-z]*"/>
      </Form.Item>
      <Form.Item name="descript" className="todo-form-input">
        <Input placeholder={'Description'} minLength="3"/>
      </Form.Item>
      <Form.Item className="todo-form-actions">
        <Button htmlType="submit" type="primary">Add</Button>
      </Form.Item>
    </Form>
  )
}
