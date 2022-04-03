import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>Style</h1>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
