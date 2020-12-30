import { useEffect } from 'react';
import { useScroll } from 'ahooks';
import { EXAMPLE_PATH } from '../lib/constants';

export default function Navigator() {
  const scroll = process.browser && useScroll(document);

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);


  return (
    <div className="bg-accent-7 text-white h-20 flex justify-between">
      <div className="py-2 text-center text-sm flex items-center px-6">
        <a
          href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
          className="hover:text-success duration-200 transition-colors"
        >
          logo
        </a>
      </div>
      <div className="py-2 text-center text-sm flex items-center px-6">
        <a
          href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
          className="hover:text-success duration-200 transition-colors"
        >
          content
        </a>
      </div>
    </div>
  );
}
