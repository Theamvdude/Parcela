import { useHashRoute } from './hooks/useHashRoute';
import { useReveal } from './hooks/useReveal';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import CaseStudies from './pages/CaseStudies';
import Process from './pages/Process';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';

function App() {
  const [route, navigate] = useHashRoute();
  useReveal(route);

  const renderPage = () => {
    switch (route) {
      case '/services': return <Services navigate={navigate} />;
      case '/case-studies': return <CaseStudies navigate={navigate} />;
      case '/process': return <Process navigate={navigate} />;
      case '/blog': return <Blog navigate={navigate} />;
      case '/about': return <About navigate={navigate} />;
      case '/contact': return <Contact />;
      case '/terms': return <Terms navigate={navigate} />;
      case '/privacy': return <Privacy navigate={navigate} />;
      case '/refund': return <Refund navigate={navigate} />;
      default: return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <Nav navigate={navigate} current={route} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}

export default App;
