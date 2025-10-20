import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Profile from './pages/Profile';

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='/profile' element={<Profile/>}/>
  </Route>

  </>
));

function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>;
}

export default App;
