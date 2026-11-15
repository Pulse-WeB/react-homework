function TrainRoute({
  trainName,
  departureStation,
  arrivalStation,
  departureTime,
  arrivalTime,
  price,
}) {
  return (
    <div>
      <h3>Name: {trainName}</h3>
      <p>From: {departureStation}</p>
      <p>To: {arrivalStation}</p>
      <p>Departure Time: {departureTime}</p>
      <p>Arrival Time: {arrivalTime}</p>
      <p>Price: {price} €</p>
    </div>
  );
}
export default TrainRoute;
