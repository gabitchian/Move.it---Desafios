import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import ChallengeScreen from '../screens/ChallengeScreen';
import HomeScreen from '../screens/HomeScreen';

interface HomeProps {
  switchTheme: () => void;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({
  switchTheme, level, currentExperience, challengesCompleted,
}: HomeProps) {
  const { user, setLogout } = useContext(AuthContext);

  return (
    <>
      {!user ? (
        <>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <HomeScreen />
        </>
      ) : (
        <ChallengeScreen
          level={level}
          currentExperience={currentExperience}
          challengesCompleted={challengesCompleted}
        />
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
