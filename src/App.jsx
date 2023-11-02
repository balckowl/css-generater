import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import BoxShadow from './pages/BoxShadow/BoxShadow'
import LinerGradient from './pages/LinerGradient/LinerGradient'
import QRcode from './pages/QRCode/QRcode'
import ImageFilter from './pages/ImageFilter/ImageFilter'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boxshadow" element={<BoxShadow />} />
          <Route path="/linergradient" element={<LinerGradient />}/>
          <Route path="/imgfilter" element={<ImageFilter />}/>
          <Route path="/qrcode" element={<QRcode />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
