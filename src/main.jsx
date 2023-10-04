import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import store from "./store";
import { StoreProvider } from "easy-peasy";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
