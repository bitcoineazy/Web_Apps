import React, { useState } from 'react';
import './App.css';


function Notes() {

  const [todos, setTodos] = useState([{ text: 'Хуки' }]);
  let inp;

  return (
      <div className="App-input">
        <p3 style={{ borderColor: "red", borderRadius: 40, backgroundColor: "steelblue", padding: 50 }}>
          Заметки с помощью хуков
        </p3>
        <ul>
          {todos.map(item => (
              <li>{item.text}</li>
          ))}
        </ul>
        <textarea className='App-input'
                  onChange={(e) => { inp = e.target.value }}
        />
        <button className="App-button" onClick={() => setTodos(todos.concat({ text: inp }))}>
          Добавить
        </button>
      </div>
  );
}





export default function App() {
  const [count, setCounter] = useState(0);
  const [name, setName] = useState('банан');

  return (
      <div className="App">
        <header className="App-header">
          <div className='App-age'>
            <div className='App-count'> Счётчик {count} </div>
            <div>
              <button className='App-age-button' onClick={() => setCounter(count + 1)}> + </button>
              <button className='App-age-button' onClick={() => setCounter(count - 1)}> - </button>
            </div>
          </div>

          <div>
            <p>{name}</p>
            <div>
              <button className="App-button" onClick={() => setName('машина')}> Машина </button>
              <button className="App-button" onClick={() => setName('самолет')}> Самолет </button>
              <button className="App-button" onClick={() => setName('НЛО')}> НЛО </button>
              <button className="App-button" onClick={() => setName('МКС')}> МКС </button>
            </div>
          </div>
          <Notes/>
        </header>
      </div>
  );
}
