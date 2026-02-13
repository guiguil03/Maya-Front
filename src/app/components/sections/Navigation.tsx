import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import logoMayaConnect from '../../../assets/logo2.png';
import SignUpModal from './SignUpModal';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-center">
        {/* Navigation Bar - Pill Shape */}
        <div className="w-full max-w-5xl bg-gray-100/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center justify-between shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <img src={logoMayaConnect} alt="Maya Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">Maya</span>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            <a href="#pricing" className="text-gray-900 hover:text-[#8B2635] transition-colors font-medium text-sm">
              Nos Abonnements
            </a>
            <a href="#testimonials" className="text-gray-900 hover:text-[#8B2635] transition-colors font-medium text-sm">
              Avis
            </a>
            <a href="#faq" className="text-gray-900 hover:text-[#8B2635] transition-colors font-medium text-sm">
              Contactez-Nous
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button 
              onClick={() => setIsSignUpOpen(true)}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white rounded-full hover:shadow-lg transition-all font-semibold text-sm"
            >
              <User className="w-4 h-4" />
              S'inscrire
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-900 hover:text-[#8B2635] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100/95 backdrop-blur-sm border-t border-gray-200/50">
          <div className="px-4 py-4 space-y-3 max-w-5xl mx-auto">
            <a 
              href="#pricing" 
              className="block text-gray-900 hover:text-[#8B2635] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nos Abonnements
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-900 hover:text-[#8B2635] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Avis
            </a>
            <a 
              href="#faq" 
              className="block text-gray-900 hover:text-[#8B2635] transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactez-Nous
            </a>
            <button 
              className="w-full mt-4 px-5 py-2.5 bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white rounded-full hover:shadow-lg transition-all font-semibold flex items-center justify-center gap-2"
              onClick={() => {
                setIsMenuOpen(false);
                setIsSignUpOpen(true);
              }}
            >
              <User className="w-4 h-4" />
              S'inscrire
            </button>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      <SignUpModal isOpen={isSignUpOpen} onClose={() => setIsSignUpOpen(false)} />
    </nav>
  );
}

