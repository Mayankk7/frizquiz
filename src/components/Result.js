import React from 'react'

const Result = () => {
    const name = localStorage.getItem('name');
    const scored = localStorage.getItem('score');
    return (
        <div className='mt-5'>
            <div className='heading'>
            <h1>Hey {name}, Your Score is :</h1>
            <div className='mt-5'>
                <h1>{scored}</h1>
            </div>
            <div className='mt-5'>
                <button className='btn' onClick={()=>{window.location.href="/home"}}>Home</button>
            </div>
            </div>
        </div>
    )
}

export default Result
