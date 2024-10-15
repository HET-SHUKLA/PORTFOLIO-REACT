import React from 'react';
import Layout from './components/RightSide/Layout';
import {Home, About} from './pages';
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

      {/* About Page */}
      <Route path='/about' element={<About />} />

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

