import Socials from "./socials";
import logo from "../assets/spotify-logo.svg";

function Spotify() {
  return (
    <main className="spotify">
      <img
        className="spotify__logo"
        src={logo}
        alt="Spotify"
        width="139.564"
        height="44.3632"
      />
      <div className="spotify__content">
        <h1 className="spotify__title">LIFE IS WASTED ON THE LIVING</h1>
        <p className="spotify__signin">
          <span>Sign in</span>
          <span>with</span>
        </p>
        <Socials />
      </div>
    </main>
  );
}

export default Spotify;
