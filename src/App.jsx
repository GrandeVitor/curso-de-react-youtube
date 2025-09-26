import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Salva as tarefas no localStorage sempre que elas mudarem
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const [taskToEdit, setTaskToEdit] = useState(null);

  function editarTask(taskId) {
    const task = tasks.find((t) => t.id === taskId);
    setTaskToEdit(task);
  }

  function updateTask(id, novoTitulo, novaDescricao) {
    const newTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, titulo: novoTitulo, descricao: novaDescricao }
        : task
    );
    setTasks(newTasks);
    setTaskToEdit(null); // limpa o modo de edição
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks
          addTask={addTask}
          taskToEdit={taskToEdit}
          updateTask={updateTask}
        />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
          editarTask={editarTask}
        />
      </div>
    </div>
  );
}

export default App;
