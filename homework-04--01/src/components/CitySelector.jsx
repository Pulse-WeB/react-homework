function CitySelector({ citiesData, renderCity }) {
  function handleSelect(event) {
    const selectedCity = citiesData.find((item) => {
      return item.name === event.target.value;
    });
    renderCity(selectedCity);
  }
  return (
    <form>
      <select onChange={handleSelect} name="citys" id="citys">
        {citiesData.map((city) => {
          return (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          );
        })}
      </select>
    </form>
  );
}
export default CitySelector;
