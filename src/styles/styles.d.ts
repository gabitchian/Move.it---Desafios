import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      border: string;
      div: string;
      background: string;
      text: string;
      title: string;
      modal: string;
    }
  }
}
