import { IconContext } from 'react-icons';
import { FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';
import cn from 'classnames';
import Tools from './Tools';

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

export default function Navigator({ dynamicShow = true }) {
    return (
        <div
            className={cn(
                'bg-white hidden h-16 inset-0 overflow-hidden z-50 shadow-navigator transition-colors dark:bg-dark-content',
                {
                    fixed: dynamicShow,
                    'sm:flex': dynamicShow
                }
            )}
        >
            <div className="max-w-screen-lg mx-auto flex w-full justify-between items-center py-2">
                <HomeIcon />
                <Tools />
            </div>
        </div>
    );
}
