import { useParams } from "react-router-dom";
import BeerDetailView from "./BeerDetailView";

const BeerDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const fetchUrl = `https://ih-beers-api2.herokuapp.com/beers/${id}`;

  return <BeerDetailView fetchUrl={fetchUrl} />;
};

export default BeerDetail;
