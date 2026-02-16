import { motion } from 'framer-motion';
import { useState } from 'react';
import { Users, Store, Wallet, QrCode, Receipt, MapPin, BarChart3, Target } from 'lucide-react';
import imgDashboard from '../../../assets/IMG_9477.png';
import imgPartner from '../../../assets/IMG_9479.png';
import React from 'react';

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState<'client' | 'partner'>('client');

  return (
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

        {/* Content - Centered Layout */}
        <div className="relative min-h-[800px] lg:min-h-[700px]">
          {/* Phone Mockup - Center */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center mb-12 lg:mb-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-10"
          >
            <div className="relative w-72 lg:w-80 h-[580px] lg:h-[650px] bg-black rounded-[3.5rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden">
                <img 
                  src={activeTab === 'partner' ? imgPartner : imgDashboard} 
                  alt={activeTab === 'partner' ? "MayaConnect Partner Dashboard" : "MayaConnect Client Features"} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </motion.div>

          {/* Features Grid - Around the phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 relative lg:grid-rows-2">
            {activeTab === 'client' ? (
              <>
                {/* Client Features - Top Left */}
                <motion.div
                  key="client-1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="p-6 bg-white rounded-2xl border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-xl transition-all lg:mr-auto lg:max-w-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635] to-[#C13048] flex items-center justify-center mb-4 shadow-lg">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Économies Instantanées</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Économisez de l'argent directement sur chaque achat validé chez nos partenaires.
                  </p>
                </motion.div>

                {/* Client Features - Top Right */}
                <motion.div
                  key="client-2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="p-6 bg-white rounded-2xl border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-xl transition-all lg:ml-auto lg:max-w-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635] to-[#C13048] flex items-center justify-center mb-4 shadow-lg">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scanner QR Simple</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Scannez le code QR du commerçant en 2 secondes pour valider votre achat.
                  </p>
                </motion.div>

                {/* Client Features - Bottom Left */}
                <motion.div
                  key="client-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="p-6 bg-white rounded-2xl border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-xl transition-all lg:mr-auto lg:max-w-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635] to-[#C13048] flex items-center justify-center mb-4 shadow-lg">
                    <Receipt className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Historique Détaillé</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Suivez toutes vos transactions et économies réalisées en temps réel.
                  </p>
                </motion.div>

                {/* Client Features - Bottom Right */}
                <motion.div
                  key="client-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="p-6 bg-white rounded-2xl border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-xl transition-all lg:ml-auto lg:max-w-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635] to-[#C13048] flex items-center justify-center mb-4 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Trouver des Partenaires</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Découvrez les commerçants partenaires près de chez vous et profitez de leurs offres.
                  </p>
                </motion.div>
              </>
            ) : (
              <>
                {/* Partner Features - Top Left */}
                <motion.div
                  key="partner-1"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="p-6 bg-white rounded-2xl border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-xl transition-all lg:mr-auto lg:max-w-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635] to-[#C13048] flex items-center justify-center mb-4 shadow-lg">
                    <Store className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Attirez Plus de Clients</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Augmentez votre visibilité et attirez de nouveaux clients grâce au réseau MayaConnect.
                  </p>
                </motion.div>

                {/* Partner Features - Top Right */}
                <motion.div
                  key="partner-2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="p-6 bg-white rounded-2xl border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-xl transition-all lg:ml-auto lg:max-w-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635] to-[#C13048] flex items-center justify-center mb-4 shadow-lg">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Statistiques en Temps Réel</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Suivez vos ventes, le nombre de clients et votre chiffre d'affaires en direct.
                  </p>
                </motion.div>

                {/* Partner Features - Bottom Left */}
                <motion.div
                  key="partner-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="p-6 bg-white rounded-2xl border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-xl transition-all lg:mr-auto lg:max-w-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635] to-[#C13048] flex items-center justify-center mb-4 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Gestion Simplifiée</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Interface intuitive pour gérer vos offres et paramètres d'économies facilement.
                  </p>
                </motion.div>

                {/* Partner Features - Bottom Right */}
                <motion.div
                  key="partner-4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="p-6 bg-white rounded-2xl border-2 border-[#8B2635]/10 hover:border-[#8B2635]/30 hover:shadow-xl transition-all lg:ml-auto lg:max-w-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B2635] to-[#C13048] flex items-center justify-center mb-4 shadow-lg">
                    <QrCode className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scanner QR Client</h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Scannez rapidement les codes QR de vos clients pour valider leurs achats et leur permettre d'économiser.
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </div>

       
      </div>
    </section>
  );
}

