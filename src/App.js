import './App.css';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage'; 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HomePage />} />
    <Route path="booking-page" element={<BookingPage />} />
  </Route>

));




function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
