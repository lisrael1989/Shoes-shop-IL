import { Outlet } from 'react-router';
import { AppHeader } from './App-header/AppHeader';
import { Footer } from './Footer/Footer';

export function RootLayout() {
  return (
    <div className="main-layout">
      <AppHeader />
      <Outlet />
      <Footer />
    </div>
  );
}
