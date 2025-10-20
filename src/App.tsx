import { createBrowserRouter, RouterProvider } from 'react-router';
import SignUp from './pages/Signup';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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
  return <SignUp />;
}

export default App;
