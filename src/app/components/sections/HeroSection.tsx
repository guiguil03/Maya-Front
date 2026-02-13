import { Sparkles, ArrowRight } from 'lucide-react';
import imgConnexion from '../../../assets/IMG_9433.PNG';
import imgDashboard from '../../../assets/IMG_9477.PNG';
import imgQRCode from '../../../assets/IMG_9476.PNG';

export default function HeroSection() {
  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Content centered at top */}
        <div className="text-center space-y-6 sm:space-y-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-[#8B2635]/10 to-[#C13048]/10 rounded-full border border-[#8B2635]/20">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B2635]" />
            <span className="text-xs sm:text-sm text-[#8B2635] font-medium">L'application d'économies #1</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto px-4">
            Économisez à Chaque Achat avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B2635] to-[#C13048]">MayaConnect</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
            Économisez de l'argent à chaque achat chez vos commerçants préférés. Simple, rapide et gratuit.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white rounded-xl sm:rounded-2xl hover:shadow-2xl transition-all font-semibold text-sm sm:text-base flex items-center gap-2 group">
              Télécharger l'app
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all font-semibold text-sm sm:text-base">
              En savoir plus
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 justify-center pt-4 px-4">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">250K+</div>
              <div className="text-xs sm:text-sm text-gray-500">Utilisateurs actifs</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">2M€+</div>
              <div className="text-xs sm:text-sm text-gray-500">Économies réalisées</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">500+</div>
              <div className="text-xs sm:text-sm text-gray-500">Partenaires</div>
            </div>
          </div>
        </div>

        {/* Phone Mockups centered at bottom */}
        <div className="relative flex items-center justify-center mt-8 sm:mt-12">
          <div className="relative flex items-center justify-center flex-wrap gap-4 sm:gap-0">
            {/* Phone 1 - Left - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block relative z-10 transform -rotate-6" style={{ marginRight: '-60px' }}>
              <div className="relative w-48 sm:w-56 lg:w-64 h-[380px] sm:h-[450px] lg:h-[520px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                  <img src={imgConnexion} alt="MayaConnect Login" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Phone 2 - Center (Main) - Always visible */}
            <div className="relative z-20 transform scale-100 sm:scale-105 lg:scale-110">
              <div className="relative w-56 sm:w-64 lg:w-72 h-[420px] sm:h-[480px] lg:h-[580px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                  <img src={imgDashboard} alt="MayaConnect Dashboard" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Phone 3 - Right - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block relative z-10 transform rotate-6" style={{ marginLeft: '-60px' }}>
              <div className="relative w-48 sm:w-56 lg:w-64 h-[380px] sm:h-[450px] lg:h-[520px] bg-black rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
                  <img src={imgQRCode} alt="MayaConnect QR Code" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

