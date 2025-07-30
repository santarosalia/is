import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Universe from '../view/Universe';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/universe',
    element: <Universe onShowDialog={() => {}} />,
  },
]);