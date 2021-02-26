import { GetServerSideProps } from 'next';
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

interface HomeProps {
  switchTheme: () => void;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  switchTheme, level, currentExperience, challengesCompleted,
}: HomeProps) {
  const { user, setLogin, setLogout } = useContext(AuthContext);

  return (
    <>
      {!user ? (
        <div>
          <button type="button" onClick={setLogin}>Sign in with GitHub</button>
        </div>
      ) : (
        <ChallengesProvider
          level={level}
          currentExperience={currentExperience}
          challengesCompleted={challengesCompleted}
        >
          <div className={styles.container}>
            <Head>
              <title>Início | move.it</title>
            </Head>
            <ExperienceBar />
            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </div>
        </ChallengesProvider>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
