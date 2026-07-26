import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import Wines from '@/components/Wines';
import Gallery from '@/components/Gallery';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Wines />
        <Gallery />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
