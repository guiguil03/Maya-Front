import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import '../../../styles/slider.css';

// Custom Arrow Components
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute -right-4 sm:-right-6 md:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-[#8B2635] rounded-full shadow-xl flex items-center justify-center hover:bg-[#C13048] transition-all text-white group"
    aria-label="Next testimonial"
  >
    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute -left-4 sm:-left-6 md:-left-8 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-[#8B2635] rounded-full shadow-xl flex items-center justify-center hover:bg-[#C13048] transition-all text-white group"
    aria-label="Previous testimonial"
  >
    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
  </button>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-24 lg:py-32 pb-20 sm:pb-24 lg:pb-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 sm:space-y-6 mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#8B2635]/10 rounded-full border border-[#8B2635]/20">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-[#8B2635] fill-[#8B2635]" />
            <span className="text-xs sm:text-sm text-[#8B2635] font-semibold">Témoignages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight px-4">
            Histoires Réelles d'Utilisateurs<br className="hidden sm:block" />Qui Économisent avec MayaConnect
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-3xl mx-auto px-4">
            Découvrez comment MayaConnect aide des milliers de personnes à économiser de l'argent quotidiennement et à améliorer leur pouvoir d'achat.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative px-8 sm:px-12 md:px-16 lg:px-20">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={3}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={4000}
            pauseOnHover={true}
            cssEase="ease-in-out"
            swipeToSlide={true}
            touchThreshold={10}
            arrows={true}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            centerMode={false}
            responsive={[
              {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: true,
                  centerMode: false,
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: true,
                  centerMode: false,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: true,
                  centerMode: false,
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: true,
                  centerMode: true,
                  centerPadding: '20px',
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: true,
                  centerMode: true,
                  centerPadding: '10px',
                }
              }
            ]}
          >
            {/* Testimonial 1 */}
            <div className="px-1.5 sm:px-2 md:px-3">
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px] md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 flex-grow">
                  "Grâce à MayaConnect, j'ai économisé plus de 200€ en seulement 3 mois ! L'application est simple à utiliser et les économies s'accumulent rapidement. Je recommande à tous !"
                </p>
                
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mt-auto">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold flex-shrink-0 shadow-md">
                    M
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base truncate">Marie Lefèvre</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">Étudiante</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="px-1.5 sm:px-2 md:px-3">
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px] md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 flex-grow">
                  "Avec MayaConnect, j'économise sur tous mes achats quotidiens. En quelques mois, j'ai déjà récupéré plus de 150€ ! C'est devenu un réflexe à chaque achat."
                </p>
                
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mt-auto">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold flex-shrink-0 shadow-md">
                    E
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base truncate">Emily Anne Roberts</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">Commerçante</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="px-1.5 sm:px-2 md:px-3">
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px] md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 flex-grow">
                  "MayaConnect m'a permis d'économiser plus de 300€ cette année ! Chaque achat me rapporte des économies, c'est génial. Je ne peux plus m'en passer !"
                </p>
                
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mt-auto">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold flex-shrink-0 shadow-md">
                    J
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base truncate">Jean Johnson</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">Entrepreneur</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="px-1.5 sm:px-2 md:px-3">
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px] md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 flex-grow">
                  "En tant que famille nombreuse, MayaConnect nous fait économiser énormément ! Nous avons déjà récupéré plus de 500€ depuis le début de l'année. C'est une vraie aide !"
                </p>
                
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mt-auto">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold flex-shrink-0 shadow-md">
                    A
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base truncate">Alexander John Parker</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">Manager Commercial</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="px-1.5 sm:px-2 md:px-3">
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px] md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 flex-grow">
                  "MayaConnect est devenu indispensable pour mes économies ! J'ai économisé près de 180€ en 2 mois simplement en faisant mes courses normalement. Incroyable !"
                </p>
                
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mt-auto">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold flex-shrink-0 shadow-md">
                    S
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base truncate">Sophie Martin</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">Chef d'Entreprise</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="px-1.5 sm:px-2 md:px-3">
              <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border border-gray-200 hover:border-[#8B2635]/30 hover:shadow-xl transition-all h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-[15px] md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 flex-grow">
                  "Grâce à MayaConnect, j'économise sur chaque achat sans effort. En 6 mois, j'ai récupéré plus de 400€ ! C'est l'application la plus utile que j'aie jamais téléchargée."
                </p>
                
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mt-auto">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#8B2635] to-[#C13048] rounded-full flex items-center justify-center text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold flex-shrink-0 shadow-md">
                    M
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-gray-900 text-xs sm:text-sm md:text-base truncate">Michael Edward Brooks</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">Consultant Business</div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          {/* Custom dots styling for testimonials */}
          <style>{`
            #testimonials .slick-dots {
              bottom: -40px !important;
              margin-top: 24px;
            }
            #testimonials .slick-dots li button:before {
              color: #8B2635 !important;
              font-size: 10px !important;
              opacity: 0.3 !important;
            }
            #testimonials .slick-dots li.slick-active button:before {
              color: #8B2635 !important;
              opacity: 1 !important;
              font-size: 12px !important;
            }
            @media (max-width: 640px) {
              #testimonials .slick-dots {
                bottom: -35px !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

