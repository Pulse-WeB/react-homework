import logo from "../assets/images/Cooljob.png";
import styles from "./header.module.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.headerLeft}>
            <img src={logo} alt="logo" />
            <nav>
              <a href="#">Поиск работы</a>
              <a href="#">Поиск стартапов</a>
            </nav>
          </div>
          <div className={styles.headerRight}>
            <a href="#">Регистрация</a>
            <button>Вход</button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
