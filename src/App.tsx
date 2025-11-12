import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import SignUp from './pages/SignUp';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Login from './pages/LogIn';
import EstateDetails from './pages/EstateDetails';
import WishList from './pages/WishList';
import AddListing from './pages/AddListing';
import EditLisiting from './pages/EditLisiting';
import MyProfile from './pages/MyProfile';
import RoleBasedRoute from './components/auth/RoleBaseRoute';
// Create a client
const queryClient = new QueryClient();
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="estateDetails" element={<EstateDetails />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<MyProfile />} />
          <Route path="wishList" element={<WishList />} />
          <Route path="edit/property/:propertyType/:propertyId" element={<EditLisiting />} />
          {/* <Route path="edit/images/:propertyId" element={<EditImages />} /> */}
          <Route element={<RoleBasedRoute allowedRoles={['Admin', 'Agent']} />}>
            <Route path="add" element={<AddListing />} />
          </Route>
        </Route>
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
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
