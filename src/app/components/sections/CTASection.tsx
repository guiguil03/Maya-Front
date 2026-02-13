import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import imgQRCode from '../../../assets/IMG_9476.PNG';

export default function CTASection() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#6B1D2A] via-[#8B2635] to-[#A02D40] overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900/20 backdrop-blur-sm rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-semibold">Commencez Maintenant</span>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Commencez à Économiser avec <span className="text-white/90">MayaConnect</span> Aujourd'hui
            </h2>

            <p className="text-lg text-white/90 leading-relaxed max-w-xl">
              Profitez de transactions fluides, d'une efficacité améliorée et d'outils puissants pour maximiser vos économies et votre satisfaction. Téléchargez maintenant gratuitement !
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl transition-all shadow-lg hover:shadow-2xl flex items-center gap-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/80">Télécharger sur</div>
                  <div className="text-base font-bold">App Store</div>
                </div>
              </button>

              <button className="group px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl transition-all shadow-lg hover:shadow-2xl flex items-center gap-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-white/80">Disponible sur</div>
                  <div className="text-base font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white/30 rounded-[4rem] blur-3xl scale-105"></div>
              
              {/* Phone Frame */}
              <div className="relative w-80 h-[650px] bg-gray-900 rounded-[3.5rem] p-3 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-8 bg-gray-900 rounded-b-3xl z-10"></div>
                
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden">
                  <img 
                    src={imgQRCode} 
                    alt="MayaConnect QR Code Screen" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

