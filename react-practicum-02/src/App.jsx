import "./App.css";
import TrainRoutesList from "./components/TrainRoutes/TrainRoutesList";
function App() {
  const trainRoutes = [
    {
      id: 1,
      trainName: "ICE  ICE 847",
      departureStation: "Berlin Hbf",
      arrivalStation: "Hamburg Hbf",
      departureTime: "08:30",
      arrivalTime: "10:15",
      price: 45,
    },
    {
      id: 2,
      trainName: "ICE 692",
      departureStation: "Munich Hbf",
      arrivalStation: "Frankfurt Hbf",
      departureTime: "09:00",
      arrivalTime: "12:20",
      price: 65,
    },
    {
      id: 3,
      trainName: "RE 1",
      departureStation: "Brandenburg Hbf",
      arrivalStation: "Berlin Hbf",
      departureTime: "10:15",
      arrivalTime: "11:05",
      price: 18,
    },
    {
      id: 4,
      trainName: "ICE 742",
      departureStation: "Cologne Hbf",
      arrivalStation: "Düsseldorf Hbf",
      departureTime: "13:40",
      arrivalTime: "14:10",
      price: 22,
    },
    {
      id: 5,
      trainName: "IC 2045",
      departureStation: "Dresden Hbf",
      arrivalStation: "Leipzig Hbf",
      departureTime: "16:20",
      arrivalTime: "17:35",
      price: 29,
    },
  ];
  return (
    <>
      <TrainRoutesList trainRoutes={trainRoutes} />
    </>
  );
}

export default App;
