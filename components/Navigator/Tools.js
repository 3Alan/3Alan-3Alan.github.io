import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { FaMoon, FaSun, FaGithub } from 'react-icons/fa';

export default function Tools() {
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

    useEffect(() => {
        const darkItem = window.localStorage.getItem('theme');
        setDarkValue(darkItem);
    }, []);

    return (
        <div className="flex items-center">
            <a className="text-gray-800 mr-1" href="https://github.com/3Alan" rel="noreferrer" target="_blank">
                <IconContext.Provider value={{}}>
                    <div className="sm:text-lg cursor-pointer hover:bg-gray-100 p-2 rounded-full dark:text-gray-900 dark:hover:bg-gray-700">
                        <FaGithub />
                    </div>
                </IconContext.Provider>
            </a>
            <div onClick={toggleMode}>
                <IconContext.Provider value={{ color: darkValue === 'light' ? '#FCD34D' : '#F59E0B' }}>
                    <div className="sm:text-lg cursor-pointer hover:bg-gray-100 p-2 rounded-full dark:text-gray-900 dark:hover:bg-gray-700">
                        {darkValue === 'light' ? <FaMoon /> : <FaSun />}
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    );
}
