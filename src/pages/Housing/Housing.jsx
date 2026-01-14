import './Housing.css'
import { Navigate, useParams } from 'react-router-dom'
import logements from '../../data/logements.json'
import Carousel from '../../components/Carousel/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import Dropdown from '../../components/Dropdown/Dropdown'

function Housing() {

    const {id} = useParams()

    const housing = logements.find(logement => logement.id === id)
    
    if (!housing) {
        return <Navigate to="/error" replace/>
    }

    const stars = [0, 1, 2, 3, 4]

    return (
        <div className='housing-page'>
            <Carousel pictures={housing.pictures}/>
            <div className='housing-text'>
                <div className='housing-title'>
                    <h5>{housing.title}</h5>
                    <p>{housing.location}</p>
                </div>
                <div className='housing-host'>
                    <p>{housing.host.name}</p>
                    <div className='host-icon'>
                        <img
                            className='host-picture'
                            src={housing.host.picture}
                            alt='icône profil hôte'
                        />
                    </div>
                </div>
            </div>
            <div className='housing-summary'>
                <div className='tags-list'>
                    {housing.tags.map(tag => <p className='tag-item'>{tag}</p>)}
                </div>
                <div className='rating'>
                    {stars.map((i) => (
                        <FontAwesomeIcon 
                            key={i}
                            icon={faStar}
                            className={i < housing.rating ? "filled" : "empty"} 
                        />
                    ))}
                </div>
            </div>
            <div className='housing-description'>
                    <Dropdown
                        title="Description"
                        content={housing.description}
                        className='housing-dropdown'
                    />
                    <Dropdown
                        title="Équipements"
                        content={housing.equipments}
                        className='housing-dropdown'
                    />
            </div>
        </div>
    )
}

export default Housing