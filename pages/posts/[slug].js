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
            <Head>
                <title>Alan Blog | {post.title}</title>
                <meta property="og:image" content={post.ogImage.url} />
            </Head>
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
                            <div className="w-full lg:max-w-screen-md">
                                <article className="py-8 px-4 mt-2 mr-2 my-6 rounded-xl dark:bg-dark-content bg-white">
                                    {/* <PostHeader /> */}
                                    <PostBody content={post.content} />
                                </article>
                                <div className="py-8 px-4 my-2 mr-2 rounded-xl dark:bg-dark-content bg-white">
                                    <Comment />
                                </div>
                            </div>
                            <div className=" hidden py-4 shadow px-2 h-96 sticky top-0 mt-2 mb-10 rounded-xl bg-white lg:flex lg:flex-1 dark:bg-dark-content dark:text-gray-300">
                                Toc组件
                            </div>
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
