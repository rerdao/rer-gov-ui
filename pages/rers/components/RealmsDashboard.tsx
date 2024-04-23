import { RealmInfo } from '@models/registry/api'
import React, { useMemo, useState } from 'react'
import RealmsGrid from './RealmsGrid'

export default function RealmsDashboard({
  realms,
  filteredRealms,
  isLoading,
  editing,
  searching,
  clearSearch,
  cluster,
}: {
  realms: readonly RealmInfo[]
  filteredRealms: readonly RealmInfo[]
  isLoading: boolean
  editing: boolean
  searching: boolean
  clearSearch: () => void
  cluster: string | string[] | undefined
}) {


  const [limit, setLimit] = useState(10); // State variable for limit (default 10)

  const certifiedRealms = useMemo(() => realms?.filter((r) => r.isCertified), [
    realms,
  ])

  const unchartedRealms = useMemo(() => realms?.filter((r) => !r.isCertified), [
    realms,
  ])
  const limitedUnchartedRealms = useMemo(() => {
    return unchartedRealms?.slice(0, limit); // Limit to top 'limit' entries
  }, [unchartedRealms, limit]); // Include limit as a dependency

  return isLoading ? (
    <div className="grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      <div className="col-span-1 rounded-lg animate-pulse bg-bkg-2 h-44" />
      <div className="col-span-1 rounded-lg animate-pulse bg-bkg-2 h-44" />
      <div className="col-span-1 rounded-lg animate-pulse bg-bkg-2 h-44" />
      <div className="col-span-1 rounded-lg animate-pulse bg-bkg-2 h-44" />
      <div className="col-span-1 rounded-lg animate-pulse bg-bkg-2 h-44" />
      <div className="col-span-1 rounded-lg animate-pulse bg-bkg-2 h-44" />
      <div className="col-span-1 rounded-lg animate-pulse bg-bkg-2 h-44" />
      <div className="col-span-1 rounded-lg animate-pulse bg-bkg-2 h-44" />
      <div className="col-span-1 rounded-lg animate-pulse bg-bkg-2 h-44" />
      <div className="col-span-1 rounded-lg animate-pulse bg-bkg-2 h-44" />

    </div>
  ) : (
    <div>
      <button onClick={() => setLimit(limit + 5)}>Show 5 More</button>
      <RealmsGrid
        certifiedRealms={certifiedRealms}
        unchartedRealms={limitedUnchartedRealms}
        filteredRealms={filteredRealms}
        editing={editing}
        searching={searching}
        clearSearch={clearSearch}
        cluster={cluster}
      />
    </div>
  )
}
