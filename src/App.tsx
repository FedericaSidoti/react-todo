import { useEffect, useState } from "react";
import "./App.scss";
import { SpellList } from "./components/SpellList";
import { ToDo } from "./components/ToDo";
import { SpellListType } from "./types";
import { Header } from "./components/Header";
import axios from "axios";
import { TodoProvider, useTodo } from "./components/Context";

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
