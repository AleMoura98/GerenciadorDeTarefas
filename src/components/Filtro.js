import { useTarefas } from "../context/TarefasContext";

export default function Filtro() {
  const { state, dispatch } = useTarefas();

  return (
    <div className="filtros">
      <button
        className={state.filtro === "todas" ? "ativo" : ""}
        onClick={() => dispatch({ type: "SET_FILTRO", payload: "todas" })}
      >
        Todas
      </button>

      <button
        className={state.filtro === "concluidas" ? "ativo" : ""}
        onClick={() => dispatch({ type: "SET_FILTRO", payload: "concluidas" })}
      >
        Concluídas
      </button>

      <button
        className={state.filtro === "pendentes" ? "ativo" : ""}
        onClick={() => dispatch({ type: "SET_FILTRO", payload: "pendentes" })}
      >
        Pendentes
      </button>
    </div>
  );
}
