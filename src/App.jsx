import {GlobalStyled} from './GlobalStyled.jsx'
import FooterComponent from './components/footer/FooterComponent.jsx'
import HeaderComponent from './components/header/HeaderComponent.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import GalleryPage from './Pages/GalleryPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'


function App() {


  return (
    <BrowserRouter>
      <GlobalStyled />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
     

      <FooterComponent/>
      
    </BrowserRouter>
  )
}

export default App
