import { useContext } from 'react'
import { ChallengesContext } from '../contexcts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
    <div className={styles.profileContainer}>
        <img src="https://github.com/lucmoraees.png" alt="Lucas Moraes" />
        <div>
            <strong>Lucas Moraes</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
            </p>
        </div>
    </div>
    )
}
