import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Login />} /> 
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/signup" element={<Signup/>} />
            </Routes>
        </div>
    );
}

export default App;

