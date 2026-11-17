function CityCard({ city }) {
  return (
    <div>
      <img src={city.imageUrl} alt="city-image" />
      <p>Город: {city.name}</p>
      <p>Описание: {city.description}</p>
      <ul>
        Факты:{" "}
        {city.facts.map((factsItem, index) => {
          return <li key={index}>{factsItem}</li>;
        })}
      </ul>
    </div>
  );
}
export default CityCard;
