import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import WhyHireSection from '../components/WhyHireSection'
import WhyHireSection2 from '../components/WhyHireSection2'
import TechCompetency from '../components/TechCompetency'
import TrustSection from '../components/TrustSection'
import HiringProcess from '../components/HiringProcess'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import GuideToHire from '../components/GuideToHire'

const Home = () => {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <WhyHireSection/>
        <TechCompetency/>
        <WhyHireSection2/>
        <TrustSection/>
        <HiringProcess/>
        <GuideToHire/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home