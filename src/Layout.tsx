// src/Layout/Layout.tsx
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <main>{children}</main>
      </QueryClientProvider>
      <Footer />
    </>
  );
};

export default Layout;
