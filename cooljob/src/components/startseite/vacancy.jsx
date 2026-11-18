import styles from "./vacancy.module.css";
import locationIcon from "../../assets/images/icons/vacancy-location.svg";
import dotFinance from "../../assets/images/icons/dot-finance.svg";
import dotSales from "../../assets/images/icons/dot-sales.svg";
import dotSupport from "../../assets/images/icons/dot-support.svg";
import dotMultimedia from "../../assets/images/icons/dot-multimedia.svg";
import dotDesign from "../../assets/images/icons/dot-design.svg";
import dotCargo from "../../assets/images/icons/dot-cargo.svg";
import sony from "../../assets/images/sony.svg";
import facebook from "../../assets/images/facebook.svg";
import cocaCola from "../../assets/images/coca-cola.svg";

const vacancies = [
  {
    id: 1,
    category: "Финансы",
    dot: dotFinance,
    title: "Менеджер по управлению финансами в крупной компании",
    location: "Осака, Япония",
    logo: sony,
    logoClass: "logoSony",
    company: "Sony, 3 дня назад",
  },
  {
    id: 2,
    category: "Продажи",
    dot: dotSales,
    title: "Специалист по продажам",
    location: "Коясан, Япония",
    logo: facebook,
    logoClass: "logoFacebook",
    company: "Facebook, 7 дней назад",
  },
  {
    id: 3,
    category: "Служба поддержки",
    dot: dotSupport,
    title: "Оператор колл центра",
    location: "Томаму, Япония",
    logo: cocaCola,
    logoClass: "logoCola",
    company: "CocaCola, 1 день назад",
  },
  {
    id: 4,
    category: "Мультимедиа",
    dot: dotMultimedia,
    title: "Системный администратор",
    location: "Токио, Япония",
    logo: sony,
    logoClass: "logoSony",
    company: "Sony, 3 дня назад",
  },
  {
    id: 5,
    category: "Дизайн",
    dot: dotDesign,
    title: "Дизайнер интерьера в профессиональную студию в центре города",
    location: "Йокогама, Япония",
    logo: facebook,
    logoClass: "logoFacebook",
    company: "Facebook, 7 дней назад",
  },
  {
    id: 6,
    category: "Грузоперевозки",
    dot: dotCargo,
    title: "Водитель на дальние дистанции",
    location: "Кобе. Япония",
    logo: cocaCola,
    logoClass: "logoCola",
    company: "CocaCola, 1 день назад",
  },
];

function Vacancy() {
  return (
    <section className={styles.vacancy}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <h3>Новые вакансии</h3>
            <p>Найди работу своей мечты прямо сейчас</p>
          </div>
          <div className={styles.grid}>
            {vacancies.map((item) => {
              return (
                <div className={styles.card} key={item.id}>
                  <div className={styles.category}>
                    <img src={item.dot} alt="" />
                    <p>{item.category}</p>
                  </div>
                  <div className={styles.body}>
                    <h4>{item.title}</h4>
                    <div className={styles.location}>
                      <img src={locationIcon} alt="" />
                      <p>{item.location}</p>
                    </div>
                  </div>
                  <div className={styles.company}>
                    <img
                      src={item.logo}
                      alt=""
                      className={styles[item.logoClass]}
                    />
                    <p>{item.company}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.more}>
            <button type="button">Все вакансии</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vacancy;
