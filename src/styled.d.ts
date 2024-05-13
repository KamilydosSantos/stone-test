import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
    };
  }
}
