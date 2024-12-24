import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter ,RouterProvider } from "react-router-dom";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
// import Error from './components/Error.jsx';
import Book from './components/Book.jsx';
import BookList from './components/BookList.jsx';
import Bookdetails from './components/BookDetails.jsx';


const appRouter=createBrowserRouter([
  {
  path: "/",
  element: <App />,   
  children: [

    {
      path:"/",
      element:<BookList />,
    },

    {
      path: "/about",
      element: <About />,
     
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/book/:id",
      element: <Bookdetails />,
    },
    
   
  ],
  // errorElement : <Error />,

  },
  


]);

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={appRouter} />
)
