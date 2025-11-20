import { useTarefas } from "../context/TarefasContext";

export default function Tarefa({ tarefa }) {
  const { dispatch } = useTarefas();

  return (
    <li className={tarefa.concluida ? "tarefa concluida" : "tarefa"}>
      <label>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() =>
            dispatch({ type: "TOGGLE_TAREFA", payload: tarefa.id })
          }
        />
        {tarefa.texto}
      </label>
    </li>
  );
}
