import './styles.css';

import { FaTrash } from 'react-icons/fa';

export default function Task() {
    return (
        <li>
          <p>Tarefa</p>
          <button title="Apagar esta tarefa"><FaTrash /></button>
        </li>
    )
}