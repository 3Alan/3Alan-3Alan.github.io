import { useContext } from 'react';
import { IconContext } from 'react-icons';
import { FaMoon, FaSun, FaGithub } from 'react-icons/fa';
import { ThemeContext, UPDATE_THEME } from '../ThemeContextProvider';

export default function Tools() {
  const { theme, dispatch } = useContext(ThemeContext);

  const toggleMode = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      dispatch({ type: UPDATE_THEME, value: 'light' });
    } else {
      localStorage.setItem('theme', 'dark');
      dispatch({ type: UPDATE_THEME, value: 'dark' });
    }
  };

  return (
    <div className="flex items-center pr-5">
      <a className="text-gray-800 mr-1" href="https://github.com/3Alan" rel="noreferrer" target="_blank">
        <IconContext.Provider value={{}}>
          <div className="sm:text-lg cursor-pointer hover:bg-gray-100 p-2 rounded-full dark:text-gray-50 dark:hover:bg-gray-700">
            <FaGithub />
          </div>
        </IconContext.Provider>
      </a>
      <div onClick={toggleMode}>
        <IconContext.Provider value={{ color: theme === 'light' ? '#FCD34D' : '#F59E0B' }}>
          <div className="sm:text-lg cursor-pointer hover:bg-gray-100 p-2 rounded-full dark:hover:bg-gray-700">
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
