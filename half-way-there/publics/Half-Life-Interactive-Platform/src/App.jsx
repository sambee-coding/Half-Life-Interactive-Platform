import { useState } from 'react'
import './App.css'
import LandingPage from './assets/components/LandingPage'
import TimeCapsule from './assets/components/TimeCapsule'
import FavoritePhotos from './assets/components/FavoritePhotos'
import Footer from './assets/components/Footer'
import './index.css'
import Typewriter from './assets/components/Typewitter'
import Contact from './assets/components/subpages/Contact'


function App() {


  return (
    <div className='landingPage'>
    
      < Typewriter  />
     <LandingPage />
     <TimeCapsule />
     <FavoritePhotos />
     <Footer />
    </div>
  )
}

export default App
