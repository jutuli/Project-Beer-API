import BeerDetailView from "./BeerDetailView";

const RandomBeer: React.FC = () => {
  const fetchUrl = "https://ih-beers-api2.herokuapp.com/beers/random";

  return <BeerDetailView fetchUrl={fetchUrl} />;
};

export default RandomBeer;
