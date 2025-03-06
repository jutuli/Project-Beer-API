import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import BeerDetail from "./pages/Beerdetail";
import BeerList from "./pages/Beerlist";
import RandomBeer from "./pages/RandomBeer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/beers" element={<BeerList />} />
        <Route path="/beers/:id" element={<BeerDetail />} />
        <Route path="/beers/random-beer" element={<RandomBeer />} />
      </Route>,
    ),
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
