import {GlobalStyled} from './GlobalStyled.jsx'
import FooterComponent from './components/footer/FooterComponent.jsx'
import HeaderComponent from './components/header/HeaderComponent.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
      <GlobalStyled />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
      <main></main>

      <FooterComponent/>
      
    </BrowserRouter>
  )
}

export default App
