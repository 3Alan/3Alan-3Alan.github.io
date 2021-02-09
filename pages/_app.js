import '../styles/index.css';
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);
    return <Component {...pageProps} />;
}
