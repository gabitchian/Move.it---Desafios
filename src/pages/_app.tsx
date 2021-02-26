/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;
