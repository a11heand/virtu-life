// Filename: advanced_todo_list.js
// Description: A sophisticated, elaborate and complex To-Do List application

// Define the Task class
class Task {
  constructor(title, priority, dueDate) {
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
    console.log(`Task "${this.title}" marked as completed.`);
  }
}

// Define the TodoList class
class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(title, priority, dueDate) {
    const task = new Task(title, priority, dueDate);
    this.tasks.push(task);
  }

  removeTask(title) {
    const taskIndex = this.tasks.findIndex(task => task.title === title);
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
      console.log(`Task "${title}" removed from the list.`);
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }

  markTaskAsCompleted(title) {
    const task = this.tasks.find(task => task.title === title);
    if (task) {
      task.markAsCompleted();
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }

  getTasksByPriority(priority) {
    const tasksByPriority = this.tasks.filter(task => task.priority === priority);
    console.log(`Tasks with priority "${priority}":`);
    tasksByPriority.forEach(task => {
      console.log(`- ${task.title}`);
    });
  }

  printAllTasks() {
    console.log("All tasks in the Todo List:");
    this.tasks.forEach(task => {
      console.log(`- ${task.title} | Priority: ${task.priority} | Due Date: ${task.dueDate} | Completed: ${task.completed}`);
    });
  }
}

// Create a new TodoList instance
const todoList = new TodoList();

// Add tasks to the TodoList
todoList.addTask("Complete project proposal", "High", "2022-12-31");
todoList.addTask("Buy groceries", "Medium", "2022-09-15");
todoList.addTask("Send email to client", "Low", "2022-08-20");
todoList.addTask("Prepare presentation", "High", "2022-10-10");
todoList.addTask("Read book", "Low", "2022-11-30");

// Print all tasks
todoList.printAllTasks();

// Mark a task as completed
todoList.markTaskAsCompleted("Buy groceries");

// Remove a task
todoList.removeTask("Send email to client");

// Get tasks by priority
todoList.getTasksByPriority("High");

// Print all tasks after modifications
todoList.printAllTasks();