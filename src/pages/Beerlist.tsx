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
    <div className="max-w-4xl mx-auto p-4">
      {beers.map((beer) => (
        <div key={beer._id} className="flex items-center py-6 border-b last:border-b-0">
          {/* Bild */}
          <img
            src={beer.image_url}
            alt={beer.name}
            className="h-32 w-16 object-contain mr-6"
          />

          {/* Textbereich */}
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-800">{beer.name}</h2>
            <p className="text-yellow-600 font-semibold">{beer.tagline}</p>
            <p className="text-gray-500 text-sm mb-2">
              Created by: {beer.contributed_by.split("<")[0]}
            </p>
            <p className="text-gray-700 text-xs uppercase font-bold">Keg Only</p>
          </div>

          {/* Details Button */}
          <Link
            to={`/beers/${beer._id}`}
            className="px-6 py-2 bg-amber-400 text-white rounded-full shadow hover:bg-amber-500"
          >
            Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BeerList;
