import "./App.scss";
import { SpellList } from "./components/SpellList";
import { ToDo } from "./components/ToDo";
import { Header } from "./components/Header";
import { TodoProvider } from "./components/Context";

function App() {
    return (
        <TodoProvider>
            <Header />
            <SpellList />
            <ToDo />
        </TodoProvider>
    );
}

export default App;
