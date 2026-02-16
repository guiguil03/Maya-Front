import logoMayaConnect from '../../../assets/logo2.png';
import { User } from 'lucide-react';

export default function Navigation() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset pour la navbar fixe
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-white/95 backdrop-blur-lg rounded-full shadow-lg border border-gray-200/50 px-6 py-3 flex items-center justify-between">
          {/* Logo à gauche */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src={logoMayaConnect} alt="Maya Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-900">Maya</span>
          </a>
          
          {/* Liens de navigation centrés */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('pricing');
              }}
              className="text-gray-700 hover:text-[#8B2635] transition-colors font-medium cursor-pointer"
            >
              Nos Abonnements
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('testimonials');
              }}
              className="text-gray-700 hover:text-[#8B2635] transition-colors font-medium cursor-pointer"
            >
              Avis
            </a>
            <a 
              href="#faq" 
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('faq');
              }}
              className="text-gray-700 hover:text-[#8B2635] transition-colors font-medium cursor-pointer"
            >
              Contactez-Nous
            </a>
          </div>
          
          {/* Bouton S'inscrire à droite */}
          <button 
            onClick={() => handleScrollTo('pricing')}
            className="px-5 py-2.5 bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white rounded-full hover:shadow-lg transition-all font-medium flex items-center gap-2"
          >
            <User className="w-4 h-4" />
            <span>S'inscrire</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

