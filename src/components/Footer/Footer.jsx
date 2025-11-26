import './Footer.css'
import LOGO from '../../assets/LOGO.png'

function Footer() {
    return (
        <div className='footer'>
            <img className='kasa-logo' src={LOGO} alt='Kasa logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer