import { IconContext } from 'react-icons';
import { FaBasketballBall } from 'react-icons/fa';
import { ImGithub } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
    return (
        <div style={{ boxShadow: '0 10px 15px -3px black' }} className="bg-white w-full dark:bg-dark-content">
            <footer className="text-gray-600 body-font max-w-screen-lg mx-auto">
                <div className="px-5 py-8 flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <IconContext.Provider value={{ color: '#fbb01f' }}>
                            <div className="text-lg">
                                <FaBasketballBall />
                            </div>
                        </IconContext.Provider>
                        <span className="ml-3 text-xl text-gray-500 dark:text-gray-300">Alan</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-300 sm:py-2 sm:mt-0 mt-4">
                        © 2021 Alan —
                        <a
                            href="https://github.com/3Alan"
                            className="text-gray-600 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @Alan
                        </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="mr-4 text-gray-500">
                            <IconContext.Provider value={{}}>
                                <div className="text-lg text-gray-400">
                                    <MdEmail />
                                </div>
                            </IconContext.Provider>
                        </a>
                        <a className="text-gray-500">
                            <IconContext.Provider value={{}}>
                                <div className="text-lg text-gray-400">
                                    <ImGithub />
                                </div>
                            </IconContext.Provider>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}
