import Product from './components/Product';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from './components/Cart';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import RootLayOut from './components/RootLayOut';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayOut />}>
      <Route index element={<Dashboard />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
