import { IconContext } from 'react-icons';
import { FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Tools from './Tools';
import { useEffect, useState } from 'react';
import { FULL_PAGE_LIST, CSR } from '../../lib/constants';
import { useScroll } from 'ahooks';
import cn from 'classnames';

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

function NavItem({ name, link = '/' }) {
    return (
        <div className="px-4 text-sm font-mono text-gray-600 dark:text-gray-300">
            <Link href={link}>
                <a>{name}</a>
            </Link>
        </div>
    );
}

function NavList() {
    return (
        <div className="flex-1 flex items-center ml-2">
            <NavItem name="分类" />
            <NavItem name="归档" />
            <NavItem name="友链" />
            <NavItem name="留言" />
            <NavItem name="关于" />
        </div>
    );
}

export default function Navigator() {
    let scroll;
    const router = useRouter();
    const [opacityvalue, setOpacityvalue] = useState(1);
    const [isFullPage, setIsFullPage] = useState(false);

    if (CSR) {
        scroll = useScroll(document, (val) => val.top < 300);
    }

    useEffect(() => {
        if (FULL_PAGE_LIST.includes(router.pathname)) {
            setOpacityvalue(0);
            setIsFullPage(true);
        }
    }, [router]);

    useEffect(() => {
        if (isFullPage) {
            setOpacityvalue(Math.floor(scroll.top / 20) * 10);
            console.log(Math.floor(scroll.top / 20) * 10);
        }
    }, [scroll]);

    return (
        <div
            className={cn(
                `fixed sm:flex bg-white hidden h-16 inset-0 overflow-hidden z-50 transition-colors bg-opacity-${opacityvalue} dark:bg-dark-content`,
                {
                    'shadow-navigator': !isFullPage || opacityvalue > 50
                }
            )}
        >
            <div className="max-w-screen-lg mx-auto flex w-full justify-between items-center py-2">
                <HomeIcon />
                <NavList />
                <Tools />
            </div>
        </div>
    );
}
