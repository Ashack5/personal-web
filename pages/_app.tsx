import 'antd/dist/antd.css'
import '@/_core/styles/globalStyle.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { RecoilURLSyncTransitNext } from 'recoil-sync-next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <RecoilURLSyncTransitNext location={{ part: 'queryParams' }}>
          <Component {...pageProps} />
        </RecoilURLSyncTransitNext>
      </RecoilRoot>
    </>
  )
}

export default MyApp
