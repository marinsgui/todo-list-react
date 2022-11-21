import './App.css';

import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';


function App() {

  const [newTask, setNewTask] = useState('');
  const [list, setList] = useState([]);

  function addTask(e) {
    e.preventDefault()
    setList([...list, newTask]);
    setNewTask('')
  }

  function deleteTask(index) {
    let newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function clearList() {
    setList([])
  }
  
  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
        <form>
              <input 
              type="text" 
              name="input-task" 
              id="input-task" 
              placeholder='Insira a tarefa aqui'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)} 
              />
              <button className='add-btn' onClick={addTask}>Adicionar tarefa</button>
        </form>
      <ul className="task-list">
        {list.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
            <button title="Apagar esta tarefa" onClick={() => deleteTask(index)}><FaTrash /></button>
          </li>
        ))}
      </ul>
      {list.length !== 0 && (
        <button className='clear-btn' onClick={clearList}>Limpar lista</button>
      )}
    </div>
  )
}

export default App
