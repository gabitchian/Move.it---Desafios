/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';

import '../styles/global.ts';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(light);
  const switchTheme = (checked: boolean) => {
    setTheme(checked ? dark : light);
  };

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} switchTheme={switchTheme} isDark={theme.title === 'dark'} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
