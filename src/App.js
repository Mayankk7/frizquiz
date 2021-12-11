import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './App.css';
import data from "./data.json"

function App() {


  const [currentques, setcurrentques] = useState(0);
  const [selectedoption, setselectedoption] = useState('');
  const nextques = () => {
    if (currentques == 9) {
      console.log("Quiz Ended");
      alert("Quiz Ended");
      return;
    }
    setcurrentques(currentques + 1)


  }

  const prevques = () => {
    if (currentques == 0) {
      alert("Cant do that!");
      setcurrentques(0);
      return;
    }
    if (currentques > 9) {
      console.log("Quiz Ended");
    }
    setcurrentques(currentques - 1)


  }

  const showans = () => {
    console.log(selectedoption);
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <div class="card text-center">
        <div class="card-header">
          {data[currentques].question}
        </div>
        <div class="card-body">
          {data[currentques].options.map((option) => {
            return (
              <button className='btn' onClick={(e) => {
                const selection = e.target.value;
                setselectedoption(selection);
              }}>{option}</button>
            )
          })
          }
        </div>
        <div class="card-footer text-muted">
          <button className='btn btn-dark' onClick={() => prevques()}>Prev</button>
          <button className='btn btn-dark mr-5' onClick={() => showans()}>Ok</button>
          <button className='btn btn-dark' onClick={() => nextques()}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
