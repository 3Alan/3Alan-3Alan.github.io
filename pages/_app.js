import '../styles/index.css';
import 'highlight.js/styles/atom-one-dark.css';
import { ThemeContextProvider, ThemeContext, UPDATE_THEME } from '../components/ThemeContextProvider';
import { useContext, useEffect } from 'react';

function ThemeProvider() {
    const { theme, dispatch } = useContext(ThemeContext);

    useEffect(() => {
        if (
            localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            dispatch({ type: UPDATE_THEME, value: 'dark' });
        } else {
            document.documentElement.classList.remove('dark');
            dispatch({ type: UPDATE_THEME, value: 'light' });
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    return null;
}

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeContextProvider>
                <ThemeProvider />
                <Component {...pageProps} />
            </ThemeContextProvider>
        </>
    );
}
