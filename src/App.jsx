import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/signup" element={<Signup/>} />
                {/* Add routes for other pages here */}
            </Routes>
        </div>
    );
}

export default App;

