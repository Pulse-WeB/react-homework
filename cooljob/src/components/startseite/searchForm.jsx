import styles from "./searchForm.module.css";
import searchIcon from "../../assets/images/icons/search-icon.svg";
import locationIcon from "../../assets/images/icons/location-icon.svg";

function SearchForm() {
  return (
    <form className={styles.form}>
      <label className={styles.field}>
        <img src={searchIcon} alt="" className={styles.searchIcon} />
        <input type="text" placeholder="Должность или компания" />
      </label>
      <span className={styles.divider} aria-hidden="true" />
      <label className={styles.field}>
        <img src={locationIcon} alt="" className={styles.locationIcon} />
        <input type="text" placeholder="Город. Страна" />
      </label>
      <button type="button" className={styles.submit}>
        Поиск
      </button>
    </form>
  );
}

export default SearchForm;
