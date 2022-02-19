import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      background: string;
      secondary: string;
      textDark: string;
      textLight: string;
    };
  }
}