import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/homepage';
import Upcoming from './components/upcoming';
import Identity from './components/identity';
import Footer from './components/footer';
import './App.css'

function App() {
  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/identity" element={<Identity />} />
      </Routes>
    </BrowserRouter>
    </div>
    <Footer />
    </>
  );
};

export default App;
