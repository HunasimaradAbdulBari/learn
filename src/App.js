import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-content">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Jabbu</h1>
          <p className="App-description">
            A modern React navigation app with beautiful design and smooth animations.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        
        <div className="feature-cards">
          <div className="feature-card">
            <h3>🚀 Fast Navigation</h3>
            <p>Lightning-fast navigation with smooth transitions and modern UI components.</p>
          </div>
          <div className="feature-card">
            <h3>📱 Responsive Design</h3>
            <p>Fully responsive design that works perfectly on all devices and screen sizes.</p>
          </div>
          <div className="feature-card">
            <h3>🎨 Modern UI</h3>
            <p>Beautiful modern interface with gradient backgrounds and glass-morphism effects.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
