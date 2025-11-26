import { useState } from 'react';
import './App.css'; // Pastikan CSS diimport
import data from './dataMahasiswa.json';

import Profile from './components/Profile';
import Skills from './components/Skills';
import Experiences from './components/Experiences';

function App() {
  return (
    <div className="app-container">
      <Profile data={data.profile} />
      <Skills data={data.skills} />
      <Experiences data={data.experiences} />
    </div>
  );
}

export default App;