import React, { useState } from 'react';
import './App.css';
import portfolioImage from './assets/portfolio.jpg';

// Import all graphic design images
import graphic1 from './assets/1.jpg';
import graphic2 from './assets/2.jpg';
import graphic3 from './assets/3.jpg';
import graphic4 from './assets/4.jpg';
import graphic5 from './assets/5.jpg';
import graphic6 from './assets/6.jpg';
import graphic7 from './assets/7.jpg';
import graphic8 from './assets/8.jpg';
import graphic9 from './assets/9.jpg';
import graphic10 from './assets/10.jpg';
import graphic11 from './assets/11.jpg';
import graphic12 from './assets/12.jpg';

// TypeScript interfaces
interface GraphicItem {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  status: 'completed' | 'progress';
  technologies: string[];
  link: string;
  github: string;
}

interface VideoProject {
  title: string;
  description: string;
  technologies: string[];
}

type SectionType = 'graphics' | 'coding' | 'video';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('graphics');
  const [selectedModal, setSelectedModal] = useState<GraphicItem | null>(null);

  // Graphics data with titles and descriptions
  const graphicsData: GraphicItem[] = [
    {
      id: 1,
      src: graphic1,
      title: "Álvarez - Football Poster",
      description: "A dynamic sports poster featuring Julian Álvarez with geometric design elements, vibrant color schemes, and modern typography. Created using advanced photo manipulation techniques and contemporary design principles."
    },
    {
      id: 2,
      src: graphic2,
      title: "Aldi - Retro Portrait",
      description: "A stylized portrait design with retro-futuristic elements, featuring neon pink color palettes and geometric patterns. This piece showcases mastery of digital art techniques and nostalgic design aesthetics."
    },
    {
      id: 3,
      src: graphic3,
      title: "DAMN - Mixed Media Art",
      description: "An experimental mixed media artwork combining photography, typography, and digital effects. Features complex layering techniques and urban aesthetic elements with a grunge-inspired color palette."
    },
    {
      id: 4,
      src: graphic4,
      title: "DAMN - Album Cover Design",
      description: "A bold album cover design featuring minimalist typography and striking visual composition. Utilizes modern design principles with a focus on typography hierarchy and color theory."
    },
    {
      id: 5,
      src: graphic5,
      title: "JOKER - Artistic Portrait",
      description: "A creative portrait manipulation featuring vibrant color grading and artistic effects. Demonstrates advanced photo editing skills and creative interpretation of character design."
    },
    {
      id: 6,
      src: graphic6,
      title: "Mat Riley - Sports Design",
      description: "A dynamic sports-themed design featuring bold typography and energetic composition. Created for athletic branding with focus on movement and power through visual elements."
    },
    {
      id: 7,
      src: graphic7,
      title: "Ray-Ban - Product Advertisement",
      description: "A sleek product advertisement design for Ray-Ban eyewear featuring premium styling and professional layout. Emphasizes product photography and brand messaging integration."
    },
    {
      id: 8,
      src: graphic8,
      title: "Prince Pranav - Fantasy Art",
      description: "An epic fantasy-themed artwork featuring dramatic lighting, mystical elements, and cinematic composition. Showcases digital painting techniques and imaginative storytelling through visuals."
    },
    {
      id: 9,
      src: graphic9,
      title: "Conceptual Art Piece",
      description: "A thought-provoking conceptual artwork exploring themes of control and freedom through visual metaphors. Features surrealistic elements and symbolic imagery with masterful composition."
    },
    {
      id: 10,
      src: graphic10,
      title: "Casio - Watch Advertisement",
      description: "A sophisticated product advertisement for Casio watches featuring clean design, professional typography, and premium brand positioning. Demonstrates commercial design expertise."
    },
    {
      id: 11,
      src: graphic11,
      title: "AKASH - Personal Branding",
      description: "A personal branding design featuring industrial aesthetics and urban photography. Combines lifestyle photography with modern graphic design elements for authentic brand representation."
    },
    {
      id: 12,
      src: graphic12,
      title: "Harry Potter - Fan Art",
      description: "A magical fan art piece inspired by the Harry Potter universe, featuring mystical elements, atmospheric lighting, and creative interpretation of beloved characters and themes."
    }
  ];

  // Coding projects data
  const codingProjects: Project[] = [
    {
      title: "NRVE NEST",
      description: "A comprehensive mental health application designed to provide users with tools for mindfulness, therapy scheduling, mood tracking, and wellness resources. Features include guided meditation, journaling, and professional therapist connections.",
      status: "completed",
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js", "Socket.io", "Redux", "Firebase Authentication"],
      link: "#",
      github: "#"
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing graphic design work and development projects. Features interactive elements, smooth animations, and optimized performance across all devices.",
      status: "completed",
      technologies: ["React.js", "TypeScript", "CSS3", "JavaScript", "Responsive Design", "Animation Libraries"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather App",
      description: "A clean and intuitive weather application providing real-time weather data, forecasts, and location-based services. Features beautiful UI design with dynamic backgrounds based on weather conditions.",
      status: "completed",
      technologies: ["React.js", "OpenWeatherMap API", "Geolocation API", "CSS3", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      title: "AI Study Focus Assistant",
      description: "An intelligent study companion application that uses AI to optimize learning sessions, track focus patterns, and provide personalized study recommendations. Features pomodoro techniques and distraction blocking.",
      status: "progress",
      technologies: ["Python", "TensorFlow", "React.js", "Machine Learning", "Natural Language Processing", "SQLite"],
      link: "#",
      github: "#"
    }
  ];

  // Video editing projects data
  const videoProjects: VideoProject[] = [
    {
      title: "Brand Commercial",
      description: "High-impact commercial videos for various brands featuring dynamic editing, color grading, and motion graphics.",
      technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics"]
    },
    {
      title: "Music Video Production",
      description: "Creative music videos with synchronized editing, visual effects, and artistic storytelling elements.",
      technologies: ["Premiere Pro", "After Effects", "Cinema 4D", "Color Correction"]
    },
    {
      title: "Social Media Content",
      description: "Engaging short-form content optimized for various social media platforms with trending editing styles.",
      technologies: ["Premiere Pro", "After Effects", "Photoshop", "Social Media Optimization"]
    },
    {
      title: "Documentary Editing",
      description: "Professional documentary post-production featuring interview cuts, B-roll integration, and narrative flow.",
      technologies: ["Avid Media Composer", "Premiere Pro", "Audio Enhancement", "Narrative Structure"]
    }
  ];

  const openModal = (item: GraphicItem): void => {
    setSelectedModal(item);
  };

  const closeModal = (): void => {
    setSelectedModal(null);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  const handleSectionChange = (section: SectionType): void => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="page-border" id="home">
        <div className="main-content">
          <div className="left-side">
            <h1 className="side-title left">CODER</h1>
          </div>

          <div className="center-image-container">
            <h2 className="name-above">PARTHAV</h2>
            <img src={portfolioImage} alt="Portfolio" className="portfolio-image" />
            <h2 className="name-below">ELANGOVAN</h2>
          </div>

          <div className="right-side">
            <h1 className="side-title right">GRAPHIC DESIGNER</h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" id="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Me</h2>
            <p className="about-description">
              I'm a passionate creative professional who bridges the gap between stunning visual design 
              and robust technical implementation. With expertise in both graphic design and full-stack 
              development, I bring a unique perspective to every project, ensuring that form meets function 
              in perfect harmony.
            </p>
            <p className="about-description">
              My journey combines the artistic vision of a designer with the analytical mindset of a developer, 
              allowing me to create digital experiences that are not only visually compelling but also 
              technically sound and user-friendly.
            </p>
            
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Design Skills</h4>
                <p>UI/UX Design, Brand Identity, Typography, Color Theory, Adobe Creative Suite</p>
              </div>
              <div className="skill-category">
                <h4>Development Skills</h4>
                <p>React.js, Node.js, JavaScript, HTML/CSS, Python, Database Management</p>
              </div>
              <div className="skill-category">
                <h4>Creative Process</h4>
                <p>User Research, Wireframing, Prototyping, Design Systems, Responsive Design</p>
              </div>
              <div className="skill-category">
                <h4>Technical Expertise</h4>
                <p>Full-Stack Development, API Integration, Performance Optimization, Version Control</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="portfolio-section" id="portfolio">
        <div className="portfolio-container">
          <h2 className="section-title">My Work</h2>
          
          {/* Portfolio Navigation */}
          <div className="portfolio-nav">
            <div 
              className={`portfolio-nav-item ${activeSection === 'graphics' ? 'active' : ''}`}
              onClick={() => handleSectionChange('graphics')}
            >
              Graphic Design
            </div>
            <div 
              className={`portfolio-nav-item ${activeSection === 'coding' ? 'active' : ''}`}
              onClick={() => handleSectionChange('coding')}
            >
              Coding Projects
            </div>
            <div 
              className={`portfolio-nav-item ${activeSection === 'video' ? 'active' : ''}`}
              onClick={() => handleSectionChange('video')}
            >
              Video Editing
            </div>
          </div>

          {/* Graphics Section */}
          {activeSection === 'graphics' && (
            <div className="portfolio-content active">
              <div className="graphics-grid">
                {graphicsData.map((graphic: GraphicItem) => (
                  <div 
                    key={graphic.id}
                    className="graphic-item"
                    onClick={() => openModal(graphic)}
                  >
                    <img src={graphic.src} alt={graphic.title} />
                  </div>
                ))}
              </div>
              <div className="see-more-container">
                <p className="see-more-text">This redirects you to a google drive folder :)</p>
                <a 
                  href="https://drive.google.com/drive/folders/your-graphics-folder-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="see-more-btn"
                >
                  See More
                </a>
              </div>
            </div>
          )}

          {/* Coding Projects Section */}
          {activeSection === 'coding' && (
            <div className="portfolio-content active">
              <div className="projects-grid">
                {codingProjects.map((project: Project, index: number) => (
                  <div key={index} className="project-card">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href={project.github} className="project-link">GitHub</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="see-more-container">
                <p className="see-more-text">This redirects you to a google drive folder :)</p>
                <a 
                  href="https://drive.google.com/drive/folders/your-coding-folder-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="see-more-btn"
                >
                  See More
                </a>
              </div>
            </div>
          )}

          {/* Video Editing Section */}
          {activeSection === 'video' && (
            <div className="portfolio-content active">
              <div className="projects-grid">
                {videoProjects.map((project: VideoProject, index: number) => (
                  <div key={index} className="project-card">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
                      {project.technologies.map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      <a href="#" className="project-link">View Reel</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="see-more-container">
                <p className="see-more-text">This redirects you to a google drive folder :)</p>
                <a 
                  href="https://drive.google.com/drive/folders/your-video-folder-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="see-more-btn"
                >
                  See More
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section" id="contact">
        <h2>Let's Create Together</h2>
        <p>
          Ready to bring your vision to life? Whether you need stunning visuals or robust development, 
          I'm here to help transform your ideas into reality.
        </p>
        <div className="contact-info">
          <p>
            Email: <span className="contact-detail">asphar057@gmail.com</span>
          </p>
          <p>
            Phone: <span className="contact-detail">214-940-4508</span>
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={handleModalClick}>
            <button 
              className="modal-close" 
              onClick={closeModal}
              type="button"
              aria-label="Close modal"
            >
              ×
            </button>
            <img 
              src={selectedModal.src} 
              alt={selectedModal.title} 
              className="modal-image" 
            />
            <h3 className="modal-title">{selectedModal.title}</h3>
            <p className="modal-description">{selectedModal.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;