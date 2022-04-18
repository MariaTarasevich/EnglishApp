import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import './App.module.css';
import { Library } from './components/Library/Library';
import Dashboard from './components/Dashboard/Dashboard';
import { useEffect, useState } from 'react';
import { Games } from './components/Games/Games'
import { WriteIt } from './components/Games/AppGames/WriteIt'
import { Learn } from './components/Learn/Learn'
import  {CheckIt}  from './components/Games/AppGames/CheckIt';
import Store from './context';

function App() {
  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || [])
  const [wordIndex, setWordIndex] = useState(0)
  const [correctWords, setCorrectWords] = useState(0)
  const [errorWords, setErrorWords] = useState(0)
  const [points, setPoints] = useState(0)
  const [playWords, setPlayWords] = useState(library.slice(-10))
  const progressBarWidth = {
    width: `${(100 / library.slice(-10).length) * (wordIndex + 1)}vw`
  }

  useEffect(() => {
    setPoints(points + correctWords)
  }, [correctWords])
  const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word)
    speakInstance.voice = speechSynthesis.getVoices()[51]
    speechSynthesis.speak(speakInstance)
  }

  return (
    <BrowserRouter>
      <Store.Provider value={{ playWords, correctWords, setCorrectWords, errorWords, setErrorWords }}>

          <Header />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/games" element={<Games />} />
            <Route path='/games/game/write-it' element={
              <>
                <nav className='gameNav'>
                  <NavLink to={'/games'} className='btnBack'>

                  </NavLink>
                  <ul className='results'>
                    <li>Errors: {errorWords}</li>
                    <li>Correct: {correctWords}</li>
                    <li>Points: {points}</li>
                  </ul>
                </nav>
                <section className='gameContainer'>
                  <WriteIt playWords={playWords} wordIndex={wordIndex} setWordIndex={setWordIndex}
                    correctWords={correctWords} errorWords={errorWords}
                    setCorrectWords={setCorrectWords} setErrorWords={setErrorWords} speak={speak} />
                </section>
              </>
            } />
            <Route path='/games/game/check-it' element={
              <>
                <div className='progressBarContainer'>
                  <div className='progressBar' style={progressBarWidth} />
                </div>
                <nav className='gameNav'>
                  <NavLink to={'/games'} className='btnBack'>

                  </NavLink>
                  <ul className='results'>
                    <li>Errors: {errorWords}</li>
                    <li>Correct: {correctWords}</li>
                    <li>Points: {points}</li>
                  </ul>
                </nav>
                <section className='gameContainer'>
                  <CheckIt playWords={playWords} wordIndex={wordIndex} setWordIndex={setWordIndex}
                    correctWords={correctWords} errorWords={errorWords}
                    setCorrectWords={setCorrectWords} setErrorWords={setErrorWords} speak={speak} />
                </section>
              </>
            } />
            <Route path="/library" element={<Library library={library} setLibrary={setLibrary} />} />
            <Route path="/learn" element={<>
              <div className='progressBarContainer'>
                <div className='progressBar' style={progressBarWidth}></div>
              </div>
              <Learn speak={speak} library={library} wordIndex={wordIndex} setWordIndex={setWordIndex} />
              <div onClick={() => { if (wordIndex === library.length - 1) { setWordIndex(0) } else { setWordIndex(wordIndex + 1) } }} className='btnNext' /></>} />    
      </Routes>

    </Store.Provider>
    </BrowserRouter >
  );
}

export default App;


//!!!!!!!!