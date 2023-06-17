import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { StoryWriter } from "./StoryWriter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StoryWriter />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;