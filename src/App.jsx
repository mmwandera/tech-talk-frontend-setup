import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Signup from './Signup';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/signup" element={<Signup/>} />
                <Route exact path="/profile" element={<Profile />} /> 
            </Routes>
        </div>
    );
}

export default App;

