import styles from "./categories.module.css";
import financy from "../../assets/images/icons/financy.svg";
import perevozki from "../../assets/images/icons/perevozki.svg";
import design from "../../assets/images/icons/design.svg";
import restaurants from "../../assets/images/icons/restaurants.svg";
import medicine from "../../assets/images/icons/medicine.svg";
import multimedia from "../../assets/images/icons/multimedia.svg";
import support from "../../assets/images/icons/support.svg";
import menegment from "../../assets/images/icons/menegment.svg";
import sales from "../../assets/images/icons/sales.svg";
import arrow from "../../assets/images/icons/arrow.svg";

const categoriesList = [
  {
    id: 1,
    name: "Финансы",
    icon: financy,
    alt: "financy",
  },
  {
    id: 2,
    name: "Грузоперевозки",
    icon: perevozki,
    alt: "perevozki",
  },
  {
    id: 3,
    name: "Дизайн",
    icon: design,
    alt: "design",
  },
  {
    id: 4,
    name: "Ресторанный бизнес",
    icon: restaurants,
    alt: "restaurants",
  },
  {
    id: 5,
    name: "Медицина",
    icon: medicine,
    alt: "medicine",
  },
  {
    id: 6,
    name: "Мультимедиа",
    icon: multimedia,
    alt: "multimedia",
  },
  {
    id: 7,
    name: "Служба поддержки",
    icon: support,
    alt: "support",
  },
  {
    id: 8,
    name: "Менеджмент",
    icon: menegment,
    alt: "menegment",
  },
  {
    id: 9,
    name: "Продажи",
    icon: sales,
    alt: "sales",
  },
];
function Categories() {
  return (
    <section className={styles.categories}>
      <div className="container">
        <div className={styles.wrapper}>
          <h3>
            Работа <br />
            по категориям
          </h3>
          <div className={styles.categoryGrid}>
            {categoriesList.map((item) => {
              return (
                <div className={styles.categoryItem} key={item.id}>
                  <img src={item.icon} alt={item.alt} />
                  <h4>{item.name}</h4>
                </div>
              );
            })}
            <div className={styles.moreCategory}>
              <img src={arrow} alt="arrow" />
              <h4>Больше категорий</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Categories;
