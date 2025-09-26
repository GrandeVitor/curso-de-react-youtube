function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="bg-slate-400 p-2 text-white rounded-md"
    >
      {props.children}
    </button>
  );
}

export default Button;
