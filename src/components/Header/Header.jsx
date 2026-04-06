import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.svg";
import "./Header.css";
function Header({ onAddGarmentClick }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__left">
        <img src={logo} alt="WTWR logo" className="header__logo" />
        <p className="header__place">
          <time className="header__datetime" dateTime={now}>
            {dateStr}
          </time>
          , New York
        </p>
      </div>

      <div className="header__right">
        <button
          className="header__add-clothes-btn"
          onClick={onAddGarmentClick}
          type="button"
        >
          + Add clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
        <img
          src={avatar}
          alt="Terrence Tegegne’s avatar"
          className="header__avatar"
        />
      </div>
    </header>
  );
}
export default Header;
