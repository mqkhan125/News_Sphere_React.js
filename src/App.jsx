import React from 'react'
import Navbar from './Component/Navbar'
import Catorgy from './Component/Catorgy'
import News from './Page/News'
import Footer from './Component/Footer'

const App = () => {

  return (
    <>
      <Navbar className={"sticky top-0 z-20"} />
      <Catorgy className="py-10 sticky top-14 z-10" />
      <News className={"pb-10"} />
      <Footer />
    </>
  );
}

export default App