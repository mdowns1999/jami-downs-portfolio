import { lazy } from "react";
import RootLayout from "./components/Layout/Root";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/UserFeedback/ErrorPage";

const HomePage = lazy(() => import("./components/Home/HomePage"));
const AboutPage = lazy(() => import("./components/About/AboutPage"));
const ProjectsPage = lazy(() => import("./components/Projects/ProjectsPage"));
const ProjectList = lazy(() => import("./components/Projects/ProjectList"));
const ProjectDetailPage = lazy(() => import("./components/Projects/ProjectDetailPage"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/projects",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <ProjectsPage />,
            },
            {
              path: "/projects/:name",
              element: <ProjectList />,
            },
            {
              path: "/projects/:name/:id",
              element: <ProjectDetailPage />,
            },
          ],
        },
      ],
    },
  ],
  { basename: "/jami-downs-portfolio" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
// https://stackoverflow.com/questions/74566649/createbrowserrouter-how-to-nest-child-routes-inside-another-route-that-itself-is
