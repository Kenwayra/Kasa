import './App.css'
import Test from './pages/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx'
import Housing from './pages/Housing/Housing.jsx'

function App() {
  return (
    <>
      <div className='page-container'>
        <Header/>
        <Routes>
          <Route path='/home' element={<Test />} />
          <Route path='/about' element={<About />} />
          <Route path='/housing/:id' element={<Housing/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
