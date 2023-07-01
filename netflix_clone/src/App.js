
import { Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './LandingComponents/Landing';
import './App.css';

import Home from './pages/Home';

function App() {
  const navigate = useNavigate()
  return (
    <div className="App ">
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
