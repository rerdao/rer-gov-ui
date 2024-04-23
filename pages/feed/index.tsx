import Head from 'next/head'

import { MyFeed } from '@hub/components/MyFeed'

export default function Feed() {
  return (
    <div>
      <Head>
        <title>Reverion Ecosystem</title>
        <meta property="og:title" content="Reverion Ecosystem" key="title" />
      </Head>
      <MyFeed />
    </div>
  )
}
