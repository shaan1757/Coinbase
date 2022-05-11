import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CoinbaseProvider } from "../context/context";
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      serverUrl={
        `${process.env.NEXT_PUBLIC_SERVER}` ?? 'ServerUrl Undefined Fallback'
      }
      appId={`${process.env.NEXT_PUBLIC_APP_ID}` ?? 'AppId Undefined Fallback'}
    >
      <CoinbaseProvider>
        <Component {...pageProps} />
      </CoinbaseProvider>
    </MoralisProvider>
  )
}

export default MyApp
