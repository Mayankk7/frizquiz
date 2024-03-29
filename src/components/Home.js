import React from 'react'
import { useState } from 'react/cjs/react.development';

const Home = () => {
    const [name,setname] = useState('');

    const startquiz = () => {
        if(name===""){
            alert("Kindly Enter your name");
            return;
        }
        localStorage.setItem('name',name);
        window.location.href="/quiz";
    }
    return (
            <div className='container mt-5 top'>
            <h1 className='head'>FRIZQUIZ</h1>
            <div className='mt-5'>
            <input type="text" className="mx-3" style={{borderRadius:"5px"}} placeholder='Name' onChange={(e)=> {setname(e.target.value);}}/>
            <button className='btn ' onClick={() => {startquiz()}}>Start!</button>
            </div> 
            </div>

    )
}

export default Home
