// import { useState } from 'react'
import Navbar from "./Components/Navbar.tsx";
import NavbarBanner from './Components/NavbarBanner.tsx';
import Hero from './Components/Hero.tsx';
import NumberCounterSection from "./Components/NumberCounterSection.tsx";
import WhyChooseUs from './Components/WhyChooseUs.tsx';
import Schedule1 from "./Components/Schedule1.tsx";
import SubjectCard from './Components/SubjectCard.tsx';
import Img1 from "./assets/banner1.png"
import Img2 from "./assets/banner2.png"
import './App.css'
import Testimonials from './Components/Testimonials.tsx';
import Footer from './Components/Footer.tsx';



function App() {

  const BannerData = {
    image: Img1,
    tag: "CUSTOMIZE WITH YOUR SCHEDULE",
    title: "Personalized Professional Online Tutor on Your Schedule",
    subtitle:
      "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
    link: "#",
    reverse:false
  };
  
  const BannerData2 = {
    image: Img2,
    tag: "CUSTOMIZE WITH YOUR SCHEDULE",
    title: "Talented and Qualified Tutors to Serve You for Help",
    subtitle:
      "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
    link: "#",
    reverse:true
  };
  

  return (
    <main className="font-[Inter] overflow-x-hidden">
     <Navbar/>
     <NavbarBanner/>
     <Hero/>
     <NumberCounterSection/>
     <WhyChooseUs/>
     <Schedule1 {...BannerData}/>
     <Schedule1 {...BannerData2}/>
     <SubjectCard/>
     <Testimonials/>
     <Footer/>
    </main>
  )
}

export default App
