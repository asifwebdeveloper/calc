import './home.css'
import React, { useEffect, useRef, useState } from 'react'
function Home() {
    const [result, setResult] = useState("");
    const inputRef = useRef(null);
    useEffect(()=> inputRef.current.focus());
    function handleClick(e) {
        setResult(result+e.target.name)
    }
    return (
        <div className="calc-app">
            <h1 className="title">React Calc</h1>
            <form>
                <input type="text" value={result} ref={inputRef}/>
            </form>
            <div className="keypad">
                <button id='clear'>Clear</button>
                <button id='backspace'>C</button>
                <button name="/" onClick={handleClick}>/</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="+" onClick={handleClick}>+</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="-" onClick={handleClick}>-</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="&times;" onClick={handleClick}>&times;</button>
                <button name="." onClick={handleClick}>.</button>
                <button name="0" onClick={handleClick}>0</button>
                
                <button id='result'>=</button>
            </div>
        </div>
    )
}

export default Home