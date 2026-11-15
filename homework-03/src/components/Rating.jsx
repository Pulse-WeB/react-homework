import { useState } from "react";

function Rating() {
  const ratingList = [
    "https://www.realclipart.com/png/middle/67-676995_5-star-rating-png.png",
    "https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png",
    "https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png",
    "https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png",
  ];

  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="rating-card">
      <h1>Оцените наш сервис</h1>
      <p className="rating-description">
        Насколько вы довольны качеством обслуживания?
      </p>

      <div className="rating-image">
        <img src={ratingList[ratingValue]} alt="Rating" />
      </div>

      <div className="rating-buttons">
        <button onClick={() => setRatingValue(0)}>Отлично</button>
        <button onClick={() => setRatingValue(1)}>Хорошо</button>
        <button onClick={() => setRatingValue(2)}>Приемлемо</button>
        <button onClick={() => setRatingValue(3)}>Плохо</button>
      </div>
    </div>
  );
}

export default Rating;
