import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Body from "./Body";
import Weather from "./components/Weather";
import SoilAnalysis from "./components/SoilAnalysis";
import Ai from "./components/Ai";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dashboard from "./components/Dashboard";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/weather",
      element: <Weather />,
    },
    {
      path: "/dashboard", 
      element: <Dashboard />,
    },
    
    {
      path: "/Ai_assistant",
      element: <Ai />,
    },
    {
path: "/Soil_analysis",
element:<SoilAnalysis />,
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}>
          <Body />
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
