import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div>
            <h2>Sign up</h2>
            {/* Signup form goes here */}
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}

export default Signup;
