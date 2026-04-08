import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 font-display transition-colors duration-300 antialiased overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
