import  { JSX, useEffect, useState } from 'react';
import './App.css';
import MyDocument from './components/Pdf';
import { pdf } from '@react-pdf/renderer';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ProjectLink from './components/ProjectLink';
export const details  = {
  firstname: process.env.REACT_APP_FIRSTNAME,
  lastname: process.env.REACT_APP_LASTNAME,
  phonenumber:process.env.REACT_APP_PHONENUM,
  email: process.env.REACT_APP_EMAIL,
  github: process.env.REACT_APP_GITHUB,
  linkedin: process.env.REACT_APP_LINKEDIN,
  firstname_hebrew: process.env.REACT_APP_FIRSTNAME_HEB,
  github_cv: process.env.REACT_APP_GITHUB_CV,
  github_dating_app: process.env.REACT_APP_GITHUB_DATING_APP,
  REACT_APP_GITHUB_VARCEL: process.env.REACT_APP_GITHUB_VARCEL
}

function App(): JSX.Element {
  const currentYear = new Date();
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pdfAction = async () => {
  const fillterdSections = sections.filter(project=> project.id !== "projects");
  const blob = await pdf(<MyDocument sections={fillterdSections} />).toBlob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${details.firstname}'s-cv-${currentYear.getFullYear().toString()}.pdf`;
  link.click();
  URL.revokeObjectURL(url);
};
const GithubLink = () =>{
      window.location.href = details.github || "https://www.github.com";

}
const linkdinLink =() =>{
      window.location.href = details.linkedin || "https://www.linkedin.com";


}

  useEffect(() => {
    console.log("CV loaded!");
  }, []);

  const toggleSection = (section: string) => {
    setActiveSection(prev => prev === section ? null : section);
    // if the previos state wasnt the section id then itll be now
    // if the previous state was the section (probalay due to clicking twice on the same section the section will update to null meaning itll close the section)
  };

  const sections = [
    {
      id: 'about',
      title: 'About Me',
      content: `I started my backend development journey with Express.js because it felt simpler for beginners—like I was at the time. At the same time, I challenged myself by using JavaFX for the frontend, even though it wasn’t the easiest choice compared to frameworks like React or simple fetch-based UIs. But that decision helped me understand data structures better and feel more comfortable using Gradle as a build tool, while also becoming more familiar with Maven and XML-based scripts.

      That experience led me to take a more advanced route by exploring Java as a backend language with Spring Boot. I learned from my first project—a dating app built with a TCP server, Express backend, and JavaFX frontend packaged as an executable JAR, all running in Docker and automated through Jenkins. The project worked, but the code lacked a readable structure or proper MVC approach. Still, it was my first real project, and I made it happen.

      Now, I’m focusing on mastering Spring Boot using the MVC design pattern and learning React with the same mindset. I believe I have a lot to offer. I'm still working on organizing my code better, but taking risks to build something big is definitely my vibe. With almost 2 years of experience, I feel like I’ve come a long way, and I keep pushing forward.

      I'm currently finished college and open to opportunities—I’m always ready to learn and grow.`

    },
    {
      id: 'education',
      title: 'Education',
      content: `Diploma in Computer Science in ort rehovot (2025)`,
      frameworks: ["React", "Docker", "Jenkins",  "Spring boot(java)","Mongodb", "Express-js", "Postgresql","Gradle","Maven"],
      langauges:["C", "Java", "Java/TypeScript", "Html-css", "Xml","Python"]
      

      
      
    },

    {
      id: 'projects',
      title: 'Projects',
      content: 'Link To My Projects',
      projects:[
        {
          name:'CV - Resume (Current page)',
          url:`${details.github_cv}`,
          description:(
            <p style={{margin: 0}}>I do count this as a project or at the very least spa application built with react + TS <br /> repo for this resume/cv is private and meant to be seen only by companies or individuals i desired to send it to </p>
          )

        }
        ,
        {
          name:'Dating App',
          url: `${details.github_dating_app}`,
          description:"Full-stack dating application with JavaFX frontend and Express js as a backend with tcp server for real time actions and messages and mongodb as a database, exe and source codes releases with jenkins and local enviorments with docker(avg dev-ops knowledge) "
        }
      ]
    }
  ];

  return (
    <div className="App">
     
      <header className="App-header">
        <div className="header-content">
          <h1 className="title">{details.firstname}'s CV  </h1>
          <div className="personal-info">
            <h3>Name: {`${details.firstname}(${details.firstname_hebrew})`}</h3>
            <h4>Phone Number: { details.phonenumber }</h4>
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
              <div className={`projectDedicatedSection ${activeSection === section.id && section.id === 'projects' ? 'open': ''} `}>
                 {section.id === 'projects' && section.projects?.map((project) => (
                <ProjectLink
                  key={project.url}
                  url={project.url}
                  name={project.name}
                  description={project.description}
                />
              ))}


              </div>
              <div className={`eductionDedicatedSection`}>
                {section.id === "education" && (
                  <>
                   <p>langauges i know:</p>
                    <ul>
                      {section.id === "education" && section.langauges?.map((lang: string)=>
                      (
                        <li key={lang}>{lang}</li>
                      ))}
                      </ul>
                      <p>frameworks i know:</p>
                      <ul>
                      {section.id === "education" && section.frameworks?.map((framework)=>(
                        <li key={framework}>{framework}</li>
                      ))}


                    </ul>

                  </>
                )}
               
             

              </div>
            </div>
          </div>
        ))}
      </main>

      <footer>
        <div className="container">
          <h4>All rights reserved to {`${details.firstname} ${details.lastname}`}©</h4>
          <div className="icons">
             {/* @ts-ignore */}
            <FaGithub style={{cursor: 'pointer'}} onClick={GithubLink}/>
             {/* @ts-ignore */}
            <FaLinkedin style={{cursor: 'pointer'}} onClick={linkdinLink}/>
            
          </div>
          <button onClick={pdfAction} className="export-button">PDF Download</button>
        </div>
      </footer>
      
 
      

    </div>
  );
}

export default App;