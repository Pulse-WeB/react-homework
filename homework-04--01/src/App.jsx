import { useState } from "react";
import CitySelector from "./components/CitySelector";
import CityCard from "./components/CityCard";
import "./App.css";
const citiesData = [
  {
    name: "Токио",
    id: 1,
    description:
      "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl:
      "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
    facts: [
      "Токио - самый населенный мегаполис в мире.",
      "Здесь расположена самая высокая башня в Японии - Токийская башня.",
      "В Токио проходят множество культурных событий и фестивалей.",
    ],
  },
  {
    name: "Киото",
    id: 2,
    description:
      "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
    imageUrl:
      "https://cdn.getyourguide.com/image/format=auto%2Cfit=cover%2Cgravity=auto%2Cquality=60/dam/sorasak-_UIN-pFfJ7c-unsplash-LOWRES.jpg",
    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",
      "Этот город был столицей Японии более тысячи лет.",
    ],
  },
  {
    name: "Осака",
    id: 3,
    description:
      "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
    imageUrl:
      "https://content.r9cdn.net/rimg/dimg/45/5f/5788029f-city-25901-16737226b47.jpg?width=1366&height=768&crop=true",
    facts: [
      "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
      "Город является кулинарной столицей Японии.",
    ],
  },
  {
    name: "Хоккайдо",
    id: 4,
    description:
      "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBhKjU4lPNU42q-9ZMBum-Aka-qy3v3Um9bu_YaeSpDPpMhkbpuYZdyHym&s=10",
    facts: [
      "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",
      "Летом остров привлекает туристов своими цветущими лавандовыми полями.",
    ],
  },
  {
    name: "Нагоя",
    id: 5,
    description:
      "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_8Yctbwr9B8rvvlbz5FxWyjppqqe3zRFhrs-Om-LMg&s=10",
    facts: [
      "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",
      "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше.",
    ],
  },
];
function App() {
  const [cityRender, setCityRender] = useState(citiesData[0]);

  function renderCity(selectedCity) {
    setCityRender(selectedCity);
  }
  return (
    <>
      <CitySelector renderCity={renderCity} citiesData={citiesData} />
      <CityCard city={cityRender} />
    </>
  );
}

export default App;
