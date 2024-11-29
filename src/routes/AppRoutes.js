import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Team from '../components/Team';
import Company from '../components/Company';
import { Waitlist } from '../components/Waitlist';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/company" element={<Company />} />
      <Route path="/waitlist" element={<Waitlist />} />
    </Routes>
  );
};

export default AppRoutes;
