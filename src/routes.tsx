import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./Pages/GameDetailPage";
import Layout from "./Pages/Layout";
import { HomePage } from "./Pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
