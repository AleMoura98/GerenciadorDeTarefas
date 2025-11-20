import { useState } from "react";
import { useTarefas } from "../context/TarefasContext";

export default function FormAdicionar() {
  const [texto, setTexto] = useState("");
  const { dispatch } = useTarefas();

  function adicionar() {
    if (texto.trim() === "") return;

    dispatch({ type: "ADD_TAREFA", payload: texto });
    setTexto("");
  }

  return (
    <div className="form-adicionar">
      <input
        type="text"
        placeholder="Digite a tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={adicionar}>Adicionar</button>
    </div>
  );
}
