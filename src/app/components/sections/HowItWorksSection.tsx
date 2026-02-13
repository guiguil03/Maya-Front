import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HowItWorksSection() {
  return (
    <section id="how" className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B2635]/10 rounded-full border border-[#8B2635]/20">
            <Sparkles className="w-4 h-4 text-[#8B2635]" />
            <span className="text-sm text-[#8B2635] font-semibold">Comment ça marche</span>
          </div>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Commencez à Économiser en<br />3 Étapes Simples
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Rejoignez des milliers d'utilisateurs qui économisent déjà avec MayaConnect
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-gray-200/50 -translate-x-1/2 hidden lg:block"></div>

          {/* Animated Progress Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 top-0 w-1.5 bg-gradient-to-b from-[#8B2635] via-[#A02D40] to-[#C13048] -translate-x-1/2 hidden lg:block shadow-lg"
          ></motion.div>

          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-20 lg:mb-32"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left Side - Content */}
              <div className="flex-1 w-full order-2 lg:order-1 flex justify-end">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full lg:w-auto lg:max-w-lg p-8 lg:p-10 bg-white rounded-3xl shadow-lg border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-2xl transition-all"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4 text-left lg:text-right">Téléchargez l'app</h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-left lg:text-right">
                      Créez votre compte gratuitement en quelques secondes et découvrez plus de 500 partenaires disponibles près de chez vous.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Center - Number Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.5 }}
                className="relative z-10 flex-shrink-0 order-1 lg:order-2"
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#8B2635] via-[#A02D40] to-[#C13048] rounded-full flex items-center justify-center text-4xl lg:text-5xl font-bold shadow-2xl text-white relative ring-4 ring-[#8B2635]/20">
                  1
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full blur-2xl opacity-60"></div>
                </div>
              </motion.div>

              {/* Right Side - Empty */}
              <div className="flex-1 hidden lg:block order-3"></div>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-20 lg:mb-32"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left Side - Empty */}
              <div className="flex-1 hidden lg:block"></div>

              {/* Center - Number Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.5 }}
                className="relative z-10 flex-shrink-0 order-1"
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#8B2635] via-[#A02D40] to-[#C13048] rounded-full flex items-center justify-center text-4xl lg:text-5xl font-bold shadow-2xl text-white relative ring-4 ring-[#8B2635]/20">
                  2
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full blur-2xl opacity-60"></div>
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <div className="flex-1 w-full order-2 flex justify-start">
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full lg:w-auto lg:max-w-lg p-8 lg:p-10 bg-white rounded-3xl shadow-lg border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-2xl transition-all"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4 text-left">Faites vos achats</h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-left">
                      Rendez-vous chez un partenaire MayaConnect et scannez simplement le QR code à la caisse pour valider votre achat en 2 secondes.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Left Side - Content */}
              <div className="flex-1 w-full order-2 lg:order-1 flex justify-end">
                <motion.div
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full lg:w-auto lg:max-w-lg p-8 lg:p-10 bg-white rounded-3xl shadow-lg border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-2xl transition-all"
                >
                  <div className="flex flex-col">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4 text-left lg:text-right">Économisez</h3>
                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg text-left lg:text-right">
                      Économisez instantanément sur chaque achat et suivez toutes vos économies réalisées en temps réel.
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Center - Number Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.5 }}
                className="relative z-10 flex-shrink-0 order-1 lg:order-2"
              >
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#8B2635] via-[#A02D40] to-[#C13048] rounded-full flex items-center justify-center text-4xl lg:text-5xl font-bold shadow-2xl text-white relative ring-4 ring-[#8B2635]/20">
                  3
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full blur-2xl opacity-60"></div>
                </div>
              </motion.div>

              {/* Right Side - Empty */}
              <div className="flex-1 hidden lg:block order-3"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

