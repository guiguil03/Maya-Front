import { TrendingUp, Receipt, Store, QrCode, MapPin, Users, Shield, Sparkles, ArrowRight, CheckCircle2, Star, Wallet, Smartphone, BarChart3, Gift, Target, CreditCard } from 'lucide-react';
import imgMobileApp from '../assets/IMG_9470.PNG';
import imgHistorique from '../assets/IMG_9431.PNG';
import imgConnexion from '../assets/IMG_9433.PNG';
import imgDashboard from '../assets/IMG_9477.PNG';
import imgQRCode from '../assets/IMG_9476.PNG';
import logoMaya from '../assets/logo2.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Slider from 'react-slick';
import '../styles/slider.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<'client' | 'partner'>('client');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Content centered at top */}
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#8B2635]/10 to-[#C13048]/10 rounded-full border border-[#8B2635]/20">
              <Sparkles className="w-4 h-4 text-[#8B2635]" />
              <span className="text-sm text-[#8B2635] font-medium">L'application de cashback #1</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              Économisez à Chaque Achat avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B2635] to-[#C13048]">MayaConnect</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Recevez du cashback instantané chez vos commerçants préférés. Simple, rapide et gratuit.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white rounded-2xl hover:shadow-2xl transition-all font-semibold flex items-center gap-2 group">
                Télécharger l'app
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl hover:shadow-lg transition-all font-semibold">
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
                <div className="text-sm text-gray-500">Cashback versé</div>
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
              <div className="relative z-10 transform -rotate-6" style={{ marginRight: '-60px' }}>
                <div className="relative w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img src={imgConnexion} alt="MayaConnect Login" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Phone 2 - Center (Main) */}
              <div className="relative z-20 transform scale-110">
                <div className="relative w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img src={imgDashboard} alt="MayaConnect Dashboard" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Phone 3 - Right */}
              <div className="relative z-10 transform rotate-6" style={{ marginLeft: '-60px' }}>
                <div className="relative w-64 h-[520px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    <img src={imgQRCode} alt="MayaConnect QR Code" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client & Partner Features Section */}
      <section id="features" className="relative py-32 px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8B2635]/10 rounded-full border border-[#8B2635]/20">
              <span className="text-sm text-[#8B2635] font-medium">✨ Fonctionnalités</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Une Plateforme Complète pour<br />Clients et Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez toutes les fonctionnalités de MayaConnect pour économiser et développer votre activité
            </p>
          </motion.div>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-100 rounded-2xl p-2 gap-2">
              <button
                onClick={() => setActiveTab('client')}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'client'
                    ? 'bg-white text-[#8B2635] shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Users className="w-5 h-5" />
                Pour les Clients
                {activeTab === 'client' && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab('partner')}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === 'partner'
                    ? 'bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Store className="w-5 h-5" />
                Pour les Partenaires
                {activeTab === 'partner' && (
                  <motion.div
                    layoutId="activeTabPartner"
                    className="absolute inset-0 bg-gradient-to-r from-[#8B2635] to-[#C13048] rounded-xl shadow-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features List */}
            <div className="space-y-6">
              {activeTab === 'client' ? (
                <>
                  {/* Client Features */}
                  <motion.div
                    key="client-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635]/20 to-[#C13048]/20 flex items-center justify-center flex-shrink-0">
                      <Wallet className="w-8 h-8 text-[#8B2635]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">Cashback Instantané</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Recevez votre cashback directement sur votre compte après chaque achat validé.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    key="client-2"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635]/20 to-[#C13048]/20 flex items-center justify-center flex-shrink-0">
                      <QrCode className="w-8 h-8 text-[#8B2635]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">Scanner QR Simple</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Scannez le code QR du commerçant en 2 secondes pour valider votre achat.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    key="client-3"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635]/20 to-[#C13048]/20 flex items-center justify-center flex-shrink-0">
                      <Receipt className="w-8 h-8 text-[#8B2635]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">Historique Détaillé</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Suivez toutes vos transactions et économies réalisées en temps réel.
                      </p>
                    </div>
                  </motion.div>
                </>
              ) : (
                <>
                  {/* Partner Features */}
                  <motion.div
                    key="partner-1"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635]/20 to-[#C13048]/20 flex items-center justify-center flex-shrink-0">
                      <Store className="w-8 h-8 text-[#8B2635]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">Attirez Plus de Clients</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Augmentez votre visibilité et attirez de nouveaux clients grâce au réseau MayaConnect.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    key="partner-2"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635]/20 to-[#C13048]/20 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-8 h-8 text-[#8B2635]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">Statistiques en Temps Réel</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Suivez vos ventes, le nombre de clients et votre chiffre d'affaires en direct.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    key="partner-3"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-start gap-5 p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635]/20 to-[#C13048]/20 flex items-center justify-center flex-shrink-0">
                      <Target className="w-8 h-8 text-[#8B2635]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900">Gestion Simplifiée</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Interface intuitive pour gérer vos offres et paramètres de cashback facilement.
                      </p>
                    </div>
                  </motion.div>
                </>
              )}
            </div>

            {/* Phone Mockup */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-[650px] bg-black rounded-[3.5rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden">
                  <img 
                    src={activeTab === 'client' ? imgDashboard : imgDashboard} 
                    alt="MayaConnect Features" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-8 bg-gradient-to-br from-[#8B2635]/10 to-[#C13048]/10 rounded-3xl border border-[#8B2635]/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-xl flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Pour les Clients</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Téléchargez l'app gratuitement et commencez à économiser dès aujourd'hui sur tous vos achats quotidiens.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white rounded-xl hover:shadow-lg transition-all font-semibold">
                Télécharger MayaConnect
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-8 bg-gradient-to-br from-[#8B2635]/10 to-[#C13048]/10 rounded-3xl border border-[#8B2635]/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-xl flex items-center justify-center">
                  <Store className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Pour les Partenaires</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Rejoignez notre réseau de 500+ commerçants partenaires et développez votre clientèle rapidement.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white rounded-xl hover:shadow-lg transition-all font-semibold">
                Devenir Partenaire
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
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
              Rejoignez des milliers d'utilisateurs qui économisent déjà avec Maya
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
                <div className="flex-1 w-full lg:text-right order-2 lg:order-1">
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block p-8 lg:p-10 bg-white rounded-3xl shadow-lg border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-2xl transition-all"
                  >
                    <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-end gap-6 mb-6">
                      <div className="order-2 lg:order-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Téléchargez l'app</h3>
                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg max-w-lg lg:max-w-none">
                          Créez votre compte gratuitement en quelques secondes et découvrez plus de 500 partenaires disponibles près de chez vous.
                        </p>
                      </div>
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-24 h-24 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-2xl flex items-center justify-center shadow-xl order-1 lg:order-2"
                      >
                        <Sparkles className="w-12 h-12 text-white" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8B2635]/40 to-[#C13048]/40 rounded-2xl blur-2xl"></div>
                      </motion.div>
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
                <div className="flex-1 w-full text-left order-2">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block p-8 lg:p-10 bg-white rounded-3xl shadow-lg border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-2xl transition-all"
                  >
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-6">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-24 h-24 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-2xl flex items-center justify-center shadow-xl order-1 lg:order-1"
                      >
                        <QrCode className="w-12 h-12 text-white" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8B2635]/40 to-[#C13048]/40 rounded-2xl blur-2xl"></div>
                      </motion.div>
                      <div className="order-2 lg:order-2">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Faites vos achats</h3>
                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg max-w-lg lg:max-w-none">
                          Rendez-vous chez un partenaire Maya et scannez simplement le QR code à la caisse pour valider votre achat en 2 secondes.
                        </p>
                      </div>
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
                <div className="flex-1 w-full lg:text-right order-2 lg:order-1">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block p-8 lg:p-10 bg-white rounded-3xl shadow-lg border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-2xl transition-all"
                  >
                    <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-end gap-6 mb-6">
                      <div className="order-2 lg:order-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Économisez</h3>
                        <p className="text-gray-600 leading-relaxed text-base lg:text-lg max-w-lg lg:max-w-none">
                          Recevez instantanément votre cashback sur votre compte Maya et suivez toutes vos économies réalisées en temps réel.
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-24 h-24 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-2xl flex items-center justify-center shadow-xl order-1 lg:order-2"
                      >
                        <TrendingUp className="w-12 h-12 text-white" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8B2635]/40 to-[#C13048]/40 rounded-2xl blur-2xl"></div>
                      </motion.div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-32 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B2635]/10 rounded-full border border-[#8B2635]/20">
              <Star className="w-4 h-4 text-[#8B2635] fill-[#8B2635]" />
              <span className="text-sm text-[#8B2635] font-semibold">Témoignages</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Histoires Réelles d'Utilisateurs<br />Qui Adorent MayaConnect
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Découvrez comment MayaConnect aide des milliers de personnes à économiser quotidiennement et à améliorer leur pouvoir d'achat.
            </p>
          </motion.div>

          {/* Slider Container */}
          <div className="relative px-8">
            <Slider
              dots={false}
              infinite={true}
              speed={500}
              slidesToShow={3}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
              cssEase="linear"
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                }
              ]}
            >
              {/* Testimonial 1 */}
              <div className="px-3">
                <div className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all h-full">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    "L'interface super intuitive a rendu la gestion de mes économies fluide et efficace dès le départ. Je recommande à tous !"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      M
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Marie Lefèvre</div>
                      <div className="text-sm text-gray-500">Étudiante</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="px-3">
                <div className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all h-full">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    "Avec MayaConnect, gérer mes achats et mes cashbacks n'a jamais été aussi simple et efficace. Un vrai gain de temps !"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      E
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Emily Anne Roberts</div>
                      <div className="text-sm text-gray-500">Commerçante</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="px-3">
                <div className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all h-full">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    "La rapidité et l'efficacité de MayaConnect ont transformé la gestion de mes dépenses, rendant tout beaucoup plus précis."
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      J
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Jean Johnson</div>
                      <div className="text-sm text-gray-500">Entrepreneur</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="px-3">
                <div className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all h-full">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    "Les outils de reporting ont été un vrai game-changer, fournissant des insights détaillés pour optimiser mes services."
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      A
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Alexander John Parker</div>
                      <div className="text-sm text-gray-500">Manager Commercial</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 5 */}
              <div className="px-3">
                <div className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all h-full">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    "Le processus de paiement rapide de MayaConnect accélère mes transactions, ce qui ravit mes clients et mon équipe."
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      S
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Sophie Martin</div>
                      <div className="text-sm text-gray-500">Chef d'Entreprise</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 6 */}
              <div className="px-3">
                <div className="p-8 bg-white rounded-3xl border border-gray-200 hover:shadow-xl transition-all h-full">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    "Les fonctionnalités personnalisables de MayaConnect s'adaptent parfaitement à mes besoins, offrant flexibilité et contrôle."
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                      M
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Michael Edward Brooks</div>
                      <div className="text-sm text-gray-500">Consultant Business</div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B2635]/10 rounded-full border border-[#8B2635]/20">
              <span className="text-sm text-[#8B2635] font-semibold">📋 FAQ</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Questions Fréquemment Posées
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Voici quelques questions fréquentes que nous avons reçues pour aider les nouveaux utilisateurs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FAQ 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Qu'est-ce que MayaConnect ?</h3>
                  <motion.div
                    animate={{ rotate: openFaq === 0 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === 0 ? "auto" : 0, opacity: openFaq === 0 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    MayaConnect est une application de cashback qui vous permet d'économiser de l'argent sur tous vos achats quotidiens. Scannez simplement un QR code chez nos partenaires et recevez instantanément votre cashback.
                  </p>
                </motion.div>
              </button>
            </motion.div>

            {/* FAQ 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Comment fonctionne le cashback ?</h3>
                  <motion.div
                    animate={{ rotate: openFaq === 1 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === 1 ? "auto" : 0, opacity: openFaq === 1 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Après chaque achat chez un partenaire MayaConnect, scannez le QR code du commerçant. Votre cashback est automatiquement calculé et ajouté à votre solde MayaConnect en temps réel. Vous pouvez ensuite le retirer ou l'utiliser pour vos prochains achats.
                  </p>
                </motion.div>
              </button>
            </motion.div>

            {/* FAQ 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900">MayaConnect est-elle gratuite ?</h3>
                  <motion.div
                    animate={{ rotate: openFaq === 2 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === 2 ? "auto" : 0, opacity: openFaq === 2 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Oui, MayaConnect est 100% gratuite pour tous les utilisateurs ! Il n'y a aucun frais d'inscription, d'utilisation ou de retrait. Vous gardez l'intégralité de votre cashback.
                  </p>
                </motion.div>
              </button>
            </motion.div>

            {/* FAQ 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Quand reçois-je mon cashback ?</h3>
                  <motion.div
                    animate={{ rotate: openFaq === 3 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === 3 ? "auto" : 0, opacity: openFaq === 3 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Votre cashback est crédité instantanément sur votre compte MayaConnect dès que vous scannez le QR code et validez votre achat. Vous pouvez le voir apparaître en temps réel dans votre historique de transactions.
                  </p>
                </motion.div>
              </button>
            </motion.div>

            {/* FAQ 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Puis-je utiliser MayaConnect partout ?</h3>
                  <motion.div
                    animate={{ rotate: openFaq === 4 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === 4 ? "auto" : 0, opacity: openFaq === 4 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    MayaConnect fonctionne chez tous nos commerçants partenaires. Nous avons plus de 500 partenaires dans différentes catégories : restaurants, commerces, supermarchés, et bien plus. Consultez la carte interactive dans l'app pour trouver les partenaires près de chez vous.
                  </p>
                </motion.div>
              </button>
            </motion.div>

            {/* FAQ 6 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-gray-900">Comment devenir partenaire MayaConnect ?</h3>
                  <motion.div
                    animate={{ rotate: openFaq === 5 ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === 5 ? "auto" : 0, opacity: openFaq === 5 ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Si vous êtes commerçant et souhaitez rejoindre MayaConnect, cliquez sur "Devenir Partenaire" et remplissez le formulaire d'inscription. Notre équipe vous contactera dans les 48h pour finaliser votre inscription et configurer votre compte.
                  </p>
                </motion.div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Commencez à Économiser avec <span className="text-white/90">Maya</span> Aujourd'hui
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
                      alt="Maya QR Code Screen" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={logoMaya} alt="Maya Logo" className="w-10 h-10" />
                <span className="text-2xl font-bold">Maya</span>
              </div>
              <p className="text-gray-400">
                L'application de cashback qui vous fait économiser sur tous vos achats quotidiens.
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
                <div><a href="#" className="hover:text-w