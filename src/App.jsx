import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, About, Package } from "./pages";
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
  {
    path: "/about",
    element: <About />,
  },

]);

function App () {
  return (
    <div>
      <RouterProvider router={ router } />
      <Footer />
    </div>
  );
}

export default App;

