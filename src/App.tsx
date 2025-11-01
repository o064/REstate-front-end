import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';

import SignUp from './pages/SignUp';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/LogIn';
import EstateDetails from './pages/EstateDetails';
import Profile from './pages/Profile';
import WishList from './pages/WishList';
import AddListing from './pages/AddListing';
import EditLisiting from './pages/EditLisiting';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="estateDetails" element={<EstateDetails />} />
        <Route path="profile" element={<Profile />} />
        <Route path="wishList" element={<WishList />} />
        <Route path="add" element={<AddListing />} />
        <Route path="edit" element={<EditLisiting />} />
      </Route>
      {/* login & signup layout */}
      <Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
