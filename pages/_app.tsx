import { useRouter } from 'next/router'
import { useEffect } from 'react'
import AOS from 'aos'
import type { AppProps } from 'next/app'

import MainLayout from '@/layouts/MainLayout'
import '@/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  })

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [router.pathname]) // triggered on route change

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default App
