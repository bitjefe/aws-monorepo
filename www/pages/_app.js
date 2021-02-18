import '../styles/index.css'
import { RouterScrollProvider } from '@moxy/next-router-scroll';

const MyApp = ({ Component, pageProps }) => {
    return (
        <RouterScrollProvider disableNextLinkScroll={false}>
            <Component {...pageProps} />
        </RouterScrollProvider>
    )
}

export default MyApp
