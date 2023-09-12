import logo from './logo.svg';
import './App.css';
import Footer from './componets/Footer.jsx';
import About from './componets/About.jsx';
import Navbar from './componets/Navbar';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import Portfolio from './componets/Portfolio';
import Home from './componets/Home.jsx';
import Contact from './componets/Contact';
import Notfound from './componets/Notfound';

let routers = createHashRouter([
  {
    path: '', element: <Home />, children: [
      { path: 'about', element: <About /> },
      { index:true, element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound /> }
    ]
  }
])
export default function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

