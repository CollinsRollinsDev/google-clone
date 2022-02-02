import '../styles/globals.scss'
import { StateContextProvider } from '../contexts/StateContextProvider'

function MyApp({ Component, pageProps }) {
  return <StateContextProvider><Component {...pageProps} /> </StateContextProvider>
  
}

export default MyApp
