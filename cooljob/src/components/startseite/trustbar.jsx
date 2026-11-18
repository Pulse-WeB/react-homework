import CocaCola from "../../assets/images/coca-cola.svg";
import Sony from "../../assets/images/sony.svg";
import Microsoft from "../../assets/images/microsoft.svg";
import Facebook from "../../assets/images/facebook.svg";
import Disney from "../../assets/images/disney.svg";
import styles from "./trustbar.module.css";

function TrustBar() {
  const images = [
    {
      id: 1,
      name: "Disney",
      image: Disney,
    },
    {
      id: 2,
      name: "Facebook",
      image: Facebook,
    },
    {
      id: 3,
      name: "Microsoft",
      image: Microsoft,
    },
    {
      id: 4,
      name: "Sony",
      image: Sony,
    },
    {
      id: 5,
      name: "Coca-cola",
      image: CocaCola,
    },
  ];
  return (
    <section className={styles.trustBar}>
      <div className="container">
        <div className={styles.wrapper}>
          <p>Помогаем найти работу:</p>
          <div>
            {images.map((image) => {
              return <img src={image.image} alt={image.name} key={image.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustBar;
