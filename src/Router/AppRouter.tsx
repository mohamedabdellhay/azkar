// AppRouter.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Import your components/pages
import AppLayout from '../AppLayout';
import Home  from '../pages/home';
import About from "../pages/About"
import NotFound from '../pages/NotFound';
import { MorningAzkar } from '../pages/morningazkar';
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "اذكار-الصباح",
        element: <MorningAzkar />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
