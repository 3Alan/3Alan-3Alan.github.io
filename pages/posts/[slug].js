import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/Container';
import Comment from '../../components/Comment';
import PostBody from '../../components/post/PostBody';
import Header from '../../components/post/Header';
import PostHeader from '../../components/post/PostHeader';
import Layout from '../../components/Layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/PostTitle';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import CoverImage from '../../components/CoverImage';
import Navigator from '../../components/Navigator';
import MenuBar from '../../components/MeunBar';

export default function Post({ post, morePosts }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <MenuBar />
      <Navigator dynamicShow={false} />
      <Layout>
        <CoverImage
          title="123"
          src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2019/01/762065921.jpg"
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <Container bgColor={'bg-white'}>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <div className="flex flex-row">
              <div className="py-10 px-4 mb-10 dark:bg-gray-900 bg-white w-full lg:max-w-screen-md">
                <article>
                  <Head>
                    <title>Alan Blog | {post.title}</title>
                    <meta property="og:image" content={post.ogImage.url} />
                  </Head>
                  {/* <PostHeader /> */}
                  <PostBody content={post.content} />
                </article>
                <Comment />
              </div>
              <div className=" hidden py-10 mb-10 bg-white lg:flex lg:flex-1 dark:bg-gray-900 dark:text-gray-300">右边的内容</div>
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
