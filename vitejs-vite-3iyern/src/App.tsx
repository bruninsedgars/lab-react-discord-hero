import './App.css';
import menuIcon from './assets/menu-icon.png';
import discordLogo from './assets/discord-logo-white.png';
import discordBackground from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
        <img src={discordLogo} alt="Discord Logo" className="logo" />
      </header>
      
      <main>
        <section className="hero">
          <h1>Imagine a place...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
          </p>
          <div className="buttons">
            <button>Download for Mac</button>
            <button>Open Discord in your browser</button>
          </div>
          <img src={discordBackground} alt="Discord Characters" className="background-image" />
        </section>
      </main>
    </div>
  );
}

export default App;

