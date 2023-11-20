import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import BannerSection from './BannerSection.jsx'
import Aboutme from './AboutMe.jsx'
import  TechSection from './TechSection.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <BannerSection />
    <Aboutme />
    <TechSection />
  </React.StrictMode>,
)
