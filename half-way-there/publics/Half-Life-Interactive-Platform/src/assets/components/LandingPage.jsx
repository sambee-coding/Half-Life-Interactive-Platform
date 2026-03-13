import React from 'react'
import LandingImage from '../images/undraw_graduation_u7uc.svg'
import Typewriter from './Typewitter'

export default function LandingPage() {
  return (
    <div>
       <section className="landing-page">
    <h1 >{Typewriter}</h1>
    <img src={LandingImage} class="img-fluid mx-auto d-block mb-5" alt="Half-Life Platform Mockup"/>
    </section>
    </div>
  )
}
