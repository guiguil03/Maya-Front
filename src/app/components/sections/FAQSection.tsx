import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
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
                  MayaConnect est une application qui vous permet d'économiser de l'argent sur tous vos achats quotidiens. Scannez simplement un QR code chez nos partenaires et économisez instantanément sur chaque achat.
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
                <h3 className="text-lg font-bold text-gray-900">Comment économiser avec MayaConnect ?</h3>
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
                  Après chaque achat chez un partenaire MayaConnect, scannez le QR code du commerçant. Vos économies sont automatiquement calculées et ajoutées à votre compte MayaConnect en temps réel. Vous pouvez ensuite les retirer ou les utiliser pour vos prochains achats.
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
                  Oui, MayaConnect est 100% gratuite pour tous les utilisateurs ! Il n'y a aucun frais d'inscription, d'utilisation ou de retrait. Vous gardez l'intégralité de vos économies.
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
                <h3 className="text-lg font-bold text-gray-900">Quand puis-je voir mes économies ?</h3>
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
                  Vos économies sont créditées instantanément sur votre compte MayaConnect dès que vous scannez le QR code et validez votre achat. Vous pouvez les voir apparaître en temps réel dans votre historique de transactions.
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
  );
}

