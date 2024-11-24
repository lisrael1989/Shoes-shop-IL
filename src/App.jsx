import { createBrowserRouter } from 'react-router';
import '../src/assets/main.css';
import { Home } from './components/Home.jsx';
import { ShoesList } from './components/ShoesList.jsx';
import { RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/RootLayout.jsx';
import { ShoesProvider } from './Context/ShoesContext.jsx';
import { AddShoe } from './components/AddShoe.jsx';
import { ShoesDescription } from './components/ShoesDescription';

function App() {
  const Router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/shoes',
          element: <ShoesList />,
        },

        {
          path: 'shoes/:shoeId',
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
    <>
      <ShoesProvider>
        <RouterProvider router={Router} />
      </ShoesProvider>
    </>
  );
}

export default App;
