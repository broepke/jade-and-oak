import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/Home';
import EventsPage from '../pages/Events';
import ShopPage from '../pages/Shop';
import BlogPage from '../pages/Blog';
import AboutPage from '../pages/About';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><HomePage /></Layout>,
  },
  {
    path: '/events',
    element: <Layout><EventsPage /></Layout>,
  },
  {
    path: '/shop',
    element: <Layout><ShopPage /></Layout>,
  },
  {
    path: '/blog',
    element: <Layout><BlogPage /></Layout>,
  },
  {
    path: '/about',
    element: <Layout><AboutPage /></Layout>,
  },
  // Add a catch-all route for 404
  {
    path: '*',
    element: (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl mb-8">The page you are looking for does not exist.</p>
          <a href="/" className="btn btn-primary">
            Return to Home
          </a>
        </div>
      </Layout>
    ),
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;