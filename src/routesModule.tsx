import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './views/main'

const RoutesModule = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  </Router>
);

export default RoutesModule;
