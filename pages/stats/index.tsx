import Head from 'next/head'
import { GlobalStats } from '@hub/components/GlobalStats'

export default function Stats() {
  return (
    <>
      <Head>
        <title>RER</title>
        <meta property="og:title" content="RER" key="title" />
      </Head>
      <GlobalStats />
    </>
  )
}
