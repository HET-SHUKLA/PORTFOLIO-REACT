import React from 'react';
import Layout from './components/Content/Layout';
import {Home, About, Projects, Contact, TechStack} from './pages';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";


const routes = createBrowserRouter(
  createRoutesFromElements(
    // Root Layout with Outlet
    <Route path='/' element={<Layout />}>

      {/* Home Page */}
      <Route path='' element={<Home />} />

      {/* Tech Stack */}
      <Route path='techstack' element={<TechStack />} />

      {/* About Page */}
      <Route path='/about' element={<About />} />

      {/* Projects Page */}
      <Route path='/projects' element={<Projects />} />

      {/* Contact Page */}
      <Route path='/connect' element={<Contact />} />

    </Route>
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={routes}>
        <Layout />
      </RouterProvider>
    </>
  );
}

export default App;

