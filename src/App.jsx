import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ShoesProvider } from './Context/ShoesContext.jsx';
import { RootLayout } from './components/RootLayout.jsx';
import { Home } from './components/Home.jsx';
import { ShoesList } from './components/ShoesList.jsx';
import { AddShoe } from './components/AddShoe.jsx';
import { ShoesDescription } from './components/ShoesDescription';
import { LoginPage } from './components/LoginPage.jsx';

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/login',
          element: <LoginPage />,
        },
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/shoes',
          element: <ShoesList />,
        },
        {
          path: '/shoes/:shoeId',
          element: <ShoesDescription />,
        },
        {
          path: '/add-shoes',
          element: <AddShoe />,
        },
      ],
    },
  ]);

  return (
    <ShoesProvider>
      <RouterProvider router={Router} />
    </ShoesProvider>
  );
}

export default App;
