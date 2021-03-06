import '../src/assets/sass/app.scss'
import {useEffect} from "react"

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
