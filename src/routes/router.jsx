import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";


const router = createBrowserRouter([
    {
        path: '/',
      element: <HomeLayout></HomeLayout>
    },
    {
        path: "/news",
        element: <h2>Nwes layout</h2>
    },
    {
        path: 'auth',
        element: <h2>Lgoin</h2>
    },
    {
        path:"*",
        element: <h1>Error</h1>
    }
])

export default router;