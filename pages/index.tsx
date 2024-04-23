import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()
  const REALM = process?.env?.REALM

  useEffect(() => {
    const mainUrl = REALM ? `/dao/${REALM}` : '/rers'
    if (!router.asPath.includes(mainUrl)) {
      router.replace(mainUrl)
    }
  }, [REALM, router])

  return null

}

export default Index
