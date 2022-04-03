import type { NextPage } from 'next'
import PageLayout from "@src/components/layout/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <h1 className="text-primary-100 text-xl">Hello world!</h1>
    </PageLayout>
  )
}

export default Home
