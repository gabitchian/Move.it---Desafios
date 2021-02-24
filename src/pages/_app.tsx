/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { ChallengesProvider } from '../contexts/ChallengeContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
