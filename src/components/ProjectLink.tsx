// Add this to your components folder (e.g., src/components/ProjectLink.tsx)
import { FaGithub } from "react-icons/fa";
import '../styles/ProjectLink.css'; // We'll create this next
import { JSX } from "react";

interface ProjectLinkProps {
  url: string;
  name: string;
  description: string | JSX.Element;
 
}

const ProjectLink = ({ url, name, description }: ProjectLinkProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="project-link"
    >
      <div className="link-content">
         {/* @ts-ignore */}
        <FaGithub className="github-icon" />
        <span className="project-name">{name}</span>
      </div>
      <div className="project-description">{description}</div>
    </a>
  );
};

export default ProjectLink;