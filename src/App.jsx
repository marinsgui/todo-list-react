import Form from "./components/Form";
import Task from "./components/Task";

import './App.css';



function App() {
  
  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <Form />
      <ul className="task-list">
        <Task />
      </ul>
    </div>
  )
}

export default App
