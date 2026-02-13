import logoMaya from '../../../assets/logo2.png';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoMaya} alt="Maya Logo" className="w-12 h-12" />
          <span className="text-2xl font-bold text-gray-900">Maya</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-[#8B2635] transition-colors">Fonctionnalités</a>
          <a href="#how" className="text-gray-700 hover:text-[#8B2635] transition-colors">Comment ça marche</a>
          <a href="#testimonials" className="text-gray-700 hover:text-[#8B2635] transition-colors">Témoignages</a>
          <button className="px-6 py-2.5 bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white rounded-xl hover:shadow-lg transition-all font-medium">
            Télécharger
          </button>
        </div>
      </div>
    </nav>
  );
}

