import React from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Destinationpage from "./pages/Destinationpage";
import Crewpage from "./pages/Crewpage";
import TechnologyPage from "./pages/TechnologyPage";
import Navbar from "./components/Navbar";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Homepage navbar={<Navbar />} />} />
        <Route
          path="/destination"
          element={<Destinationpage navbar={<Navbar />} />}
        />
        <Route path="/crew" element={<Crewpage navbar={<Navbar />} />} />
        <Route
          path="/technology"
          element={<TechnologyPage navbar={<Navbar />} />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
