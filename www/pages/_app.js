import '../styles/index.css'
import { RouterScrollProvider } from '@moxy/next-router-scroll';

const MyApp = ({ Component, pageProps }) => {
    return (
        <RouterScrollProvider>
            <Component {...pageProps} />
        </RouterScrollProvider>
    )
}

export default MyApp
