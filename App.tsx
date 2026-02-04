
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Microbillage from './pages/Microbillage';
import SablageGrenaillage from './pages/SablageGrenaillage';
import Thermolaquage from './pages/Thermolaquage';
import SEOHeader from './components/SEOHeader';
import { generateSEOContent } from './services/geminiService';
import { SEOData } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [seoData, setSeoData] = useState<SEOData | null>(null);
  const [isLoadingSEO, setIsLoadingSEO] = useState(false);

  // Sync scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Generate SEO Content dynamically via Gemini for each page
  useEffect(() => {
    const fetchSEO = async () => {
      setIsLoadingSEO(true);
      const contextMap: Record<string, string> = {
        home: "DinaEpoxy, expert en peinture industrielle et traitement de surface en Île-de-France (95, 93, 60). Spécialiste du thermolaquage, sablage et anticorrosion pour les métaux.",
        portfolio: "Nos réalisations en peinture industrielle, thermolaquage de mobilier urbain et protection de structures métalliques en atelier.",
        about: "Découvrez notre entreprise, notre process industriel maîtrisé et notre engagement pour la qualité des finitions métalliques.",
        contact: "Demandez un devis gratuit pour vos projets de peinture industrielle ou traitement de surface en Val-d'Oise et Seine-Saint-Denis.",
        'service-microbillage': "Microbillage Val-d'Oise (95). Nettoyage de précision et finition esthétique satinée pour aluminium, inox, acier et fonte à Goussainville.",
        'service-sablage': "Sablage et Grenaillage Val-d'Oise (95). Décapage de métal industriel, élimination de rouille et calamine à Goussainville.",
        'service-thermolaquage': "Thermolaquage Val-d'Oise (95). Peinture poudre industrielle haute performance cuite au four. Finition durable RAL, 100% sans solvant à Goussainville."
      };

      const pageName = currentPage.startsWith('service-') ? currentPage.replace('service-', '').toUpperCase() : currentPage.toUpperCase();
      const result = await generateSEOContent(pageName, contextMap[currentPage] || contextMap['home']);
      if (result) {
        setSeoData(result);
      }
      setIsLoadingSEO(false);
    };

    fetchSEO();
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />;
      case 'portfolio': return <Portfolio />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'service-microbillage': return <Microbillage />;
      case 'service-sablage': return <SablageGrenaillage />;
      case 'service-thermolaquage': return <Thermolaquage />;
      // Placeholder for other services
      case 'service-decapage':
      case 'service-grenaillage':
        // If we want Grenaillage separately, but it's on SablageGrenaillage. Let's redirect if needed.
        if (currentPage === 'service-grenaillage') return <SablageGrenaillage />;
        return (
          <div className="pt-40 pb-20 text-center px-10">
            <h2 className="text-3xl font-black uppercase mb-4 tracking-tighter">Service : {currentPage.replace('service-', '').toUpperCase()}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Cette page est en cours de création. Contactez-nous au 09 74 56 88 28 pour plus d'informations.</p>
            <button onClick={() => setCurrentPage('contact')} className="mt-8 px-10 py-4 bg-[#DB8247] text-white rounded-xl font-black uppercase tracking-widest">Demander un devis</button>
          </div>
        );
      default: return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#DB8247] selection:text-white">
      <SEOHeader data={seoData} defaultTitle={`DinaEpoxy | ${currentPage.toUpperCase()}`} />
      
      <Navbar activePage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow">
        {isLoadingSEO && (
          <div className="fixed top-20 left-0 right-0 h-1 bg-slate-100 z-[60]">
            <div className="h-full bg-[#DB8247] animate-[loading_1.5s_infinite_linear] w-1/3 origin-left"></div>
          </div>
        )}
        
        {renderPage()}
      </main>

      <Footer />

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%) scaleX(0.5); }
          50% { transform: translateX(100%) scaleX(1); }
          100% { transform: translateX(300%) scaleX(0.5); }
        }
      `}</style>
    </div>
  );
};

export default App;
