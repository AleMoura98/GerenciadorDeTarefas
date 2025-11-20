import "./index.css";
import { TarefasProvider } from "./context/TarefasContext";
import FormAdicionar from "./components/FormAdicionar";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Filtro from "./components/Filtro";

export default function App() {
  return (
    <TarefasProvider>
      <div className="container">
        <h1>Gerenciador de Tarefas</h1>

        <FormAdicionar />
        <Filtro />
        <ListaDeTarefas />
      </div>
    </TarefasProvider>
  );
}
