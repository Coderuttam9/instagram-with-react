import { RouterProvider } from "react-router-dom";
import "./App.scss";
import Router from "./router/Router";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
