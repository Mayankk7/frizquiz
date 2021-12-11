import React,{useState} from 'react'
import data from "../data.json";
const Quiz = () => {
    
    const [currentques, setcurrentques] = useState(0);
    var selectedoption = "";
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
      if(selectedoption==data[currentques].correct_answer){
        console.log("Correct");
      }else{
          console.log("Incorrect Selection");
      }
    }
  
    return (

        <div>
            <h1>Quiz App</h1>
      <div class="card text-center">
        <div class="card-header">
          {data[currentques].question}
        </div>
        <div class="card-body">
          {data[currentques].options.map((option,idx) => {
            return (
              <button className='btn' onClick={(e) => {
                selectedoption=option;
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
    )
}

export default Quiz
