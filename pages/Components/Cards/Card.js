import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import playCircleFilledWhite from '../../../public/play_circle_filled_white.svg'
import epAvatar1 from '../../../public/epAvatar1.png'

function Card(props) {
    return <div>
        <div>
            <h3>{props.title}</h3>
            <p>Jacqueline Cardozo</p>
            <span>Front end dev leader</span>
        </div>
        <div>
            <span>
                <Image className={styles.playCircleFilledWhite} src={playCircleFilledWhite} alt="Play button" quality="100" width="40px" height="40px" />
            </span>
            <span>
                <Image src={epAvatar1} alt="episode avatar" width="48" height="48" />
            </span>
        </div>
    </div>
}

export default Card