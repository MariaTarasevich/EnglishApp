import React, { useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './AppGames.module.css'
import './../../../App.module.css'
import './AppGames.css'
import Store from './../../../context';

export const WriteIt =({wordIndex, setWordIndex, progressBarWidth, points, speak}) => {

const data = useContext(Store)
const input = useRef();
const[randomWords, setRandomWords ] = useState(data.playWords.sort(() => Math.random() - 0.5))

const checkWord = (event) => {
    event.preventDefault()
    if(input.current.value === randomWords[wordIndex].translate) {
        speak(randomWords[wordIndex].translate)
        data.setCorrectWords(data.correctWords + 1)
        if(wordIndex !== data.playWords.length -1 ){
            setWordIndex(wordIndex + 1)
        }else {
            alert('Game is over')
        }
        input.current.value =''
    }else {
        data.setErrorWords(data.errorWords + 1)
    }
}

return (
    <>
    <div className='progressBarContainer'>
        <div className='progressBar' style={progressBarWidth}></div>
    </div> 
    <nav className='gameNav'>
        <Link to={'/games' } className='btnBack'/>
        <ul className='results'>
            <li>Errors: {data.errorWords}</li>
            <li>Correct: {data.correctWords}</li>
            <li>Points: {points}</li>
        </ul>
    </nav>
    <section>
        <span>write a translation for this word</span>
        <h3>{randomWords[wordIndex].word}</h3>
       <form className='writeWordBlock' onSubmit={checkWord}>
            <input ref={input} type="text" />

            <button className={classes.btnOk}>OK</button>
        </form>
    </section>
    </>
    
)
}