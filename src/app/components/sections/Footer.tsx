import logoMaya from '../../../assets/logo2.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoMaya} alt="Maya Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold">Maya</span>
            </div>
            <p className="text-gray-400">
              L'application qui vous fait économiser de l'argent sur tous vos achats quotidiens.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-lg">Produit</h4>
            <div className="space-y-2 text-gray-400">
              <div><a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a></div>
              <div><a href="#how" className="hover:text-white transition-colors">Comment ça marche</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Tarifs</a></div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-lg">Entreprise</h4>
            <div className="space-y-2 text-gray-400">
              <div><a href="#" className="hover:text-white transition-colors">À propos</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Blog</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Carrières</a></div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-lg">Support</h4>
            <div className="space-y-2 text-gray-400">
              <div><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Contact</a></div>
              <div><a href="#" className="hover:text-white transition-colors">Confidentialité</a></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Maya. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

