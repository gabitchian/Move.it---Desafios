import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #fff;
  --modal-background: ${({ theme }) => theme.colors.modal};
  --border: ${({ theme }) => theme.colors.border};
  --div: ${({ theme }) => theme.colors.div};
  --background: ${({ theme }) => theme.colors.background};
  --gray-line: #dcdde0;
  --text: ${({ theme }) => theme.colors.text};;
  --text-highlight: #b3b9ff;
  --title: #${({ theme }) => theme.colors.title};;
  --red: #e83f5b;
  --green: #4cd62b;
  --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  color: var(--text);
  /* font-family: 'Inter', sans-serif; */
}

body,
input,
button,
textarea,
button {
  font: 400 1rem 'Inter', sans-serif;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}
`;
