import styles from '../../styles/components/Profile.module.css'

const Profile = () => {
    return (
        <div className={styles.profileContanier}>
            <img src="https://github.com/gabitchian.png" alt="Gabi alt" />
            <div>
                <strong>gabi</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}

export default Profile;