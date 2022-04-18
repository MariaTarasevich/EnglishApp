import './Games.css'
import imgCheckCorrect from './../../assets/img/check-the-correct-one.svg'
import imgSelectTranslation from './../../assets/img/select-translation.svg'
import imgSprintGuess from './../../assets/img/sprint-guess.svg'
import imgPutTranslation from './../../assets/img/put-translation.svg'
import imgSpeakAndCheck from './../../assets/img/speak-and-check.svg'
import imgSprintListen from './../../assets/img/listen-sprint.svg'
import imgRememberTransation from './../../assets/img/remember-translation.svg'
import imgWriteTranslation from './../../assets/img/write-translation.svg'
import ImgListenAndGuess from './../../assets/img/listen-and-guess.svg'
import { NavLink } from 'react-router-dom'

export const Games = () => {
    const GAMES = [
        {img: imgCheckCorrect, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgWriteTranslation, path: 'write-it', name: 'Write correct word', description: 'Write correct word'},
        {img: imgSelectTranslation, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgSprintGuess, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgPutTranslation, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgSpeakAndCheck, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgSprintListen, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: imgRememberTransation, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
        {img: ImgListenAndGuess, path: 'check-it', name: 'Check correct word', description: 'Check correct word'},
    ]

    return (
            <section className='gameContainer'>
            {GAMES.map((game, index)=>{
                return (
                <NavLink key={index} to={'game/' + game.path}>
                    <div className='gameBlockGame'>
                        <div>
                            <h2>{game.name}</h2>
                            <p>{game.description}</p>
                        </div>

                        <img src={game.img} alt='pic' />
                    </div>
                </NavLink>)
            })}
        </section>
    )
}