import { useTarefas } from "../context/TarefasContext";
import Tarefa from "./Tarefa";

export default function ListaDeTarefas() {
  const { state } = useTarefas();

  const tarefasFiltradas = state.tarefas.filter((t) => {
    if (state.filtro === "concluidas") return t.concluida;
    if (state.filtro === "pendentes") return !t.concluida;
    return true;
  });

  return (
    <ul className="lista">
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}
