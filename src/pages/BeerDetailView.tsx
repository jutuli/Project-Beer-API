import { useEffect, useState } from "react";
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
  const [beer, setBeer] = useState<Beer | null>(null);

  useEffect(() => {
    axios
      .get(fetchUrl)
      .then((response) => setBeer(response.data))
      .catch((error) => console.error(error));
  }, [fetchUrl]);

  if (!beer) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <img src={beer.image_url} alt={beer.name} className="w-full h-auto mb-4" />
      <h1 className="text-3xl font-bold">{beer.name}</h1>
      <p>{beer.tagline}</p>
      <p>First brewed: {beer.first_brewed}</p>
      <p>Attenuation level: {beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>Created by: {beer.contributed_by}</p>
    </div>
  );
};

export default BeerDetailView;
