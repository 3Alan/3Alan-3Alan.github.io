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
    <div className="px-4 font-semibold text-sm font-mono hover:text-blue-500  text-gray-500 dark:text-gray-300 dark:hover:text-blue-400">
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
      <NavItem name="关于" link="/resume" />
    </div>
  );
}

export default function Navigator() {
  let scroll;
  const router = useRouter();
  const [isFullPage, setIsFullPage] = useState(false);

  if (CSR) {
    scroll = useScroll(document);
  }

  useEffect(() => {
    if (FULL_PAGE_LIST.includes(router.pathname)) {
      console.log('hashshdfhds', isFullPage);
      setIsFullPage(true);
    }
  }, [router]);

  return (
    <div
      className={cn(`fixed transition-all bg-white hidden h-16 inset-0 z-50 dark:bg-dark-content`, {
        'shadow-navigator': !isFullPage || (scroll && scroll.top > 200),
        'sm:flex': !isFullPage || (scroll && scroll.top > 200)
      })}
    >
      <div className="max-w-screen-lg mx-auto flex w-full justify-between items-center py-2">
        <HomeIcon />
        <NavList />
        <Tools />
      </div>
    </div>
  );
}
