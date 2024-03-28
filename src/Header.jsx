import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="logo">TechTalk</div>
            <nav>
                <Link to="/profile">Profile</Link>
            </nav>
            <button>Logout</button>
        </header>
    );
}

export default Header;
