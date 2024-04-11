import Head from 'next/head'
import { useRouter } from 'next/router'

import { FeedItem } from '@hub/components/FeedItem'

export default function EcosystemFeedItem() {
  const router = useRouter()
  const { feedItemId } = router.query

  return (
    <div>
      <Head>
        <title>RER</title>
        <meta property="og:title" content="RER" key="title" />
      </Head>
      <FeedItem feedItemId={feedItemId as string} realmUrlId="ecosystem" />
    </div>
  )
}
