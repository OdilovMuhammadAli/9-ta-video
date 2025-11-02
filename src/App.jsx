import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: "",
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
