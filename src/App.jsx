import { createBrowserRouter } from 'react-router';
import '../src/assets/main.css';
import { Home } from './components/Home.jsx';
import { ShoesList } from './components/ShoesList.jsx';
import { About } from './components/About.jsx';
import { RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/RootLayout.jsx';
import { ShoesProvider } from './Context/ShoesContext.jsx';
import { AddShoe } from './components/AddShoe.jsx';

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
          path: '/about',
          element: <About />,
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
