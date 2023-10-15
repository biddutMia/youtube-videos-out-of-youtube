import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/app/App";
// import store from "./store";
// import { StoreProvider } from "easy-peasy";
// import { BrowserRouter } from "react-router-dom";
import NewApp from "./components/NewApp";

// console.log("easy", JSON.parse(localStorage.getItem("[EasyPeasyStore][0]")));

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <StoreProvider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StoreProvider>
// );

ReactDOM.createRoot(document.getElementById("root")).render(<NewApp />);
