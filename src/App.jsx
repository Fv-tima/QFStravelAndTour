import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, About, Package, Contact } from "./pages";
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
  {
    path: "/contact",
    element: <Contact />,
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

