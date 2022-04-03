import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>MUI SX</h1>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
