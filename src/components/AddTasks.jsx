import { useState, useEffect } from "react";
import Input from "./Input";

function AddTasks({ addTask, taskToEdit, updateTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Preenche os inputs se estiver editando
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.titulo);
      setDescription(taskToEdit.descricao);
    }
  }, [taskToEdit]);

  function handleSubmit() {
    if (title.trim() === "" || description.trim() === "") {
      alert("Por favor, preencha todos os campos");
      return;
    }

    if (taskToEdit) {
      updateTask(taskToEdit.id, title, description);
    } else {
      addTask(title, description);
    }

    setTitle("");
    setDescription("");
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={handleSubmit}
      >
        {taskToEdit ? "Salvar Alterações" : "Adicionar"}
      </button>
    </div>
  );
}

export default AddTasks;
