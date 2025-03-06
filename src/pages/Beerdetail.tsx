import { useParams } from "react-router-dom";
import BeerDetailView from "./BeerDetailView";

const BeerDetail: React.FC = () => {
  const { beerId } = useParams<{ beerId: string }>();
  const fetchUrl = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

  return <BeerDetailView fetchUrl={fetchUrl} />;
};

export default BeerDetail;
