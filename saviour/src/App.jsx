import './App.css'
import { FAQ } from './Components/FAQ'
import { Footer } from './Components/Footer'
import { HeroSection } from './Components/HeroSection'
import { IDOEvent } from './Components/IDOEvent'
import { IntroSection } from './Components/IntroSection'
import { Roadmap } from './Components/Roadmap'
import { TokenOmics } from './Components/TokenOmics'

function App() {

  return (
    <>
    <HeroSection/>
    <IntroSection/>
    <IDOEvent/>
    <TokenOmics/>
    <Roadmap/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default App
