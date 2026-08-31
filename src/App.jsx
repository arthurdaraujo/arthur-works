import {GlobalStyled} from './styles/GlobalStyled.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Pages/Layout.jsx'
import NotFoundPage from './Pages/NotFoundPage.jsx'
import HomePage from './Pages/HomePage.jsx'
import GalleryPage from './Pages/GalleryPage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import ContactPage from './Pages/ContactPage.jsx'


function App() {


  return (
    <BrowserRouter>
      <GlobalStyled />
     
      <Routes>
        <Route element={<Layout />}>          
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

     

    </BrowserRouter>
  )
}

export default App
