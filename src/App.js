import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
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
          <Route path="/" element={<Home />}/>
        </Routes>
        <Routes>
          <Route path="/quiz" element={<Quiz score={score} setscore={setscore}/>}/>
        </Routes>
        <Routes>
          <Route path="/result" element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
