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
      const id =document.getElementById("btn"+`${index}`)
      if(selectedoption==data[currentques].correct_answer){
        setcorrect(true);
        console.log("Correct");
        id.classList.toggle('alert-success');
      }else{
          setcorrect(false)
          console.log("Incorrect Selection");
          id.classList.add('alert-danger');
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
              <button className="btn" id={"btn"+`${idx}`} onClick={(e) => {
                selectedoption=option;
                index=idx;
              }}>{option}</button>
            )
          })
          }
        </div>
        <div class="card-footer text-muted">
          <button className='btn btn-dark' onClick={() => {prevques(); setcorrect(false);}}>Prev</button>
          <button className='btn btn-dark mr-5' onClick={() => {showans(); }}>Ok</button>
          <button className='btn btn-dark' onClick={() => {
              select ? (nextques()) : (alert("Please Select an option"))
          }}>Next</button>
        </div>
      </div>
        </div>
    )
}

export default Quiz
