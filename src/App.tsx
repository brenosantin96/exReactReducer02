import { usePeopleList } from './reducers/peopleList';
import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {

  const [list, dispatch] = usePeopleList();
  const [nameInput, setNameInput] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInput(e.target.value);
  }

  const handleAddButton = () => {
    if (nameInput) {
      dispatch({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });

      setNameInput('');
    }
  };

  const deletePerson = (id: string) => {
    dispatch(
      {
        type: 'DEL',
        payload: { id }
      });
  }

  const handleOrderButton = () => {
    dispatch(
      {
        type: 'ORDER'
      }
    );
  }

  return (
    <div>

      <input type="text" value={nameInput} onChange={handleInputChange} />
      <button onClick={handleAddButton}>Adiciona</button>

      <hr />

      <button onClick={handleOrderButton}>Ordenar</button>

      <h3>Lista de pessoas:</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index} >{item.name} <button onClick={() => deletePerson(item.id)}>Deletar</button></li>

        ))}
      </ul>
    </div>
  )
}

export default App
