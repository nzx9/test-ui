import "./App.css";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";

const router = [
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
];

function App() {
  return (
    <div className="App">
      <Layout
        children={
          <Routes>
            {router.map((route) => (
              <Route
                key={Math.random()}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        }
      />
    </div>
  );
}

export default App;
