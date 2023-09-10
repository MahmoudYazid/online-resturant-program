import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/Navbar.css';
import '@/styles/Menu.css';
import '@/styles/Foodlist.css';
import '@/styles/OrderComponant.css';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
