import './Footer.css'
import LOGO_FOOTER from '../../assets/LOGO_FOOTER.png'

function Footer() {
    return (
        <div className='footer'>
            <img className='footer-logo' src={LOGO_FOOTER} alt='Kasa logo'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer