function Input(props) {
  return (
    <input
      type={props.type}
      placeholder="Digite a descrição da tarefa "
      className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
