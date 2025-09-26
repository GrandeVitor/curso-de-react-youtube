import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  const navigate = useNavigate();

  function verDetalhesTask(task) {
    const query = new URLSearchParams();
    query.set("title", task.titulo);
    query.set("description", task.descricao);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <>
            <button
              onClick={() => onTaskClick(task.id)}
              className="bg-slate-400 text-left w-full flex items-center gap-2 text-white p-2 rounded-md"
            >
              {task.completed && <span>✔️</span>}
              <span className={task.completed ? "line-through" : ""}>
                {task.titulo}
              </span>
            </button>
            <Button onClick={() => verDetalhesTask(task)}>
              <ChevronRightIcon />
            </Button>
            <Button onClick={() => deleteTask(task.id)}>
              <TrashIcon />
            </Button>
          </>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
