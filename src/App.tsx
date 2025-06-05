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

  const graphicsData: GraphicItem[] = [
    {
      id: 1,
      src: graphic1,
      title: "Álvarez - Football Poster",
      description: "A dynamic sports poster featuring Julian Álvarez with geometric design elements, vibrant color schemes, and modern typography. Created using advanced photo manipulation techniques in Adobe Photoshop and layout design in Adobe Illustrator, showcasing mastery of contemporary design principles."
    },
    {
      id: 2,
      src: graphic2,
      title: "Aldi - Retro Portrait",
      description: "A stylized portrait design with retro-futuristic elements, featuring neon pink color palettes and geometric patterns. This piece showcases mastery of Adobe Photoshop's digital art techniques, advanced layer blending, and nostalgic design aesthetics inspired by 80s visual culture."
    },
    {
      id: 3,
      src: graphic3,
      title: "DAMN - Mixed Media Art",
      description: "An experimental mixed media artwork combining photography, typography, and digital effects. Features complex layering techniques using Adobe After Effects for motion elements and Adobe Photoshop for compositing, with urban aesthetic elements and a grunge-inspired color palette."
    },
    {
      id: 4,
      src: graphic4,
      title: "DAMN - Album Cover Design",
      description: "A bold album cover design featuring minimalist typography and striking visual composition. Utilizes modern design principles with a focus on typography hierarchy in Adobe Illustrator and color theory, demonstrating professional music industry design standards."
    },
    {
      id: 5,
      src: graphic5,
      title: "JOKER - Artistic Portrait",
      description: "A creative portrait manipulation featuring vibrant color grading and artistic effects. Demonstrates advanced photo editing skills in Adobe Photoshop including masking, color correction, creative interpretation of character design, and cinematic lighting techniques."
    },
    {
      id: 6,
      src: graphic6,
      title: "Mat Riley - Sports Design",
      description: "A dynamic sports-themed design featuring bold typography and energetic composition. Created for athletic branding with focus on movement and power through visual elements, utilizing Adobe Illustrator for vector graphics and Adobe Photoshop for photo integration."
    },
    {
      id: 7,
      src: graphic7,
      title: "Ray-Ban - Product Advertisement",
      description: "A sleek product advertisement design for Ray-Ban eyewear featuring premium styling and professional layout. Emphasizes product photography enhancement in Adobe Photoshop and brand messaging integration using Adobe InDesign layout principles."
    },
    {
      id: 8,
      src: graphic8,
      title: "Prince Pranav - Fantasy Art",
      description: "An epic fantasy-themed artwork featuring dramatic lighting, mystical elements, and cinematic composition. Showcases digital painting techniques in Adobe Photoshop, advanced compositing in Adobe After Effects, and imaginative storytelling through visuals."
    },
    {
      id: 9,
      src: graphic9,
      title: "Conceptual Art Piece",
      description: "A thought-provoking conceptual artwork exploring themes of control and freedom through visual metaphors. Features surrealistic elements created in Adobe Photoshop and symbolic imagery with masterful composition using Adobe Creative Suite workflows."
    },
    {
      id: 10,
      src: graphic10,
      title: "Casio - Watch Advertisement",
      description: "A sophisticated product advertisement for Casio watches featuring clean design, professional typography, and premium brand positioning. Demonstrates commercial design expertise using Adobe InDesign for layout and Adobe Photoshop for product enhancement."
    },
    {
      id: 11,
      src: graphic11,
      title: "AKASH - Personal Branding",
      description: "A personal branding design featuring industrial aesthetics and urban photography. Combines lifestyle photography enhancement in Adobe Lightroom with modern graphic design elements in Adobe Illustrator for authentic brand representation."
    },
    {
      id: 12,
      src: graphic12,
      title: "Harry Potter - Fan Art",
      description: "A magical fan art piece inspired by the Harry Potter universe, featuring mystical elements, atmospheric lighting, and creative interpretation. Created using advanced digital painting techniques in Adobe Photoshop with magical effects enhanced in Adobe After Effects."
    }
  ];

  const codingProjects: Project[] = [
    {
      title: "NRVE NEST",
      description: "A comprehensive mental health application designed to provide users with tools for mindfulness, therapy scheduling, mood tracking, and wellness resources. Features include guided meditation, journaling, and professional therapist connections with real-time chat functionality.",
      status: "completed",
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js", "Socket.io", "Redux", "Firebase Authentication"],
      link: "#",
      github: "#"
    },
    {
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website showcasing graphic design work and development projects. Features interactive elements, smooth animations, and optimized performance across all devices with advanced CSS animations and TypeScript integration.",
      status: "completed",
      technologies: ["React.js", "TypeScript", "CSS3", "JavaScript", "Responsive Design", "Animation Libraries"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather App",
      description: "A clean and intuitive weather application providing real-time weather data, forecasts, and location-based services. Features beautiful UI design with dynamic backgrounds based on weather conditions and interactive data visualizations.",
      status: "completed",
      technologies: ["React.js", "OpenWeatherMap API", "Geolocation API", "CSS3", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      title: "AI Study Focus Assistant",
      description: "An intelligent study companion application that uses AI to optimize learning sessions, track focus patterns, and provide personalized study recommendations. Features pomodoro techniques, distraction blocking, and machine learning-based productivity insights.",
      status: "progress",
      technologies: ["Python", "TensorFlow", "React.js", "Machine Learning", "Natural Language Processing", "SQLite"],
      link: "#",
      github: "#"
    }
  ];

  // Video editing projects data
  const videoProjects: VideoProject[] = [
    {
      title: "Brand Commercial Production",
      description: "High-impact commercial videos for various brands featuring dynamic editing, professional color grading in DaVinci Resolve, and motion graphics created in Adobe After Effects. Specialized in creating compelling narratives for product launches and brand storytelling.",
      technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Graphics", "Color Grading"]
    },
    {
      title: "Music Video Production",
      description: "Creative music videos with synchronized editing, visual effects, and artistic storytelling elements. Expertise in beat-matching, creative transitions, and visual effects that enhance the musical experience while maintaining artistic vision.",
      technologies: ["Premiere Pro", "After Effects", "Cinema 4D", "Color Correction", "Audio Synchronization"]
    },
    {
      title: "Social Media Content Creation",
      description: "Engaging short-form content optimized for various social media platforms with trending editing styles. Specialized in creating viral-worthy content with quick cuts, dynamic animations, and platform-specific optimization for maximum engagement.",
      technologies: ["Premiere Pro", "After Effects", "Photoshop", "Social Media Optimization", "Motion Graphics"]
    },
    {
      title: "Documentary Post-Production",
      description: "Professional documentary editing featuring interview cuts, B-roll integration, and narrative flow construction. Expertise in storytelling through editing, audio enhancement, and creating compelling narratives from raw footage.",
      technologies: ["Avid Media Composer", "Premiere Pro", "Audio Enhancement", "Narrative Structure", "Color Correction"]
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
      {/* Background Elements */}
      <div className="background-particles"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

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
            <h1 className="side-title left">DEVELOPER</h1>
          </div>

          <div className="center-image-container">
            <h2 className="name-above">PARTHAV</h2>
            <img src={portfolioImage} alt="Portfolio" className="portfolio-image" />
            <h2 className="name-below">ELANGOVAN</h2>
          </div>

          <div className="right-side">
            <h1 className="side-title right">CREATIVE DESIGNER</h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section" id="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Me</h2>
            <p className="about-description">
              I'm a Computer Science student at UT Dallas with a lifelong passion for creative design that began in my early years. 
              From a young age, I was captivated by the power of visual storytelling and spent countless hours creating personal projects, 
              crafting short films, and designing posters that brought my imagination to life.
            </p>
            <p className="about-description">
              As my skills evolved, I began working with clients, helping them transform their visions into compelling visual narratives. 
              My journey naturally expanded into web development as I discovered how to combine my creative expertise with technical 
              prowess, creating digital experiences that seamlessly merge artistic vision with functional design.
            </p>
            <p className="about-description">
              Today, I bridge the gap between stunning visual design and robust technical implementation, bringing a unique perspective 
              to every project where form meets function in perfect harmony.
            </p>
            
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Adobe Creative Suite Mastery</h4>
                <p>Adobe Photoshop, Illustrator, After Effects, Premiere Pro, InDesign, Lightroom - Advanced photo manipulation, vector graphics, motion graphics, video editing, layout design, and color correction</p>
              </div>
              <div className="skill-category">
                <h4>Development Skills</h4>
                <p>React.js, Node.js, TypeScript, JavaScript, HTML/CSS, Python, MongoDB, Express.js, Database Management, API Integration</p>
              </div>
              <div className="skill-category">
                <h4>Creative Production Workflow</h4>
                <p>Digital Asset Management, Brand Identity Systems, Print Production, Video Post-Production, Motion Graphics Animation, Creative Direction, Client Collaboration</p>
              </div>
              <div className="skill-category">
                <h4>Technical Implementation</h4>
                <p>Full-Stack Development, Responsive Design, Performance Optimization, Version Control, UI/UX Design, Database Architecture, Cloud Services</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Graphic Designs & Video Edits Completed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years in Adobe Creative Suite</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3+</span>
              <span className="stat-label">Years in Web Development</span>
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
                <p className="see-more-text">This redirects you to a google drive folder with more designs :)</p>
                <a 
                  href="https://drive.google.com/drive/folders/1q9_eaQ1_nyNBBqxcscll6QLWek2Ujxri?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="see-more-btn"
                >
                  See More Designs
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
                <p className="see-more-text">This redirects you to my github profile :)</p>
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="see-more-btn"
                >
                  View GitHub
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
                <p className="see-more-text">This redirects you to a google drive folder with video projects :)</p>
                <a 
                  href="https://drive.google.com/drive/folders/your-video-folder-id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="see-more-btn"
                >
                  See More Videos
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
          Ready to bring your vision to life? Whether you need stunning visuals, professional video content, 
          or robust web development, I'm here to help transform your ideas into reality.
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