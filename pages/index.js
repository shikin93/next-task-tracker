import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from '../components/appContent';
import AppHeader from '../components/appHeader';

const Home = () => (
  <>
    <div>
      <AppHeader />
      <AppContent />
    </div>
    <Toaster
      position="bottom-center"
      toastOptions={{
        duration: 3000,
        style: {
          fontSize: '1rem',
        },
      }}
    />
  </>
);

export default Home;
