import React from 'react';
import Layout from './components/RightSide/Layout';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    // Root Layout with Outlet
    <Route path='/' element={<Layout />}>


    </Route>
  )
)

const App = () => {
  return (
    <>
      <h1 className='text-5xl text-red-700'>Welcome to the portfolio</h1>
    </>
  );
}

export default App;

