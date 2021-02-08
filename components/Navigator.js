import { EXAMPLE_PATH } from '../lib/constants';
import { IconContext } from 'react-icons';
import { FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';
import cn from 'classnames';

export default function Navigator({ dynamicShow = true }) {
  return (
    <div
      className={cn('bg-gray-700 hidden h-20 inset-0 overflow-hidden z-50', {
        fixed: dynamicShow,
        'sm:flex': dynamicShow
      })}
    >
      <div className="max-w-screen-lg mx-auto flex w-full justify-between">
        <div className="py-2 text-center flex items-center px-6">
          <Link href="/">
            <a>
              <div className="flex items-center">
                <IconContext.Provider value={{ color: '#fbb01f' }}>
                  <div className="text-xl inline-block">
                    <FaBasketballBall />
                  </div>
                </IconContext.Provider>
                <span className="ml-3 text-xl text-gray-300">Alan</span>
              </div>
            </a>
          </Link>
        </div>
        <div className="py-2 text-center text-sm flex items-center px-6">
          <a
            href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
            className="hover:text-success duration-200 transition-colors"
          >
            search-menu
          </a>
        </div>
      </div>
    </div>
  );
}
