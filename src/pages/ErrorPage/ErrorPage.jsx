import './ErrorPage.css'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='error-page'>
            <p className='error'>404</p>
            <p className='error-text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='error-link' to="/home">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default ErrorPage