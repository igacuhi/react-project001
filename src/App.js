import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import{ Navbar } from './components/navbar';
function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
