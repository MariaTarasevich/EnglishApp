import'./Dashboard.css'
import PlayButton from './../../assets/img/play.svg'
const Dashboard = ({points}) => {
    return (
        <section className='dashboardContainer'>
            <div className='gameBlock'>
                <p>The most popular game is <br/>
                <b>Speak IT</b>
                </p>
                <img src={PlayButton} alt=" " className='btnPlay'/>
                <button className='btnRandom'>Play random game</button>
            </div>
            <div className='pointsBlock'>
            <span>Common experience</span>
            </div>
            <div className='levelBlock'>
                <span>Level</span>
                <h3>{(0.2 * Math.sqrt(points)).toFixed()} Level</h3>
                <p>Learn 75 new words in one course</p>
                <div className='levelBackground'></div>
            </div>
        </section>
    )
}

export default Dashboard