import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import styled from 'styled-components'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Gouv.plus</title>
        </Head>
        <Container>
          <Intro />
          <MoreStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['titre', 'date', 'image', 'extrait'])

  return {
    props: { allPosts },
  }
}
