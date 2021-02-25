import { useContext } from 'react';
import { ChallengeContext } from '../../contexts/ChallengeContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import styles from '../../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengeContext);
  const { resetCountdown } = useContext(CountdownContext);

  const handleChallengeSucceeded = () => {
    completeChallenge();
    resetCountdown();
  };

  const handleChallengeFailed = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>
            Ganhe
            {' '}
            {activeChallenge.amount}
            {' '}
            xp
          </header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            <span>Avance de level completando desafios</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
