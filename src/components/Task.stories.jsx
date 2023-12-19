import Task from "./Task";

/* Case1. Task.stories.jsx */
export default {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2023, 11, 19, 10),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

/* Case2. Task.stories.js */
// export default {
//   title: "Task",
//   component: Task,
//   tags: ["autodocs"],
// };

// export const Default = {
//   args: {
//     task: {
//       id: "1",
//       title: "Test Task",
//       state: "TASK_INBOX",
//     },
//   },
// };

// export const Pinned = {
//   args: {
//     task: { ...Default.args.task, state: "TASK_PINNED" },
//   },
// };

// export const Archived = {
//   args: {
//     task: {
//       ...Default.args.task,
//       state: "TASK_ARCHIVED",
//     },
//   },
// };
