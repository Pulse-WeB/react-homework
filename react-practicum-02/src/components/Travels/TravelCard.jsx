import DestinationImage from "./DestinationImage";
import DestinationInfo from "./DestinationInfo";
import DestinationStats from "./DestinationStats";

function TravelCard({ img, img_alt, title, description, popularity, climat }) {
  return (
    <div>
      <DestinationImage img={img} img_alt={img_alt} />
      <DestinationInfo title={title} description={description} />
      <DestinationStats popularity={popularity} climat={climat} />
    </div>
  );
}
export default TravelCard;
