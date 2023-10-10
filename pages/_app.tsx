import { AppProps } from 'next/app'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div className="bg-gray-300">
  <Component  {...pageProps} />
  </div>
  )
}
