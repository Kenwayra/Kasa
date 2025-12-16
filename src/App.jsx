import './App.css'
import Test from './pages/Home/Home.jsx'
import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/About/About.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Banner from './components/Banner/Banner.jsx'

function App() {
  return (
    <>
      <div className='page-container'>
        <Header/>
        <Routes>
          <Route path='/home' element={<Test />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
