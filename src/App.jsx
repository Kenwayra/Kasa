import './App.css'
import Test from './pages/Home/Home.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/About/About.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/home' element={<Test />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
