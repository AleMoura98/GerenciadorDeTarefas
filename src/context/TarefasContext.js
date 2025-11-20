import { createContext, useContext, useReducer } from "react";

const TarefasContext = createContext();

const initialState = {
  tarefas: [],
  filtro: "todas" // todas | concluidas | pendentes
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TAREFA":
      return {
        ...state,
        tarefas: [
          ...state.tarefas,
          { id: Date.now(), texto: action.payload, concluida: false }
        ]
      };

    case "TOGGLE_TAREFA":
      return {
        ...state,
        tarefas: state.tarefas.map((tarefa) =>
          tarefa.id === action.payload
            ? { ...tarefa, concluida: !tarefa.concluida }
            : tarefa
        )
      };

    case "SET_FILTRO":
      return { ...state, filtro: action.payload };

    default:
      return state;
  }
}

export function TarefasProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TarefasContext.Provider value={{ state, dispatch }}>
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  return useContext(TarefasContext);
}
