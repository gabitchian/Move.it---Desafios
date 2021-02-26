import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import styles from '../../styles/components/Profile.module.css';

const Profile = () => {
  const { level } = useContext(ChallengeContext);
  const { user } = useContext(AuthContext);
  const name = user.displayName ? user.displayName : user.email;
  const photo = user.photoURL.replace('?v=4', '');

  return (
    <div className={styles.profileContanier}>
      <img src={photo} alt="Gabi alt" />
      <div>
        <strong>{name}</strong>
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
