import { EXAMPLE_PATH } from '../lib/constants';
import { IconContext } from 'react-icons';
import { FaBasketballBall } from 'react-icons/fa';
import Link from 'next/link';

export default function Navigator() {
  return (
    <div className="bg-gray-700 hidden sm:flex h-20 fixed inset-0 overflow-hidden z-50">
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
