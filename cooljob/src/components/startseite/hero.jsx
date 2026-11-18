import styles from "./hero.module.css";
import SearchForm from "./searchForm";
function Hero() {
  return (
    <main className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1>
            Один клик <br />и работа в кармане
          </h1>
          <SearchForm />
        </div>
      </div>
    </main>
  );
}
export default Hero;
