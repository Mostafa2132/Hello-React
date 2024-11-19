
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import "preline/preline";

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true ,  element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/portfolio", element: <Portfolio /> },
        { path: "/contact", element: <Contact /> },
        

      ],
    },
    
      { path: "*", element: <Notfound /> },
    
  ]);

  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
