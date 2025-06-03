
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Black border container */}
      <div className="page-border">
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-links">
            <a href="#about">ABOUT</a>
            <a href="#portfolio">PORTFOLIO</a>
            <a href="#contact">CONTACT</a>
          </div>
        </nav>

        {/* Main Content */}
        <div className="main-content">
          {/* Left Side - White */}
          <div className="left-side">
            <h1 className="side-title">CODER</h1>
          </div>

          {/* Center Image with Name */}
          <div className="center-image-container">
            <h2 className="name-above">PARTHAV</h2>
            <img 
              src="/src/assets/portfolio.jpg" 
              alt="Portfolio" 
              className="portfolio-image"
            />
            <h2 className="name-below">ELANGOVAN</h2>
          </div>

          {/* Right Side - Green */}
          <div className="right-side">
            <h1 className="side-title">GRAPHIC DESIGNER</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;