/* eslint-disable jsx-a11y/label-has-associated-control */
import Head from 'next/head';

import { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';
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
  switchTheme: (isChecked: boolean) => void;
  isDark: boolean;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function ChallengeScreen({
  switchTheme, isDark, level, currentExperience, challengesCompleted,
}: ChallengeScreenProps) {
  const { setLogout } = useContext(AuthContext);

  return (
    <>
      <div className={styles.headerContainer}>
        <label className={styles.label}>
          <span>Tema Claro</span>
          <Switch
            onChange={switchTheme}
            checked={isDark}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor="#363e8f"
          />
          <span>Tema Escuro</span>
        </label>
        <button
          type="button"
          className={styles.logoutButton}
          onClick={setLogout}
        >
          Logout
        </button>
      </div>
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
