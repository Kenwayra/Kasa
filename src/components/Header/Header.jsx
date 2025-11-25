import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <p>This is a header.</p>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
        </nav>
        </>
    )
}

export default Header