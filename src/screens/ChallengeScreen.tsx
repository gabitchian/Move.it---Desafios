import Head from 'next/head';

import { useContext } from 'react';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ChallengeBox from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengeContext';
import { AuthContext } from '../contexts/AuthContext';

interface ChallengeScreenProps {
  switchTheme: () => void;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function ChallengeScreen({
  switchTheme, level, currentExperience, challengesCompleted,
}: ChallengeScreenProps) {
  const { setLogout } = useContext(AuthContext);

  return (
    <>
      <button
        type="button"
        className={styles.logoutButton}
        onClick={setLogout}
      >
        Logout
      </button>
      <ChallengesProvider
        level={level}
        currentExperience={currentExperience}
        challengesCompleted={challengesCompleted}
      >
        <div className={styles.container}>
          <Head>
            <title>Desafio | move.it</title>
          </Head>
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompletedChallenges />
                <Countdown />
              </div>
              <div className={styles.leftSideContainer}>
                <ChallengeBox />
              </div>
            </section>
          </CountdownProvider>
        </div>
      </ChallengesProvider>
    </>
  );
}
