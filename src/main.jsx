import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { GlobalContextProvider } from "./context/GlobalContext.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </Provider>
  </React.StrictMode>
);
