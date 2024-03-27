import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
            <h2>Login</h2>
            {/* Login form goes here */}
            <p>Dont have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    );
}

export default Login;
