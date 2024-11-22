import { Outlet } from 'react-router';
import { AppHeader } from './App-header/AppHeader';

export function RootLayout() {
  return (
    <div className="main-layout">
      <AppHeader />
      <Outlet />
    </div>
  );
}
