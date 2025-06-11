import React, { JSX, useEffect, useState } from 'react';
import './App.css';

function App(): JSX.Element {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  

  useEffect(() => {
    console.log("CV loaded!");
  }, []);

  const toggleSection = (section: string) => {
    setActiveSection(prev => prev === section ? null : section);
  };

  const sections = [
    {
      id: 'about',
      title: 'About Me',
      content: 'Computer Science graduate with expertise in React/TypeScript.'
    },
    {
      id: 'education',
      title: 'Education',
      content: 'Diploma in Computer Science (2024)'
    },

    {
      id: 'projects',
      title: 'Projects',
      content: 'Link To My Projects'
    }
  ];

  return (
    <div className="App">
     
      <header className="App-header">
        <div className="header-content">
          <h1 className="title">My CV</h1>
          <div className="personal-info">
            <h3>Name: Anonymous</h3>
            <h4>ID: 000000000</h4>
          </div>
        </div>
      </header>

      <main className="main-content">
        {sections.map((section) => (
          <div key={section.id} className="cv-section">
            <div 
              className="section-header"
              onClick={() => toggleSection(section.id)}
            >
              <h2>{section.title}</h2>
              <span className={`arrow ${activeSection === section.id ? 'open' : ''}`}>
                &gt;
              </span>
            </div>
            <div className={`section-content ${activeSection === section.id ? 'open' : ''}`}>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </main>

      <footer>
        <div className="container">
          <h4>All rights reserved to Yehiam Knafo©</h4>
          <div className="icons">my icons</div>
          <button className="export-button">Export to PDF</button>
        </div>
      </footer>
      
 
      

    </div>
  );
}

export default App;