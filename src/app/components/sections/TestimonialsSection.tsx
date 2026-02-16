import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    text: "Grâce à MayaConnect, j'ai économisé plus de 200€ en seulement 3 mois ! L'application est simple à utiliser et les économies s'accumulent rapidement. Je recommande à tous !",
    name: "Marie Lefèvre",
    role: "Étudiante",
    initial: "M"
  },
  {
    id: 2,
    text: "Avec MayaConnect, j'économise sur tous mes achats quotidiens. En quelques mois, j'ai déjà récupéré plus de 150€ ! C'est devenu un réflexe à chaque achat.",
    name: "Emily Anne Roberts",
    role: "Commerçante",
    initial: "E"
  },
  {
    id: 3,
    text: "MayaConnect m'a permis d'économiser plus de 300€ cette année ! Chaque achat me rapporte des économies, c'est génial. Je ne peux plus m'en passer !",
    name: "Jean Johnson",
    role: "Entrepreneur",
    initial: "J"
  },
  {
    id: 4,
    text: "En tant que famille nombreuse, MayaConnect nous fait économiser énormément ! Nous avons déjà récupéré plus de 500€ depuis le début de l'année. C'est une vraie aide !",
    name: "Alexander John Parker",
    role: "Manager Commercial",
    initial: "A"
  },
  {
    id: 5,
    text: "MayaConnect est devenu indispensable pour mes économies ! J'ai économisé près de 180€ en 2 mois simplement en faisant mes courses normalement. Incroyable !",
    name: "Sophie Martin",
    role: "Chef d'Entreprise",
    initial: "S"
  },
  {
    id: 6,
    text: "Grâce à MayaConnect, j'économise sur chaque achat sans effort. En 6 mois, j'ai récupéré plus de 400€ ! C'est l'application la plus utile que j'aie jamais téléchargée.",
    name: "Michael Edward Brooks",
    role: "Consultant Business",
    initial: "M"
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackAreaRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const totalCards = cards.length;

    if (totalCards === 0) return;

    // Set initial state: all cards invisible and below the viewport
    cards.forEach((card) => {
      gsap.set(card, {
        yPercent: 150,
        opacity: 1,
        scale: 0.92,
      });
    });

    // Refresh ScrollTrigger once all images above are loaded & layout is stable
    const refreshOnReady = () => ScrollTrigger.refresh();
    const imgLoadPromises = Array.from(document.images)
      .filter((img) => !img.complete)
      .map(
        (img) =>
          new Promise((r) => {
            img.onload = r;
            img.onerror = r;
          })
      );
    if (imgLoadPromises.length) {
      Promise.all(imgLoadPromises).then(refreshOnReady);
    } else {
      requestAnimationFrame(() => requestAnimationFrame(refreshOnReady));
    }

    // Also refresh whenever the page layout shifts
    const ro = new ResizeObserver(() => ScrollTrigger.refresh());
    ro.observe(document.body);

    // Create master timeline pinned to the section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalCards * 500 + 200}`,
        pin: true,
        scrub: 1,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    // Animate each card in sequence
    cards.forEach((card, i) => {
      // Alternating rotation: first card tilts left, second tilts right, etc.
      const rotation = i % 2 === 0 ? -2.5 : 2.5;
      // Small vertical offset for each stacked card to create depth - reduced for better visibility
      const stackOffsetY = -i * 4;

      tl.to(
        card,
        {
          yPercent: 0,
          y: stackOffsetY,
          rotation: rotation,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        i * 1.1 // stagger start time within the timeline
      );

      // When a new card arrives, slightly push down the previous ones for "settling"
      if (i > 0) {
        tl.to(
          cards[i - 1],
          {
            scale: 0.97,
            duration: 0.3,
          },
          i * 1.1 // same time as the new card starts
        );
      }
    });

    // Small hold at the end so the user sees the full stack before unpin
    tl.to({}, { duration: 0.5 });

    return () => {
      ro.disconnect();
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="pt-16 sm:pt-24 pb-12 sm:pb-16 flex flex-col items-center px-4 flex-shrink-0"
        >
          <div className="w-full max-w-4xl flex flex-col items-center text-center space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#8B2635]/10 rounded-full border border-[#8B2635]/20 mb-2">
              <Star className="w-4 h-4 text-[#8B2635] fill-[#8B2635]" />
              <span className="text-sm text-[#8B2635] font-semibold">Témoignages</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-3xl">
            Témoignages de nos utilisateurs</h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed mt-2">
              Découvrez comment MayaConnect aide des milliers de personnes à économiser de l'argent quotidiennement et à améliorer leur pouvoir d'achat.
            </p>
          </div>
        </motion.div>

        {/* Stacking area — flex centers the wrapper; cards are absolute inside */}
        <div
          ref={stackAreaRef}
          className="flex-1 relative flex items-center justify-center px-4 pb-20 sm:pb-32"
        >
          <div className="relative w-full max-w-[600px] h-[350px] sm:h-[450px]">
            {testimonials.slice(0, -1).map((testimonial, index) => (
              <div
                key={testimonial.id ?? index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="absolute inset-x-0 top-0 w-full max-w-[600px] bg-white border border-gray-200 rounded-3xl flex flex-col justify-end items-center px-6 py-8 sm:px-12 sm:py-12 shadow-xl"
                style={{
                  zIndex: index + 1,
                  willChange: "transform, opacity",
                }}
              >
                {/* Comment */}
                <p className="w-full font-normal text-base sm:text-lg sm:leading-relaxed text-gray-700 mb-6 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                {/* Avatar + Name */}
                <div className="w-full flex flex-row items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-bold text-base sm:text-lg text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="font-normal text-sm sm:text-base text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

