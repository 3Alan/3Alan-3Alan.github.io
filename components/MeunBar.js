import { useRouter } from 'next/router';
import { FaComments, FaArrowUp, FaSun, FaMoon, FaListUl } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';

export default function MenuBar() {
    const router = useRouter();
    const [darkValue, setDarkValue] = useState('light');

    const toggleMode = () => {
        console.log(localStorage.theme);
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light';
        } else {
            localStorage.theme = 'dark';
        }
        router.reload();
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const scrollToComment = () => {
        const vComment = document.getElementById('vcomments');
        vComment.scrollIntoView();
    };

    useEffect(() => {
        const darkItem = window.localStorage.getItem('theme');
        setDarkValue(darkItem);
    }, []);

    return (
        <div className="fixed right-3 bottom-2 sm:right-6 sm:bottom-8 flex flex-col z-50">
            <div
                className="w-8 h-8 mb-2 sm:w-12 sm:h-12 flex bg-blue-500 justify-center items-center rounded-full cursor-pointer dark:bg-gray-600"
                onClick={scrollToTop}
            >
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className="sm:text-lg dark:text-gray-900">
                        <FaArrowUp />
                    </div>
                </IconContext.Provider>
            </div>
            <div
                className="w-8 h-8 mb-2 sm:w-12 sm:h-12 flex bg-blue-500 justify-center items-center rounded-full cursor-pointer dark:bg-gray-600"
                onClick={scrollToComment}
            >
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className="sm:text-lg dark:text-gray-900">
                        <FaComments />
                    </div>
                </IconContext.Provider>
            </div>
            <div
                className="w-8 h-8 sm:w-12 sm:h-12 flex bg-blue-500 justify-center items-center rounded-full cursor-pointer dark:bg-gray-600"
                onClick={toggleMode}
            >
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className="sm:text-lg dark:text-gray-900">{darkValue === 'dark' ? <FaMoon /> : <FaSun />}</div>
                </IconContext.Provider>
            </div>
        </div>
    );
}
