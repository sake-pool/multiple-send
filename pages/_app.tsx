import 'nprogress/nprogress.css'

import type { AppProps } from 'next/app'
import nprogress from 'nprogress'
import { useEffect } from 'react'

// お好みで設定。
// 一瞬で遷移できる場合でもspeed: 400のようにするとバーが必ずアニメーションしてくれる?
nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (process.browser) {
    nprogress.start()
  }

  useEffect(() => {
    nprogress.done()
  })

  return <Component {...pageProps} />
}

export default MyApp
