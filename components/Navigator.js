import { EXAMPLE_PATH } from '../lib/constants';

export default function Navigator() {
  return (
    <div className="bg-accent-7 text-white hidden sm:flex h-20 justify-between fixed inset-0 overflow-hidden z-50">
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
          search-menu
        </a>
      </div>
    </div>
  );
}
