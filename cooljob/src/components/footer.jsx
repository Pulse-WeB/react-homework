import styles from "./footer.module.css";
import line from "../assets/images/icons/footer-line.svg";
import linkedin from "../assets/images/icons/footer-linkedin.svg";
import google from "../assets/images/icons/footer-google.svg";
import twitter from "../assets/images/icons/footer-twitter.svg";
import facebook from "../assets/images/icons/footer-facebook.svg";

const cities = [
  { id: 1, name: "Осака" },
  { id: 2, name: "Коясан" },
  { id: 3, name: "Токио" },
  { id: 4, name: "Хаконэ" },
  { id: 5, name: "Наэба" },
  { id: 6, name: "Томаму" },
  { id: 7, name: "Йокогама" },
  { id: 8, name: "Нагоя" },
  { id: 9, name: "Саппоро" },
  { id: 10, name: "Кобе" },
];

const socials = [
  { id: 1, name: "LinkedIn", icon: linkedin },
  { id: 2, name: "Google", icon: google },
  { id: 3, name: "Twitter", icon: twitter },
  { id: 4, name: "Facebook", icon: facebook },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.title}>Популярные города</p>
        <nav className={styles.cities}>
          {cities.map((city) => {
            return (
              <a href="#" key={city.id}>
                {city.name}
              </a>
            );
          })}
        </nav>
        <img className={styles.line} src={line} alt="" />
        <div className={styles.bottom}>
          <p className={styles.logo}>Cooljob</p>
          <div className={styles.socials}>
            {socials.map((item) => {
              return (
                <a href="#" key={item.id}>
                  <img src={item.icon} alt={item.name} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
