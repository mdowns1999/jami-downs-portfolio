import RootLayout from "./components/Layout/Root";
import ProjectDetailPage from "./components/Projects/ProjectDetailPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/UserFeedback/ErrorPage";
import AboutPage from "./components/About/AboutPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import HomePage from "./components/Home/HomePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "projects", element: <ProjectsPage /> },
        { path: "about", element: <AboutPage /> },
        { path: "projects/:id", element: <ProjectDetailPage /> },
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