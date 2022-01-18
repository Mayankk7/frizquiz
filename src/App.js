import { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [score,setscore] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route exact path="/quiz" element={<Quiz score={score} setscore={setscore}/>}/>
        </Routes>
        <Routes>
          <Route exact path="/result" element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
