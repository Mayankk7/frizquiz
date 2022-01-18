import React, { useState, useEffect } from 'react'
import data from "../data.json";
import Swal from 'sweetalert2';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init(
    {
        duration:1000
    }
);

const Quiz = ({ score, setscore }) => {

    //intializing states
    const [currentques, setcurrentques] = useState(0);
    const [correct, setcorrect] = useState(false);
    const [select, setselect] = useState(false)
    const [index, setindex] = useState(100);
    const [answered, setanswered] = useState(false);
    const [selectedoption, setselectedoption] = useState("");

    //next button functionality
    const nextques = () => {
        setselect(false);
        correct ? document.getElementById("btn"+index).classList.remove("btn-success") :
            document.getElementById("btn"+index).classList.remove("btn-danger");
        if (currentques === 9) {
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
        if (index === 1000) {
            Swal.fire("OOPS","Please Select Any Option", "question")
            return;
        }
        
        setselect(true);

        //If incase it doesnt select anything
        if (selectedoption === "") {
            alert("Select anything")
            return
        }

        setanswered(true);
        
        //checking answers
        if (selectedoption === data[currentques].correct_answer) {
            setcorrect(true);
            console.log("Correct");
            setscore(score + 1);
            console.log(score);
            document.getElementById("btn" + index).classList.add("btn-success");
        } else {
            setcorrect(false)
            console.log("Incorrect Selection");
            document.getElementById("btn" + index).classList.add("btn-danger");
        }
        const next = setInterval(nextques, 1000)
        clearInterval(next);
    }

    useEffect(()=>{

    },[currentques])

    return (

        <div>
            <div className='container mt-5'>
                <h1 className='head'>FRIZQUIZ</h1>
            </div>
            <div class="card text-center w-50 m-auto mt-5 " data-aos="flip-left" style={{transition:"0.5s"}}>
                <div class="card-header h-50">
                    {data[currentques].question}
                </div>
                <div class="card-body ">
                    {data[currentques].options.map((option, idx) => {
                        return (
                            <button className="btn outline mt-2" id={"btn" + idx} onClick={() => {
                                setselectedoption(option);
                                setindex(idx)
                            }}>{option}</button>
                        )
                    })
                    }
                </div>
                <div class="card-footer d-flex flex-direction justify-space-between">
                    {!answered && <button className='btn btn-w m-auto' onClick={() =>showans() }>Ok</button>}
                    <button className='btn btn-w m-auto' onClick={() => {
                        select ? (nextques()) : (Swal.fire("OOPS","Please Select Any Option", "question"))
                    }}>Next</button>
                </div>
            </div>
            <div className='footer mt-5'>
                Click to select an option and click on OK to check !<br/>All the best !
            </div>
        </div>
    )
}

export default Quiz
