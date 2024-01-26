import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/homepage';
import Upcoming from './components/upcoming';
import Identity from './components/identity';
import Footer from './components/footer';
import './App.css'
import config from './config'

function App() { 
  return (
    <>
    <div>
    <BrowserRouter>
      <Routes>
        <Route path={`${config.base}/`} element={<Home />} />
        <Route path={`${config.base}/upcoming`} element={<Upcoming />} />
        <Route path={`${config.base}/identity`} element={<Identity />} />
      </Routes>
    </BrowserRouter>
    </div>
    <Footer />
    </>
  );
};

export default App;
