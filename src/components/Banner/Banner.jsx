import './Banner.css'
import { useLocation } from 'react-router-dom'
import HomeBanner from '../../assets/HomeBanner.png'
import AboutBanner from '../../assets/AboutBanner.png'

function Banner({title}) {
    const location= useLocation()

    return (
        <div className='banner'>
            <img className='banner-img' src={location.pathname === '/home' ? HomeBanner : AboutBanner} alt='banner'/>
            {title}
        </div>
    )
}

export default Banner