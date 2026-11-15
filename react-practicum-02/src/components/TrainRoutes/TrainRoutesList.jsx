import TrainRoute from "./TrainRoute";
function TrainRoutesList({ trainRoutes }) {
  return (
    <div>
      {trainRoutes.map((route) => {
        return (
          <TrainRoute
            key={route.id}
            trainName={route.trainName}
            departureStation={route.departureStation}
            arrivalStation={route.arrivalStation}
            departureTime={route.departureTime}
            arrivalTime={route.arrivalTime}
            price={route.price}
          />
        );
      })}
    </div>
  );
}
export default TrainRoutesList;
