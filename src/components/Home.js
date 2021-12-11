import React from 'react'
import { useState } from 'react/cjs/react.development';

const Home = () => {
    const [name,setname] = useState('');

    const startquiz = () => {
        localStorage.setItem('name',name);
        window.location.href="/quiz";
    }
    return (
            <div className='container mt-5'>
            <h1 className='head'>QUIZ APP</h1>
            <div className='mt-5'>
            <input type="text" placeholder='Name' onChange={(e)=> {setname(e.target.value);}}/>
            <button className='btn' onClick={() => {startquiz()}}>Start!</button>
            </div> 
            </div>

    )
}

export default Home
