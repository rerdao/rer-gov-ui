import Head from 'next/head'
import { useRouter } from 'next/router'

import { FeedItemComment } from '@hub/components/FeedItemComment'

export default function EcosystemFeedItemComment() {
  const router = useRouter()
  const { feedItemId, commentId } = router.query

  return (
    <div>
      <Head>
        <title>RER</title>
        <meta property="og:title" content="RER" key="title" />
      </Head>
      <FeedItemComment
        commentId={commentId as string}
        feedItemId={feedItemId as string}
        realmUrlId="ecosystem"
      />
    </div>
  )
}
