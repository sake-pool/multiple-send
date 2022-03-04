import type { NextPage } from 'next'

import { Layout } from '@/components/Layout'
import { Top } from '@/components/Top'

const Home: NextPage = () => {
  return (
    <Layout>
      <Top />
    </Layout>
  )
}

export default Home
