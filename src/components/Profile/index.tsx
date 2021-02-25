import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import styles from '../../styles/components/Profile.module.css';

const Profile = () => {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContanier}>
      <img src="https://github.com/gabitchian.png" alt="Gabi alt" />
      <div>
        <strong>gabi</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level
          {' '}
          {level}
        </p>
      </div>
    </div>
  );
};

export default Profile;
