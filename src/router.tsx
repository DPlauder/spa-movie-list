import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement, {
  loader as rootLoader,
  action as rootAction,
} from "./RootElement";
import ErrorPage from "./ErrorPage";
import Movie, { loader as MovieLoader } from "./Movie";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      errorElement: <ErrorPage />,
      loader: rootLoader,
      action: rootAction,
      children: [
        { path: "/movies/:id", element: <Movie />, loader: MovieLoader as any },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
