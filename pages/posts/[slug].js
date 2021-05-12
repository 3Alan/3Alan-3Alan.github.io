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
import MenuBar from '../../components/MeunBar';
import Toc from '../../components/post/Toc';

export default function Post({ post, morePosts }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <MenuBar />
      <Head>
        <title>Alan Blog | {post.title}</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <Layout hasNav={false}>
        <CoverImage
          title="123"
          src="https://cdn.jsdelivr.net/gh/ihewro/blog@master/usr/uploads/2019/01/762065921.jpg"
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <Container>
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <div className="flex flex-row">
              <div className="w-full lg:max-w-screen-md">
                <article className="py-2 px-4 mt-2 mr-2 my-6 rounded-xl dark:bg-dark-content bg-gray-50">
                  {/* <PostHeader /> */}
                  <PostBody content={post.content} />
                </article>
                <div className="py-8 px-4 my-2 mr-2 shadow-card rounded-xl dark:bg-dark-content bg-white">
                  <Comment />
                </div>
              </div>
              <Toc />
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
