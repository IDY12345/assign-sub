import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Form from './Pages/Form';
import Hackathon from './Pages/Hackathon';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
      <Router>
        <nav>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path='/Upload' element={<Form />} />
            <Route path='/Hackathon' element={<Hackathon />} />
          </Routes>
        </nav>
      </Router>
    </div>
  );
}

export default App;
