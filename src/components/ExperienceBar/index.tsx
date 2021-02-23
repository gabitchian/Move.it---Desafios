/* eslint-disable react/react-in-jsx-scope */
import styles from '../../styles/components/ExperienceBar.module.css';

const ExperienceBar = () => (
  <header className={styles.experienceBar}>
    <span>0 XP</span>
    <div>
      <div style={{ width: '50%' }} />
      <span className={styles.currentExperience} style={{ left: '50%' }}>300 XP</span>
    </div>
    <span>600 XP</span>
  </header>
);

export default ExperienceBar;
