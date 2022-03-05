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
import TermsInit from './views/terms/terms';
import Intro from './views/classes/sumary/intro'
import Class from './views/classes/sumary/class';
import Page404 from './views/page404';

const RoutesModule = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/views/about" element={<About />} />
      <Route path="/accept" element={<Accept />} />
      <Route path="/views/contact" element={<Contact />} />
      <Route path="/views/terms" element={<Terms />} />
      <Route path="/views/terms/terms" element={<TermsInit />} />
      <Route path="/views/help" element={<Help />} />
      <Route path="/views/contents/texts" element={<Texts />} />
      <Route path="/views/contents/exercises" element={<Exercises />} />
      <Route path="/views/classes" element={<Classes />} />
      <Route path="/views/classes/sumary/intro/:id" element={<Intro />} />
      <Route path="/views/classes/sumary/class" element={<Class />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </Router>
);

export default RoutesModule;
