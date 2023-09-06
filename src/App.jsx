import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, About } from "./pages";
import { Footer } from "./components";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

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

