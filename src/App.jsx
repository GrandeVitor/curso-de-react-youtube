import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },
    [tasks];

  // useEffect(() => {
  ///  const getTasks = async () => {
  //  const res = await fetch(
  //   "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //   {
  //    method: "GET",
  //  }
  // );
  // const data = await res.json();

  //setTasks(data);
  //};
  //getTasks();
  //}, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function addTask(titulo, descricao) {
    const newTask = {
      id: tasks.length + 1,
      titulo,
      descricao,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks addTask={addTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
