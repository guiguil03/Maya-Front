import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const faqItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const faqItems = faqItemsRef.current.filter(Boolean) as HTMLDivElement[];
    
    if (faqItems.length === 0) return;

    // Initialiser l'état des FAQ (fermer toutes sauf la première)
    faqItems.forEach((item, index) => {
      const content = item.querySelector('.faq-content') as HTMLElement;
      const icon = item.querySelector('.faq-icon') as HTMLElement;
      
      if (content && icon) {
        if (index === 0) {
          // Première FAQ ouverte par défaut
          gsap.set(content, { height: "auto", opacity: 1 });
          gsap.set(icon, { rotation: 180 });
        } else {
          // Autres FAQ fermées
          gsap.set(content, { height: 0, opacity: 0 });
          gsap.set(icon, { rotation: 0 });
        }
      }
    });

    // Animation d'apparition au scroll pour chaque élément FAQ
    faqItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Animation GSAP pour l'ouverture/fermeture des FAQ
  const toggleFaq = (index: number) => {
    const isOpening = openFaq !== index;
    setOpenFaq(isOpening ? index : null);

    const item = faqItemsRef.current[index];
    if (!item) return;

    const content = item.querySelector('.faq-content') as HTMLElement;
    const icon = item.querySelector('.faq-icon') as HTMLElement;
    
    if (!content || !icon) return;

    if (isOpening) {
      // Fermer les autres FAQ
      faqItemsRef.current.forEach((otherItem, i) => {
        if (i !== index && otherItem) {
          const otherContent = otherItem.querySelector('.faq-content') as HTMLElement;
          const otherIcon = otherItem.querySelector('.faq-icon') as HTMLElement;
          if (otherContent && otherIcon) {
            gsap.to(otherContent, {
              height: 0,
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
            gsap.to(otherIcon, {
              rotation: 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
          }
        }
      });

      // Ouvrir la FAQ sélectionnée
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
      gsap.to(icon, {
        rotation: 180,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      // Fermer la FAQ
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(icon, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section ref={sectionRef} id="faq" className="relative py-32 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-20"
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
          <div
            ref={(el) => {
              faqItemsRef.current[0] = el;
            }}
          >
            <button
              onClick={() => toggleFaq(0)}
              className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B2635] transition-colors">
                  Qu'est-ce que MayaConnect ?
                </h3>
                <div className="faq-icon">
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-[#8B2635] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="faq-content overflow-hidden">
                <p className="text-gray-600 mt-4 leading-relaxed">
                  MayaConnect est une application qui vous permet d'économiser de l'argent sur tous vos achats quotidiens. Scannez simplement un QR code chez nos partenaires et économisez instantanément sur chaque achat.
                </p>
              </div>
            </button>
          </div>

          {/* FAQ 2 */}
          <div
            ref={(el) => {
              faqItemsRef.current[1] = el;
            }}
          >
            <button
              onClick={() => toggleFaq(1)}
              className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B2635] transition-colors">
                  Comment économiser avec MayaConnect ?
                </h3>
                <div className="faq-icon">
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-[#8B2635] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="faq-content overflow-hidden">
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Après chaque achat chez un partenaire MayaConnect, scannez le QR code du commerçant. Vos économies sont automatiquement calculées et ajoutées à votre compte MayaConnect en temps réel. Vous pouvez ensuite les retirer ou les utiliser pour vos prochains achats.
                </p>
              </div>
            </button>
          </div>

          {/* FAQ 3 */}
          <div
            ref={(el) => {
              faqItemsRef.current[2] = el;
            }}
          >
            <button
              onClick={() => toggleFaq(2)}
              className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B2635] transition-colors">
                  MayaConnect est-elle gratuite ?
                </h3>
                <div className="faq-icon">
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-[#8B2635] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="faq-content overflow-hidden">
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Oui, MayaConnect est 100% gratuite pour tous les utilisateurs ! Il n'y a aucun frais d'inscription, d'utilisation ou de retrait. Vous gardez l'intégralité de vos économies.
                </p>
              </div>
            </button>
          </div>

          {/* FAQ 4 */}
          <div
            ref={(el) => {
              faqItemsRef.current[3] = el;
            }}
          >
            <button
              onClick={() => toggleFaq(3)}
              className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B2635] transition-colors">
                  Quand puis-je voir mes économies ?
                </h3>
                <div className="faq-icon">
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-[#8B2635] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="faq-content overflow-hidden">
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Vos économies sont créditées instantanément sur votre compte MayaConnect dès que vous scannez le QR code et validez votre achat. Vous pouvez les voir apparaître en temps réel dans votre historique de transactions.
                </p>
              </div>
            </button>
          </div>

          {/* FAQ 5 */}
          <div
            ref={(el) => {
              faqItemsRef.current[4] = el;
            }}
          >
            <button
              onClick={() => toggleFaq(4)}
              className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B2635] transition-colors">
                  Puis-je utiliser MayaConnect partout ?
                </h3>
                <div className="faq-icon">
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-[#8B2635] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="faq-content overflow-hidden">
                <p className="text-gray-600 mt-4 leading-relaxed">
                  MayaConnect fonctionne chez tous nos commerçants partenaires. Nous avons plus de 500 partenaires dans différentes catégories : restaurants, commerces, supermarchés, et bien plus. Consultez la carte interactive dans l'app pour trouver les partenaires près de chez vous.
                </p>
              </div>
            </button>
          </div>

          {/* FAQ 6 */}
          <div
            ref={(el) => {
              faqItemsRef.current[5] = el;
            }}
          >
            <button
              onClick={() => toggleFaq(5)}
              className="w-full p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all duration-300 text-left group"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8B2635] transition-colors">
                  Comment devenir partenaire MayaConnect ?
                </h3>
                <div className="faq-icon">
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-[#8B2635] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="faq-content overflow-hidden">
                <p className="text-gray-600 mt-4 leading-relaxed">
                  Si vous êtes commerçant et souhaitez rejoindre MayaConnect, cliquez sur "Devenir Partenaire" et remplissez le formulaire d'inscription. Notre équipe vous contactera dans les 48h pour finaliser votre inscription et configurer votre compte.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

