import React from 'react'

import{Header,Footer,Skills,Work,About,Testimonials} from './container/index'
import { Navbar } from './components/index'
import './App.scss'
const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer/>
    </div>
  )
}

export default App