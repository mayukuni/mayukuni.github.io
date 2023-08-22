import './App.css';
import Home from './pages/Home';
import Ux from './pages/Ux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ux" element={< Ux />}/>
        <Route path="/projects"/>
        <Route path="/about-me"/>
      </Routes>
    </Router>
  );
}

export default App;
