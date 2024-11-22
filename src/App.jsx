import { createBrowserRouter } from 'react-router';
import '../src/assets/main.css';
// import { AppHeader } from './components/App-header/AppHeader.jsx';
import { Home } from './components/Home.jsx';
import { ShoesIndex } from './components/ShoesIndex.jsx';
import { About } from './components/About.jsx';
import { RouterProvider } from 'react-router-dom';
import { RootLayout } from './components/RootLayout.jsx';

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
          element: <ShoesIndex />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
