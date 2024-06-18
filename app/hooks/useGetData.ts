import { Task } from "../models/task";

const useGetData = () => {
  const data: Task[] = [
    {
      title: "Title",
      content: "Do this",
      dueDate: new Date(),
      isAccomplished: false,
      tags: ["math"],
    },
    {
      title: "I can do this with a broken heart",
      content: "Do laundry today",
      dueDate: new Date(),
      isAccomplished: false,
      tags: ["english", "filipino"],
    },
  ];
  return { data };
};
export default useGetData;
