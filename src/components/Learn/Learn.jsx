import React, { useEffect } from "react";
import './Learn.css'

export const Learn = ({library, wordIndex, speak}) => {

useEffect(() => {
speak(library[wordIndex].translate)
}, [wordIndex])

return (    <section style={{textAlign: 'center'}}>
        <span>{library[wordIndex].word}</span>
        <h3>{library[wordIndex].translate}</h3>
    </section>)
}