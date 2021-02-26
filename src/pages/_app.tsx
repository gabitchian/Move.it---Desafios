/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';

import '../styles/global.ts';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(dark);
  const switchTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} switchTheme={switchTheme}/>
    </ThemeProvider>
  );
}

export default MyApp;
