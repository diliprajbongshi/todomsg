import {createBrowserRouter, Route,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Route>
    )
  );
  return (
    <>
        <ToastContainer />
        <RouterProvider router={router} />
    </>
  
  )
}

export default App
