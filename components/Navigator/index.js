import { IconContext } from 'react-icons';
import { FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tools from './Tools';
import { useEffect, useState } from 'react';
import { FULL_PAGE_LIST } from '../../lib/constants';

function HomeIcon() {
    return (
        <Link href="/">
            <a>
                <div className="flex items-center pl-5">
                    <IconContext.Provider value={{ color: '#fbb01f' }}>
                        <div className="text-xl inline-block">
                            <FaBasketballBall />
                        </div>
                    </IconContext.Provider>
                    <span className="ml-3 text-xl text-gray-500 dark:text-gray-300">Alan</span>
                </div>
            </a>
        </Link>
    );
}

export default function Navigator() {
    const [opacityvalue, setOpacityvalue] = useState(1);
    const [isFullPage, setIsFullPage] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (FULL_PAGE_LIST.includes(router.pathname)) {
            console.log('hahah yes');
            setOpacityvalue(0);
            setIsFullPage(true);
        }
    }, [router]);

    return (
        <div
            style={{
                opacity: opacityvalue
            }}
            className="fixed sm:flex bg-white hidden h-16 inset-0 overflow-hidden z-50 shadow-navigator transition-colors dark:bg-dark-content"
        >
            <div className="max-w-screen-lg mx-auto flex w-full justify-between items-center py-2">
                <HomeIcon />
                <Tools />
            </div>
        </div>
    );
}
