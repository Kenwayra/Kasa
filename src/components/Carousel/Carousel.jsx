import './Carousel.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight  } from '@fortawesome/free-solid-svg-icons'

function Carousel({pictures}) {

    const [index, setIndex] = useState(0)

    const next = () => {
        if (index === pictures.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const prev = () => {
        if (index === 0) {
            setIndex(pictures.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className='carousel'>
            <button onClick={prev}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img
                className='carousel-img'
                src={pictures[index]}
                alt='image du logement'
            />
            <p className='counter'>{index + 1}/{pictures.length}</p>
            <button onClick={next}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}

export default Carousel