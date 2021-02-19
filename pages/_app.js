import '../styles/index.css';
import 'highlight.js/styles/atom-one-dark.css';
import { ThemeProvider } from '../components/ThemeProvider';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
