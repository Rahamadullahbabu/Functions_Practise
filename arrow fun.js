let tasks = [];

const addTask = (task) => {
  tasks.push({ task, completed: false });
  console.log(`Task added: ${task}`);
};

const completeTask = (taskIndex) => {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].completed = true;
    console.log(`Task completed: ${tasks[taskIndex].task}`);
  } else {
    console.log("Invalid task index");
  }
};

const displayTasks = () => {
  console.log("Task List:");
  tasks.forEach((task, index) => {
    const status = task.completed ? "[✔]" : "[ ]";
    console.log(`${index + 1}. ${status} ${task.task}`);
  });
};

addTask("Read a book");
addTask("Write code");
addTask("Go for a run");

displayTasks();

completeTask(1);
displayTasks();
