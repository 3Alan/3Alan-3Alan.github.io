import { CMS_NAME } from '../lib/constants';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <a href="https://nextjs.org/" className="underline hover:text-success duration-200 transition-colors">
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
    </section>
  );
}
