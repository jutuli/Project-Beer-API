import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import BeerList from "./pages/Beerlist";
import BeerDetail from "./pages/Beerdetail";
import RandomBeer from "./pages/RandomBeer";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/beers" element={<BeerList />} />
          <Route path="/beers/:beerId" element={<BeerDetail />} />
          <Route path="/random-beer" element={<RandomBeer />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
