import React from 'react'
import Navbar from './Component/Navbar'
import Catorgy from './Component/Catorgy'
import News from './Page/News'

const App = () => {
  return (
    <>
    <Navbar />
    <Catorgy  className = {'py-3'}/>
    <News />
    </>
  )
}

export default App