import DateFormatter from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';

function Card({ children }) {
  return <div className="shadow-md rounded-xl overflow-hidden max-w-screen-md mb-10">{children}</div>;
}

function CoverLayout({ title, coverImage, date, excerpt, slug }) {
  return (
    <Card>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <a>
          <div className="relative w-full h-56 overflow-hidden md:h-80 text-white">
            <div className="absolute inset-0 w-full h-full">
              <img
                className="object-cover w-full h-full"
                src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2019/01/762065921.jpg"
              />
              {/* <img className="object-cover w-full" src={coverImage} /> */}
            </div>

            <div className="absolute bottom-0 px-10 pb-5 w-full">
              <h3 className="text-2xl mb-2 leading-snug truncate">{title}</h3>
              <p className="text-base leading-relaxed mb-2 hidden md:block ellipsis-2">{excerpt}</p>
              <div className="text-sm hidden md:block">
                <DateFormatter dateString={date} />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Card>
  );
}

function HeadImgLayout({ title, coverImage, date, excerpt, slug }) {
  return (
    <Card>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={coverImage} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your
            first customers.
          </p>
        </div>
      </div>
    </Card>
  );
}

export default function PostPreview(props) {
  const { layout } = props;
  return <>{layout === 'cover' ? <CoverLayout {...props} /> : <HeadImgLayout {...props} />}</>;
}
