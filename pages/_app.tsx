import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardLayout from '../components/DashboardLayout'
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  </ThemeProvider>
)

export default MyApp;
