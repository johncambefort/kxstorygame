import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StoryWriter } from "./StoryWriter";
import { Home } from "./Home";
import PoemList from "./PoemList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/story", element: <StoryWriter /> },
    { path: "/poems", element: <PoemList /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
