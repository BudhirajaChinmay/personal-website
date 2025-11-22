import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { profile, experience, projects, skills, education } from './data';

function App() {
  return (
    <div className="app">
      <Hero profile={profile} />
      <Experience experience={experience} education={education} />
      <Projects projects={projects} skills={skills} />
      <Contact profile={profile} />
    </div>
  );
}

export default App;
