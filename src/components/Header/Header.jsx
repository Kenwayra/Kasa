import { NavLink } from 'react-router-dom'
import './Header.css'
import LOGO from '../../assets/LOGO.png'

function Header() {
    return (
        <div className='header'>
            <img className='header-logo' src={LOGO} alt='Kasa logo'/>
            <nav className='nav-items'>
                <NavLink to="/home" 
                className={({isActive}) => isActive ? 'nav-active' : ''}
                >
                Accueil</NavLink>
                <NavLink to="/about"
                className={({isActive}) => isActive ? 'nav-active' : ''}
                >
                À Propos</NavLink>
            </nav>
        </div>
    )
}

export default Header