import type { NextPage } from 'next'
import Header from "../components/Header"
import Trending from "../components/Trending";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Header />
      <div className="mt-10" />
      {/* <Trending /> */}
      <Trending />
      <div className="mt-20" />
      {/* <CMCTable /> */}
    </div>
  )
}

export default Home
