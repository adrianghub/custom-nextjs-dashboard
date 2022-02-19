import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DashboardLayout from '../components/DashboardLayout'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DashboardLayout>
    <Component {...pageProps} />
  </DashboardLayout>
)

export default MyApp;
