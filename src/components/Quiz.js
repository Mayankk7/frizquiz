import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import data from "../data.json";
const Quiz = ({ score, setscore }) => {

    //intializing states
    const [currentques, setcurrentques] = useState(0);
    const [correct, setcorrect] = useState(false);
    const [select, setselect] = useState(false)
    const [index, setindex] = useState(100);
    const [answered, setanswered] = useState(false);

    //intializing variable
    var selectedoption = "";

    //next button functionality
    const nextques = () => {
        setselect(false);
        correct ? document.getElementById("btn" + `${index}`).classList.remove("btn-success") :
            document.getElementById("btn" + `${index}`).classList.remove("btn-danger");
        if (currentques == 9) {
            localStorage.setItem('score', score);
            window.location.href = "/result"
            return;
        }

        setcurrentques(currentques + 1)
        setanswered(false);

    }

    //OK button functionality 
    const showans = () => {
        console.log(selectedoption);

        //If no option is selected
        if (index == 1000) {
            alert("Please Select an option");
            return;
        }
        
        setselect(true);

        //If incase it doesnt select anything
        if (selectedoption == "") {
            alert("Select anything")
            return
        }

        setanswered(true);
        
        //checking answers
        if (selectedoption == data[currentques].correct_answer) {
            setcorrect(true);
            console.log("Correct");
            setscore(score + 1);
            console.log(score);
            document.getElementById("btn" + `${index}`).classList.add("btn-success");
        } else {
            setcorrect(false)
            console.log("Incorrect Selection");
            document.getElementById("btn" + `${index}`).classList.add("btn-danger");
        }
        const next = setInterval(nextques, 1000)
        clearInterval(next);
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
                    {data[currentques].options.map((option, idx) => {
                        return (
                            <button className="btn mt-2" id={"btn" + `${idx}`} onClick={() => {
                                selectedoption = option;
                                setindex(idx)
                            }}>{option}</button>
                        )
                    })
                    }
                </div>
                <div class="card-footer d-flex flex-direction-column justify-space-evenly">
                    {!answered && <button className='btn btn-secondary m-auto' onClick={() => { showans(); }}>Ok</button>}
                    <button className='btn btn-secondary m-auto' onClick={() => {
                        select ? (nextques()) : (alert("Please Select an option"))
                    }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Quiz
