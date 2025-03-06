import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Beer {
  _id: string;
  name: string;
  tagline: string;
  image_url: string;
  contributed_by: string;
}

const BeerList: React.FC = () => {
  const [beers, setBeers] = useState<Beer[]>([]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {beers.map((beer) => (
        <div key={beer._id} className="border p-4">
          <img src={beer.image_url} alt={beer.name} className="w-full h-auto mb-4" />
          <h2 className="text-xl font-bold">{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>Created by: {beer.contributed_by}</p>
          <Link to={`/beers/${beer._id}`} className="text-blue-500">Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BeerList;
