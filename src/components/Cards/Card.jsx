import './Card.css'
import { Link } from 'react-router-dom'


function Card({title, cover, id}) {
    return (
        <>
        <Link to={`/housing/${id}`} className='card'>
            <img className='card-cover' src={cover}/>
            <div className='card-title'>{title}</div>
        </Link>
        </>
    )
}

export default Card