import Head from 'next/head'

import { EcosystemFeed } from '@hub/components/EcosystemFeed'

export default function Ecosystem() {
  return (
    <div>
      <Head>
        <title>Reverion Ecosystem</title>
        <meta property="og:title" content="Reverion Ecosystem" key="title" />
      </Head>
      <EcosystemFeed />
    </div>
  )
}
