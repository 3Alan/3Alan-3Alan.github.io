import Container from '../components/Container';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Navigator from '../components/Navigator';

export default function Index({ allPosts }) {
    const morePosts = allPosts;
    return (
        <>
            <Navigator />
            <Layout>
                <Head>
                    <title>Alan | 前端博客</title>
                </Head>
                <Container>
                    <Intro />
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    );
}

export async function getStaticProps() {
    const allPosts = getAllPosts(['title', 'date', 'slug', 'coverImage', 'excerpt', 'layout']);

    return {
        props: { allPosts }
    };
}
