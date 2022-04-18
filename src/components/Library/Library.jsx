import React, { useRef } from 'react'
import addBtn from './../../assets/img/add.svg'
import deleteBtn from './../../assets/img/delete.svg'
import './Library.css'

export const Library = (props) => {
    const inputValue = useRef('')
    const addNewWord = async (event) => {
        event.preventDefault()
        const response = await fetch(`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`)
        const translation = await response.json()
        const updateLibrary = [...props.library, {word: translation. word, translate: translation.translate, learn: 0}]
        props.setLibrary([...props.library, {word: translation. word, translate: translation.translate, learn: 0}])
        localStorage.setItem('library', JSON.stringify(updateLibrary))
        inputValue.current.value = ''
    }
    const deleteWord = (id) => {
        const updateLibrary = props.library.filter((word, index) => index != id)
        props.setLibrary(updateLibrary)
    }
    return (
        <section className='libraryBlock'>
            <span>Add new <b>Word</b></span>

            <form onSubmit={addNewWord} className='addWordBlock'>
                <input ref={inputValue} type="text" />
                    
                <button><img src={addBtn}/></button>
            </form>
            <div className='wordsTable'>
                <ul>
                    <li><h3>Word</h3></li>
                    <li><h3>Translation</h3></li>
                    <li><h3>Learb</h3></li>
                </ul>
                {props.library.map((word, index) => (
                    <ul key={index}> 
                        <li>{word.word}</li>
                        <li>{word.translate}</li>
                        <li>{word.learn}</li>

                        <div className='settings'>
                            <button onClick={()=>{deleteWord(index)}}><img src={deleteBtn} /></button>
                        </div>
                    </ul>
                ))}
            </div>
        </section>
    )
}