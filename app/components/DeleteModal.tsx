import {
  Button,
  DatePicker,
  Flex,
  Form,
  Input,
  Modal,
  Select,
  Space,
} from "antd";
import React from "react";
import { useForm } from "antd/es/form/Form";
import useTaskStore from "../store/useTaskStore";

const DeleteModal = () => {
  const closeModal = useTaskStore((s) => s.closeModal);
  const isOpenModal = useTaskStore((s) => s.isOpenModal);
  const [form] = useForm();
  return (
    <Modal
      title="Add task"
      open={isOpenModal}
      onOk={(values) => {
        console.log(values);
      }}
      onCancel={closeModal}
      okText="Submit"
      okButtonProps={{ htmlType: "submit" }}
      footer={null}
    >
      <Form
        labelCol={{ span: 4 }}
        form={form}
        name="basic"
        onFinish={(e) => {
          console.log(e);
        }}
      >
        <Form.Item
          name="title"
          label="Title"
          style={{ flex: 1 }}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input style={{ width: "full" }} />
        </Form.Item>
        <Form.Item
          name="content"
          label="Content"
          style={{ flex: 1 }}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <Input style={{ width: "full" }} />
        </Form.Item>
        <Form.Item
          name="date"
          label="Due date"
          style={{ flex: 1 }}
          rules={[{ required: true, message: "This field is required" }]}
        >
          <DatePicker style={{ width: "full" }} />
        </Form.Item>
        <Form.Item name="tags" label="Tags" style={{ flex: 1 }}>
          <Select
            allowClear
            style={{ width: "full" }}
            mode="tags"
            options={[
              { value: 1, label: "Math" },
              { value: 2, label: "English" },
            ]}
          />
        </Form.Item>
        <Flex justify="flex-end" gap={6} style={{ marginTop: 10 }}>
          <Form.Item>
            <Button type="primary" onClick={() => {}} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={closeModal}>
              Cancel
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </Modal>
  );
};
export default DeleteModal;
