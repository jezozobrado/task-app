"use client";
import { Button, Flex, Form, Space, Table } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import useGetData from "./hooks/useGetData";
import useColumnTask from "./hooks/useColumnTask";
import Search from "antd/es/input/Search";
import useTaskStore from "./store/useTaskStore";
import TaskModal from "./components/TaskModal";
import { PlusOutlined } from "@ant-design/icons";
import { ACTION } from "./models/task";

const Task = () => {
  const [form] = useForm();
  const columns = useColumnTask();
  const { data } = useGetData();
  const openModal = useTaskStore((s) => s.openModal);
  const isOpenModal = useTaskStore((s) => s.isOpenModal);
  const setAction = useTaskStore((s) => s.setAction);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "600px",
          margin: "auto",
          marginTop: 40,
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Form
            form={form}
            name="basic"
            onFinish={(e) => {
              console.log(e);
            }}
            autoComplete="off"
          >
            <Flex style={{ width: "100%" }} gap={10}>
              <Form.Item name="search" style={{ flex: 1 }}>
                <Search
                  style={{ width: "full" }}
                  onSearch={(value, _e, info) =>
                    console.log(info?.source, value)
                  }
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  onClick={() => {
                    openModal();
                    setAction(ACTION.Add);
                  }}
                  icon={<PlusOutlined />}
                >
                  Add
                </Button>
              </Form.Item>
            </Flex>
          </Form>
          <Table
            columns={columns}
            dataSource={data}
            style={{ fontStyle: "inter" }}
          />
        </Space>
      </div>
      {isOpenModal && <TaskModal />}
    </>
  );
};
export default Task;
