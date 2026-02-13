import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import Slider from 'react-slick';
import '../../../styles/slider.css';

export default function TestimonialsSection() {
  return (
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
            Histoires Réelles d'Utilisateurs<br />Qui Économisent avec Maya
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Découvrez comment Maya aide des milliers de personnes à économiser de l'argent quotidiennement et à améliorer leur pouvoir d'achat.
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
                  "Grâce à Maya, j'ai économisé plus de 200€ en seulement 3 mois ! L'application est simple à utiliser et les économies s'accumulent rapidement. Je recommande à tous !"
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
                  "Avec Maya, j'économise sur tous mes achats quotidiens. En quelques mois, j'ai déjà récupéré plus de 150€ ! C'est devenu un réflexe à chaque achat."
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
                  "Maya m'a permis d'économiser plus de 300€ cette année ! Chaque achat me rapporte des économies, c'est génial. Je ne peux plus m'en passer !"
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
                  "En tant que famille nombreuse, Maya nous fait économiser énormément ! Nous avons déjà récupéré plus de 500€ depuis le début de l'année. C'est une vraie aide !"
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
                  "Maya est devenu indispensable pour mes économies ! J'ai économisé près de 180€ en 2 mois simplement en faisant mes courses normalement. Incroyable !"
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
                  "Grâce à Maya, j'économise sur chaque achat sans effort. En 6 mois, j'ai récupéré plus de 400€ ! C'est l'application la plus utile que j'aie jamais téléchargée."
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
  );
}

