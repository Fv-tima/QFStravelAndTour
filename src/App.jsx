import {createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Package } from "./pages";
import { Footer } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/package",
    element: <Package />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;

