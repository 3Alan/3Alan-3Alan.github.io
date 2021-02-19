import Container from '../components/Container';
import PostList from '../components/PostList';
import Intro from '../components/intro';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { ThemeContext, UPDATE_THEME } from '../components/ThemeProvider';

export default function Index({ allPosts }) {
    const morePosts = allPosts;
    const { theme, dispatch } = useContext(ThemeContext);

    useEffect(() => {
        if (
            localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            dispatch({ type: UPDATE_THEME, value: 'dark' });
        } else {
            document.documentElement.classList.remove('dark');
            dispatch({ type: UPDATE_THEME, value: 'light' });
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <>
            <Layout>
                <Head>
                    <title>Alan | 前端博客</title>
                </Head>
                <Container>
                    <Intro />
                    {morePosts.length > 0 && <PostList posts={morePosts} />}
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
