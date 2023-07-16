import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StoryWriter } from "./StoryWriter";
import { Home } from "./Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/story", element: <StoryWriter /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
