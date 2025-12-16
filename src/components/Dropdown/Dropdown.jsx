import { useState, useEffect } from 'react'
import './Dropdown.css'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Dropdown({title, content}) {
   const [isOpen, setIsOpen] = useState(false)

   function handleClick() {
      setIsOpen(prev => !prev)
   }

   useEffect(() => {
      console.log(isOpen ? "Open": "Closed")
   }, [isOpen])

   return (
      <div className='dropdown-wrapper'>
         <button className="dropdown" onClick={handleClick}>
            {title} 
            <FontAwesomeIcon icon={isOpen ? faAngleDown : faAngleUp} />
         </button>

         {isOpen && (
            <div className='dropdown-text'>{content}</div>
         )}
      </div>
   )

}

export default Dropdown