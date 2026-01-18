import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './index.css';

// Lazy load pages for code splitting - reduces initial bundle size
const HomePage = lazy(() => import('./pages/HomePage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Loading spinner for lazy-loaded pages
const PageLoader = () => (
  <div className="page-loader" role="status" aria-label="Loading page">
    <div className="page-loader__spinner"></div>
  </div>
);

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="app">
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:slug" element={<ArticlePage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<AboutPage />} />
          <Route path="/affiliate-disclosure" element={<AboutPage />} />
        </Routes>
      </Suspense>
      {/* Hide footer on homepage since it has its own footer in scroll sections */}
      {!isHomePage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
