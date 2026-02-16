import { Sparkles, ArrowRight } from 'lucide-react';
import imgConnexion from '../../../assets/IMG_9433.PNG';
import imgDashboard from '../../../assets/IMG_9477.PNG';
import imgQRCode from '../../../assets/IMG_9476.PNG';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Content centered at top */}
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8B2635]/10 to-[#C13048]/10 rounded-full border border-[#8B2635]/20">
            <Sparkles className="w-4 h-4 text-[#8B2635]" />
            <span className="text-sm text-[#8B2635] font-medium">L'application d'économies #1</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Économisez à Chaque Achat avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B2635] to-[#C13048]">MayaConnect</span>
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Économisez de l'argent à chaque achat chez vos commerçants préférés. Simple, rapide et gratuit.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white rounded-2xl hover:shadow-2xl transition-all font-semibold flex items-center gap-2 group text-sm sm:text-base">
              Télécharger l'app
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
            <button className="px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl hover:shadow-lg transition-all font-semibold text-sm sm:text-base">
              En savoir plus
            </button>
          </div>

          <div className="flex items-center gap-8 justify-center pt-4">
            <div className="space-y-1">
              <div className="text-3xl font-bold text-gray-900">250K+</div>
              <div className="text-sm text-gray-500">Utilisateurs actifs</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-gray-900">2M€+</div>
              <div className="text-sm text-gray-500">Économies réalisées</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="space-y-1">
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-500">Partenaires</div>
            </div>
          </div>
        </div>

        {/* Phone Mockups centered at bottom */}
        <div className="relative flex items-center justify-center mt-12">
          <div className="relative flex items-center justify-center">
            {/* Phone 1 - Left */}
            <div className="relative z-10 transform -rotate-6" style={{ marginRight: '-30px' }}>
              <div className="relative w-40 h-[320px] md:w-64 md:h-[520px] bg-black rounded-[2rem] md:rounded-[3rem] p-1.5 md:p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
                  <img src={imgConnexion} alt="MayaConnect Login" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Phone 2 - Center (Main) */}
            <div className="relative z-20 transform scale-100 md:scale-110">
              <div className="relative w-44 h-[360px] md:w-64 md:h-[520px] bg-black rounded-[2.5rem] md:rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden">
                  <img src={imgDashboard} alt="MayaConnect Dashboard" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Phone 3 - Right */}
            <div className="relative z-10 transform rotate-6" style={{ marginLeft: '-30px' }}>
              <div className="relative w-40 h-[320px] md:w-64 md:h-[520px] bg-black rounded-[2rem] md:rounded-[3rem] p-1.5 md:p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
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

