'use client';

import AssetsLoadedProvider from '../context/assets-loaded';

export default function Providers({children}) {
  return <AssetsLoadedProvider value={false}>{children}</AssetsLoadedProvider>;
}
