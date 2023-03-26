import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Form from './Pages/Form';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
      <Router>
        <nav>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path='/Upload' element={<Form />} />
          </Routes>
        </nav>
      </Router>
    </div>
  );
}

export default App;
