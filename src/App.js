import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

let record = {
  data: null,
  done: false,
  thenable: null
};

record.thenable = fetch("http://localhost:3000/posts")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    record.done = true;
    record.data = data.message;
  })
  .catch(err => {
    throw err;
  });

export default App;
