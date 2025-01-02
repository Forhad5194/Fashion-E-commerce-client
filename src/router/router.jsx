import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import Home from "../pages/Home";
import Collection from "../pages/Collection";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Card from "../pages/Card";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'collection',
                element: <Collection />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
             path: '/login',
             element: <Login />
           },
           {
             path: "/card",
             element: <Card />
           }
           
        ]
    }
])