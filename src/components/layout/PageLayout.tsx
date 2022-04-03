import React from 'react'
import Head from 'next/head'

interface Props {
  title?: string
  cn?: string
  children: React.ReactNode
}

const PageLayout: React.FC<Props> = ({ title, cn, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title || 'Digital Twin'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`container mx-auto max-w-xl px-4 pt-8 min-h-screen ${cn}`}
      >
        {children}
      </main>
    </>
  )
}

export default PageLayout
