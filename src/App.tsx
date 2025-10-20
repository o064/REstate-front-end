import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import SignUp from './pages/SignUp';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/LogIn';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
    </Route >
    {/* login & signup layout */}
    <Route>
      <Route path='signup' element={<SignUp />} />
      <Route path='login' element={<Login />} />
    </Route >
  </>
));

function App() {
  return <RouterProvider router={router} />
}

export default App;
