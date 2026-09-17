import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LegalPage from './pages/LegalPage';

const legalRoutes = new Set(['/privacy', '/terms', '/refunds', '/delivery']);

function normalisePath(pathname: string) {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed || '/';
}

function App() {
  const [path, setPath] = useState(() => normalisePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPath(normalisePath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [path]);

  const navigate = (href: string) => {
    const nextPath = normalisePath(href);
    if (nextPath === path) return;
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
  };

  return (
    <div className="site-shell">
      <Header currentPath={path} navigate={navigate} />
      <main>{legalRoutes.has(path) ? <LegalPage path={path} /> : <HomePage />}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
