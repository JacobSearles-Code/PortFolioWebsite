import { Link } from 'react-router-dom'

const Heading = () => {

    return (
        <header className="sidebar">
            <nav>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/">Home</Link>
            </nav>
        </header>
    )
}

export default Heading;