import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './Components/Loader';
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound';

// Lazy Loaded Components
const HomePage = lazy(() => import('./Pages/HomePage'));
const FeaturesPage = lazy(() => import('./Pages/FeaturesPage'));
// const TeamsPage = lazy(() => import('./Pages/TeamsPage'));
const ContactPage = lazy(() => import('./Pages/ContactPage'));
const JoinTeamPage = lazy(() => import('./Pages/JoinTeamPage'));
const HowItWorksPage = lazy(() => import('./Pages/HowItWorksPage'));
const Footer = lazy(() => import('./Components/Footer'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    if (!hasLoaded) {
      // Simulate a loading phase
      setTimeout(() => {
        setIsLoading(false);
        setHasLoaded(true);
      }, 1500);
    }
  }, [hasLoaded]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className='overflow-x-hidden bg-violet-900'>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<><NavBar /><HomePage /><Footer /></>} />
            <Route path='/features' element={<><NavBar /><FeaturesPage /><Footer /></>} />
            <Route path='/how-it-works' element={<><NavBar /><HowItWorksPage /><Footer /></>} />
            {/* <Route path='/teams' element={<><NavBar /><TeamsPage /><Footer /></>} /> */}
            <Route path='/contact' element={<><NavBar /><ContactPage /><Footer /></>} />
            <Route path='/join-team' element={<><NavBar /><JoinTeamPage /><Footer /></>} />
            <Route path='*' element={<><NavBar /><NotFound /></>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
