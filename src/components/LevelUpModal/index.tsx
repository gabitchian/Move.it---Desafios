import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import styles from '../../styles/components/LevelUpModal.module.css';

const LevelUpModal = () => {
  const { level, closeLevelUpModal } = useContext(ChallengeContext);
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <header>{level}</header>

        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="Fechar modal" />
        </button>
      </div>
    </div>
  );
};

export default LevelUpModal;
