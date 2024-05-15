import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainGreen: string;
      secondaryGreen: string;
      textPrimary: string;
      textSecondary: string;
      textTertiary: string;
    };
  }
}
