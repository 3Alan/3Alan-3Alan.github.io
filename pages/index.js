import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import { useEffect } from 'react';
import AV from 'leancloud-storage';

export default function Index({ allPosts }) {
  const morePosts = allPosts;
  useEffect(() => {
    if (window) {
      AV.init({
        appId: 'aowgxqHE7wB4I8HLWqC4c4Ut-MdYXbMMI',
        appKey: '37wkY4T3cM7nV2UWV7EIEHPy'
      });
      const query = new AV.Query('Counter');
      // https://leancloud.cn/docs/leanstorage_guide-js.html#hash1025913543
      query.get('5fa8feb8cb5eb5529f9e864c').then((counter) => {
        const times = counter.get('times');
        console.log(times);
      });
      // eslint-disable-next-line global-require
      const Valine = require('valine');
      const comment = new Valine({
        el: '#vcomments',
        appId: 'aowgxqHE7wB4I8HLWqC4c4Ut-MdYXbMMI',
        appKey: '37wkY4T3cM7nV2UWV7EIEHPy'
        // other config
      });
      console.log(comment);
    }
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <div id="vcomments"></div>
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
