import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./features/counterSlice";

// layout
import MainLayout from "./layouts/MainLayout";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <MainLayout>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
          </div>
        </MainLayout>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  // 🔹 RouterProvider orqali routerni ulaymiz
  return <RouterProvider router={routes} />;
}

export default App;
