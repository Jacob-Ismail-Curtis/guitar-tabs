import React from 'react'
import Intro from './components/Intro'
import SongLoader from './components/SongLoader'
import HorizontalScroll from './components/HorizontalScroll'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Intro />
      {/* <HorizontalScroll /> */}
      <SongLoader />
      <Footer />
    </div>
  )
}

export default App