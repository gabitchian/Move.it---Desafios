import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from '../../styles/components/Countdown.module.css';

const Countdown = () => {
  const {
    minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown,
  } = useContext(CountdownContext);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          type="button"
          className={styles.countdownButton}
          disabled
        >
          Ciclo Encerrado
          <img src="icons/check_circle.svg" alt="Check" />
        </button>
      ) : (
        <>
          { isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar Ciclo

              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.countdownButtonActiveCloseIcon}>
                <path d="M27 14.41L25.59 13L20 18.59L14.41 13L13 14.41L18.59 20L13 25.59L14.41 27L20 21.41L25.59 27L27 25.59L21.41 20L27 14.41Z" />
              </svg>
            </button>

          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
              <img src="icons/play_arrow.svg" alt="Play" />
            </button>
          )}
        </>
      )}

    </div>
  );
};

export default Countdown;
