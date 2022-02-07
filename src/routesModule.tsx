import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './views/about';
import Accept from './views/accept';
import Classes from './views/classes';
import Contact from './views/contact';
import Exercises from './views/contents/exercises';
import Texts from './views/contents/texts';
import Help from './views/help';
import Home from './views/home';
import Main from './views/main'
import Terms from './views/terms';
import Intro from './views/classes/sumary/intro'
import Class from './views/classes/sumary/class';

const RoutesModule = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accept" element={<Accept />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/help" element={<Help />} />
      <Route path="/contents/texts" element={<Texts />} />
      <Route path="/contents/exercises" element={<Exercises />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/classes/sumary/intro" element={<Intro />} />
      <Route path="/classes/sumary/class" element={<Class />} />
    </Routes>
  </Router>
);

export default RoutesModule;
