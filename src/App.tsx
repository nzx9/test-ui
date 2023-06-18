import "./App.css";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/topic1",
    element: <div>Topic 1</div>,
  },
  {
    path: "/topic2",
    element: <div>Topic 2</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <Layout children={<RouterProvider router={router} />} />
    </div>
  );
}

export default App;
