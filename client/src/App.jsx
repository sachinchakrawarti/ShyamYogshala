import { useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/layout/Footer';
import FlashCard from './components/ui/FlashCard';

export default function App() {
  const location = useLocation();

  // Hide Navbar and Footer on /dashboard and all its subroutes
  const hideNavbarAndFooter = location.pathname.startsWith('/dashboard');
  const hideFlashCard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <AppRoutes />
      {!hideNavbarAndFooter && <Footer />}
      {!hideFlashCard && <FlashCard />}
     
    </>
  );
}

