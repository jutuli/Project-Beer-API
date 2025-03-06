import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

interface Beer {
  image_url: string;
  name: string;
  tagline: string;
  first_brewed: string;
  attenuation_level: number;
  description: string;
  contributed_by: string;
}

interface BeerDetailViewProps {
  fetchUrl: string; // URL zum Abrufen der Bierdaten
}

const BeerDetailView: React.FC<BeerDetailViewProps> = ({ fetchUrl }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [beer, setBeers] = useState<Beer | null>(null);

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((response) => setBeers(response.data))
      .catch((error) => console.error(error));
  }, [fetchUrl]);
  

  if (!beer) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      

      {/* Bierdetails */}
      <div className="flex flex-col items-center">
        {/* Bild */}
        <img
          src={beer.image_url}
          alt={beer.name}
          className="h-80 object-contain mb-4"
        />

        <div className="text-left w-[60%]">

          {/* Name und Tagline */}
          <h1 className="text-6xl font-bold text-gray-800 mb-2">{beer.name}</h1>
          <p className="text-amber-300 font-extrabold text-xl mb-4">
            {beer.tagline}
          </p>

          {/* Zusätzliche Details */}
          <div className="text-gray-400 text-sm mb-4">
            <p>
              <span className="font-bold">First brewed:</span> {beer.first_brewed}
            </p>
            <p>
              <span className="font-bold">Attenuation level:</span>{" "}
              {beer.attenuation_level}
            </p>
          </div>

          {/* Beschreibung */}
          <p className="text-gray-700">{beer.description}</p>

          {/* Zurück-Button */}
          <button
            onClick={() => navigate(-1)}
            className="w-12 h-12 bg-amber-300 text-white rounded-full flex items-center justify-center shadow mb-30 mt-6 hover:bg-amber-300"
          >
            <span className="text-4xl">&larr;</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default BeerDetailView;
