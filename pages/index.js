import Head from 'next/head'
import Layout from '../components/layout'
import MoreStories from '../components/more-stories'
import { getAllPosts } from '../lib/api'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Gouv.plus</title>
        </Head>
        <MoreStories posts={allPosts} />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['titre', 'date', 'image', 'extrait', 'slug'])

  return {
    props: { allPosts },
  }
}
