import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import ManageBlogs from './ManageBlogs';
import Signup from './Signup';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<Login />} /> 
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/signup" element={<Signup/>} />
                <Route exact path="/manage-blogs" element={<ManageBlogs />} />
            </Routes>
        </div>
    );
}

export default App;

