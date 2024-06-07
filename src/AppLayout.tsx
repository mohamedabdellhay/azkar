// components/Layout.jsx

import { Outlet } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
