import React, { useState } from 'react';
import Name from './name';
import { NamesAmount } from './name';
import logo from './logo.svg';
import './App.css';

const names = ['Wesley', 'Robert', 'jan', 'Henk']

function App() {
  const [selectedName, setSelectedName] = useState('test');
  const handleClick = (name) => {
    setSelectedName(name)
  }

  return (
    <div className="App">
      <header className="App-header">
        <NamesAmount amountOfNames={names.length} />
        {
          names.map((name, index) => {
            return (<Name index={index}
              seperator="--->"
              name={name}
              handleClick={handleClick}
            />)
          })

        }
        selected user: {selectedName}
      </header>
      selected user: {selectedName}
    </div>
  );
}

export default App;