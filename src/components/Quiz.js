import React,{useState} from 'react'
import { useEffect } from 'react/cjs/react.development';
import data from "../data.json";
const Quiz = () => {
    
    const [currentques, setcurrentques] = useState(0);
    const [correct,setcorrect] = useState(false);
    const [select, setselect] = useState(false)
    var selectedoption = "";
    var index=1000;
    const nextques = () => {
    setselect(false);
      if (currentques == 9) {
        console.log("Quiz Ended");
        alert("Quiz Ended");
        return;
      }
      setcurrentques(currentques + 1)
  
  
    }
  
    const prevques = () => {
        setselect(false);
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
      if(index==1000){
          alert("Please Select an option");
          return;
      }
      setselect(true);
      if(selectedoption==data[currentques].correct_answer){
        setcorrect(true);
        alert("Correct Answer");
        console.log("Correct");

      }else{
          setcorrect(false)
          alert("Incorrect Answer");
          console.log("Incorrect Selection");

      }
    }
  
    return (

        <div>
        <div className='container mt-5'>
            <h1>Quiz App</h1>
        </div>
      <div class="card text-center w-50 m-auto mt-5 ">
        <div class="card-header h-50">
          {data[currentques].question}
        </div>
        <div class="card-body ">
          {data[currentques].options.map((option,idx) => {
            return (
              <button className="btn mt-2 btn-outline-success" id={"btn"+`${idx}`} onClick={(e) => {
                selectedoption=option;
                index=idx;
              }}>{option}</button>
            )
          })
          }
        </div>
        <div class="card-footer d-flex justify-space-between">
          <button className='btn btn-secondary m-auto' onClick={() => {prevques(); setcorrect(false);}}>Prev</button>
          <button className='btn btn-secondary m-auto' onClick={() => {showans(); }}>Ok</button>
          <button className='btn btn-secondary m-auto' onClick={() => {
              select ? (nextques()) : (alert("Please Select an option"))
          }}>Next</button>
        </div>
      </div>
        </div>
    )
}

export default Quiz
