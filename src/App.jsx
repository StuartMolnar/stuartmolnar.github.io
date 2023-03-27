import React from 'react';
import Home from './pages/Home';
import Overview from './pages/Overview';
import Board from './pages/Board';
import Investors from './pages/Investors';
import News from './pages/News';
import Article_1 from './pages/articles/Article-1';
import GoldProject from './pages/Gold-Project';
import ScrollToTop from './components/ScrollToTop';
import { Routes, Route, BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/board" element={<Board />} />
        <Route path="/ws-project" element={<GoldProject />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/news" element={<News />} />
        <Route path="/western-star-plans-large-program" element={<Article_1 />} />
      </Routes>
      
    
    </BrowserRouter>
  );
};

export default App;
