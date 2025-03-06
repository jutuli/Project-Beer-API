import all_beers from "../assets/img/all_beers.png";
import random_beer from "../assets/img/random_beer.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="mx-20 my-10 flex flex-col items-center justify-center gap-20">
        <div className="flex w-full flex-col">
          <Link to="/beers">
            <img
              src={all_beers}
              alt="Assortion of Beers"
              className="w-full cursor-pointer"
            />
            <h2 className="bg-amber-400 px-6 py-4 text-5xl font-bold text-white">
              All Beers
            </h2>
          </Link>
          <p className="py-4 text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
            eleifend vitae varius venenatis.
          </p>
        </div>
        <div className="w-full">
          <Link to={`/beers/random-beer`}>
            <img
              src={random_beer}
              alt="Random Beer"
              className="w-full cursor-pointer"
            />
            <h2 className="bg-amber-400 px-6 py-4 text-5xl font-bold text-white">
              Random Beer
            </h2>
          </Link>
          <p className="py-4 text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
            eleifend vitae varius venenatis.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
