import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import React from 'react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Solo',
      price: '5',
      period: 'mois',
      description: 'Parfait pour commencer',
      features: [
        'Accès à tous les partenaires',
        'Économies sur chaque achat',
        'Historique des transactions',
        'Support par email',
      ],
      popular: false,
    },
    {
      name: 'Duo',
      price: '7',
      period: 'mois',
      description: 'Idéal pour deux personnes',
      features: [
        'Tout de Solo inclus',
        '2 comptes liés',
        'Statistiques partagées',
        'Support prioritaire',
      ],
      popular: true,
    },
    {
      name: 'Family',
      price: '9',
      period: 'mois',
      description: 'Pour toute la famille',
      features: [
        'Tout de Duo inclus',
        'Jusqu\'à 5 comptes',
        'Tableau de bord familial',
        'Support 24/7',
      ],
      popular: false,
    },
    {
      name: 'VIP',
      price: '12',
      period: 'mois',
      description: 'Le maximum d\'avantages',
      features: [
        'Tout de Family inclus',
        'Comptes illimités',
        'Cashback bonus +10%',
        'Concierge dédié',
        'Accès événements exclusifs',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B2635]/10 rounded-full border border-[#8B2635]/20">
            <Sparkles className="w-4 h-4 text-[#8B2635]" />
            <span className="text-sm text-[#8B2635] font-semibold">Tarifs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Choisissez Votre Formule<br />d'Abonnement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des formules adaptées à tous vos besoins pour maximiser vos économies avec MayaConnect
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 bg-white rounded-3xl border-2 transition-all ${
                plan.popular
                  ? 'border-[#8B2635] shadow-2xl scale-105 lg:scale-110'
                  : 'border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white text-sm font-semibold rounded-full">
                  Populaire
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}€</span>
                  <span className="text-gray-500">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[#8B2635] to-[#C13048] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#8B2635] to-[#C13048] text-white hover:shadow-lg hover:scale-105'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Choisir {plan.name}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
         
          <p className="text-sm text-gray-500">
            * Les prix sont indiqués en euros par mois. Facturation mensuelle.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

