import { Button, Flex, Space, TableProps, Tag } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import confirm from "antd/es/modal/confirm";
import useTaskStore from "../store/useTaskStore";
import { ACTION, Task } from "../models/task";
const useColumnTask = () => {
  const openModal = useTaskStore((s) => s.openModal);
  const setAction = useTaskStore((s) => s.setAction);
  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleFilled style={{ color: "red" }} />,
      content: "This cannot be undone",
      okText: "Delete",

      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const columns: TableProps<Task>["columns"] = [
    {
      title: "Task",
      dataIndex: "title",
      key: "title",
      render: (_, record) => (
        <Flex gap={0} vertical={true} style={{ padding: -20, marginBlock: -8 }}>
          <Flex
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <div style={{ fontSize: "15px", fontWeight: "bold" }}>
              {record.title}
            </div>
            <div
              style={{ fontSize: "12px" }}
            >{`Due: ${record.dueDate.toLocaleDateString()}`}</div>
          </Flex>
          <div style={{ marginBlock: "8px" }}>{record.content}</div>
          <div>
            {record.tags.map((tag) => (
              <Tag color="red">{tag}</Tag>
            ))}
          </div>
        </Flex>
      ),
    },
    {
      width: "50px",
      title: "",
      key: "action",
      render: () => (
        <Space size="small">
          <Button
            type="link"
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => {
              openModal();
              setAction(ACTION.Edit);
            }}
          />
          <Button
            type="link"
            shape="default"
            icon={<DeleteOutlined />}
            danger
            onClick={showDeleteConfirm}
          />
        </Space>
      ),
    },
  ];
  return columns;
};
export default useColumnTask;
