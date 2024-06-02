import { Route, Routes } from "react-router-dom"
import HeroSection from '../Components/HeroSection'
import IDOEvent from '../Components/IDOEvent'
import TokenOmics from '../Components/TokenOmics'
import Roadmap from '../Components/Roadmap'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection id="home" />} />
      <Route path="/idoevent" element={<IDOEvent id="idoevent" />} />
      <Route path="/tokenomics" element={<TokenOmics id="tokenomics" />} />
      <Route path="/roadmap" element={<Roadmap id="roadmap" />} />
      <Route path="/comingsoon" element={<div id="comingsoon">Coming Soon</div>} />
    </Routes>
  )
}

export { AllRoutes }
