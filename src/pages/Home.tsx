import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Play, Calendar, Star, Clock, Settings, Euro, TrendingUp, MessageCircle, Wrench, CheckCircle, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const phrases = ["mientras duermes", "sin que tú hagas nada", "mientras atiendes clientes"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element && scrollContainerRef.current) {
      if (id === 'hero') {
        scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative w-full h-screen bg-black text-white selection:bg-white/30 font-sans overflow-hidden">
      
      {/* BACKGROUND VIDEO & CINEMATIC BARS */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover -translate-y-[8vh] lg:-translate-y-[15vh]"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_39uAMRdXtyPD0i1Kbmj8YAvTY0y/hf_20260418_155154_e4c21097-d55d-47ff-9b9e-fb9dd1c4216c.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Bars (Inward Gradient) */}
        {/* Top Bar - Narrower */}
        <div className="absolute top-0 left-0 right-0 h-[25vh] bg-gradient-to-b from-black via-black/80 to-transparent"></div>
        {/* Bottom Bar - Taller */}
        <div className="absolute bottom-0 left-0 right-0 h-[60vh] bg-gradient-to-t from-black via-black via-40% to-transparent"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 lg:px-[60px] py-4 lg:py-6">
        <div 
          className="text-[20px] font-bold tracking-[0.1em] uppercase animate-blur-fade-up cursor-pointer relative z-10" 
          style={{ animationDelay: '0ms' }}
          onClick={() => scrollTo('hero')}
        >
          JUANMA LÓPEZ
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-[32px] animate-blur-fade-up z-0" style={{ animationDelay: '100ms' }}>
          <button onClick={() => scrollTo('problema')} className="text-[13px] font-medium opacity-70 hover:opacity-100 transition-opacity">El problema</button>
          <button onClick={() => scrollTo('solucion')} className="text-[13px] font-medium opacity-70 hover:opacity-100 transition-opacity">La solución</button>
          <button onClick={() => scrollTo('quien-soy')} className="text-[13px] font-medium opacity-70 hover:opacity-100 transition-opacity">Quien soy</button>
          <button onClick={() => scrollTo('hablemos')} className="text-[13px] font-medium opacity-70 hover:opacity-100 transition-opacity">Hablemos</button>
        </div>

        <div className="flex gap-4 relative z-10">
          <button 
            className="lg:hidden w-10 h-10 rounded-full liquid-glass flex items-center justify-center animate-blur-fade-up relative"
            style={{ animationDelay: '350ms' }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`absolute transition-all duration-500 ease-out flex items-center justify-center ${menuOpen ? 'rotate-180 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}>
              <Menu size={18} />
            </div>
            <div className={`absolute transition-all duration-500 ease-out flex items-center justify-center ${menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-50 opacity-0'}`}>
              <X size={18} />
            </div>
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div 
        className={`fixed top-[72px] left-4 right-4 z-40 bg-gray-900/95 backdrop-blur-lg border border-gray-800 shadow-2xl rounded-2xl p-4 transition-all duration-500 ease-out lg:hidden ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-2">
          <button onClick={() => scrollTo('problema')} className="text-left px-3 py-3 rounded-lg hover:bg-gray-800/50 transition-colors text-sm">El problema</button>
          <button onClick={() => scrollTo('solucion')} className="text-left px-3 py-3 rounded-lg hover:bg-gray-800/50 transition-colors text-sm">La solución</button>
          <button onClick={() => scrollTo('quien-soy')} className="text-left px-3 py-3 rounded-lg hover:bg-gray-800/50 transition-colors text-sm">Quien soy</button>
          <button onClick={() => scrollTo('hablemos')} className="text-left px-3 py-3 rounded-lg hover:bg-gray-800/50 transition-colors text-sm">Hablemos</button>
        </div>
      </div>

      {/* SCROLLABLE SNAP CONTAINER - "Como si fuesen por tarjetas" */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="relative z-10 w-full h-screen overflow-y-auto lg:snap-y lg:snap-mandatory scroll-smooth" 
        style={{ scrollbarWidth: 'none' }}
      >
        
        {/* HERO SECTION */}
        <section id="hero" className="w-full h-screen lg:snap-start relative flex flex-col justify-end px-4 lg:px-[60px] pb-4 lg:pb-6 pt-24">
          <div className="flex flex-col lg:flex-row justify-between lg:items-end w-full gap-6">
            <div className="max-w-[800px] w-full">
              <div className="flex flex-wrap items-center gap-[20px] mb-[24px] text-[11px] uppercase tracking-[0.2em] text-[#a1a1aa] animate-blur-fade-up" style={{ animationDelay: '300ms' }}>
                <span className="flex items-center gap-1.5 font-medium"><Star size={16} fill="white" className="w-4 h-4 text-white" /> AI Solutions Designer</span>
                <span className="flex items-center gap-1.5"><Clock size={16} /> Automation</span>
                <span className="flex items-center gap-1.5"><Calendar size={16} /> Transformación Digital</span>
              </div>

              <div className="text-4xl lg:text-[64px] leading-[1.1] font-light tracking-[-0.04em] animate-blur-fade-up" style={{ animationDelay: '400ms' }}>
                <div>Tu negocio trabajando</div>
                <div className="relative h-[56px] lg:h-[84px] py-1 font-semibold overflow-hidden mt-1 text-white">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={index}
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -50, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="absolute"
                    >
                      {phrases[index]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap lg:justify-end gap-[16px] animate-blur-fade-up shrink-0 lg:pb-2" style={{ animationDelay: '600ms' }}>
              <a 
                href="https://calendly.com/juanmalopezz/15min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-black px-[36px] py-[14px] rounded-[9999px] font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <Calendar size={18} className="text-black" />
                Contactar
              </a>
              <Link 
                to="/cv" 
                className="liquid-glass px-[36px] py-[14px] rounded-[9999px] font-semibold flex items-center justify-center hover:scale-105 transition-transform text-white"
              >
                Mi trayectoria
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION: EL PROBLEMA */}
        <section id="problema" className="w-full min-h-[100dvh] lg:h-[100dvh] lg:snap-start flex items-start lg:items-center justify-center px-4 sm:px-12 relative pointer-events-auto pt-24 pb-12 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[1600px] xl:max-w-[92vw] flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:gap-6"
          >
            {/* Top Card (Full width but smaller) */}
            <div className="w-full lg:w-auto lg:col-span-4 liquid-glass rounded-[24px] p-6 lg:p-10 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] max-w-2xl mb-4">
                El día a día de un negocio es abrumador.
              </h3>
              <p className="text-[#a1a1aa] text-sm lg:text-base leading-relaxed max-w-3xl">
                Atención al cliente 24/7, montañas de documentos, facturas que registrar, procesos repetitivos que roban el tiempo que deberías invertir en pensar, liderar y hacer crecer tu empresa.
              </p>
            </div>

            {/* Left Card (Video) */}
            <div className="w-full lg:w-auto lg:col-span-1 liquid-glass rounded-[24px] overflow-hidden flex flex-col relative h-[300px] sm:h-[400px] lg:h-auto min-h-[300px]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_39uAMRdXtyPD0i1Kbmj8YAvTY0y/hf_20260418_163700_d7d44f23-4558-45e7-b62f-bbed940bb3e2.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Center Card (Big Text) */}
            <div className="w-full lg:w-auto lg:col-span-2 liquid-glass rounded-[24px] p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-start lg:items-center gap-4 mb-6">
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-[28px] leading-[1.2] font-medium pt-1 lg:pt-0">
                  Cada hora que pierdes gestionando es una hora que no vendes.
                </h3>
              </div>
              <p className="text-[#a1a1aa] text-base lg:text-lg leading-relaxed">
                Responder WhatsApps a las 11 de la noche, buscar en el excel quién no ha pagado, o llamar para confirmar citas que ya deberían estar confirmadas consume tu energía. <br/><br/>
                <strong className="text-white font-medium">Cada minuto invertido en tareas repetitivas es un minuto robado a la estrategia y crecimiento de tu negocio.</strong> Eso no es trabajar en tu negocio. Es trabajar para él.
              </p>
            </div>

            {/* Right Cards (3 small stats) */}
            <div className="w-full lg:w-auto lg:col-span-1 flex flex-col gap-4">
              
              <div className="liquid-glass rounded-[24px] p-6 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <Settings size={18} className="text-white" />
                  </div>
                  <span className="text-2xl font-semibold">73%</span>
                </div>
                <p className="text-sm text-[#a1a1aa] leading-snug">de tareas repetitivas se pueden automatizar.</p>
              </div>

              <div className="liquid-glass rounded-[24px] p-6 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <Euro size={18} className="text-white" />
                  </div>
                  <span className="text-2xl font-semibold">600€</span>
                </div>
                <p className="text-sm text-[#a1a1aa] leading-snug">de media al mes se pierden en tareas manuales.</p>
              </div>

              <div className="liquid-glass rounded-[24px] p-6 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <TrendingUp size={18} className="text-white" />
                  </div>
                  <span className="text-2xl font-semibold">3.2h</span>
                </div>
                <p className="text-sm text-[#a1a1aa] leading-snug">de media diaria perdidas en tareas que una máquina puede hacer sola.</p>
              </div>

            </div>
          </motion.div>
        </section>

        {/* SECTION: LA SOLUCION */}
        <section id="solucion" className="w-full min-h-[100dvh] lg:h-[100dvh] lg:snap-start flex items-start lg:items-center justify-center px-4 sm:px-12 relative pointer-events-auto pt-24 pb-12 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[1600px] xl:max-w-[92vw] flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-3 gap-4 lg:gap-6"
          >
            {/* Top Card */}
            <div className="w-full lg:w-auto lg:col-span-4 lg:row-span-1 lg:col-start-1 lg:row-start-1 liquid-glass rounded-[24px] p-6 lg:p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.2] max-w-none w-full mb-6 lg:mb-8">
                Inteligencia Artificial aplicada a tu realidad.
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
                <div className="flex flex-row items-start text-left gap-4">
                  <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <Menu size={20} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium text-white mb-1">Chatbots Inteligentes</h4>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">Responden consultas complejas y atienden clientes 24/7 sin descanso.</p>
                  </div>
                </div>
                
                <div className="flex flex-row items-start text-left gap-4">
                  <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <SearchIcon size={20} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium text-white mb-1">Agentes RAG</h4>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">Encuentra respuestas inmediatas buscando en tus propios documentos.</p>
                  </div>
                </div>

                <div className="flex flex-row items-start text-left gap-4">
                  <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <SettingsIcon size={20} className="text-white" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-lg font-medium text-white mb-1">Automatización Total</h4>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">Tus datos fluyen solos entre emails, facturas y hojas de cálculo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Card (Paso 1) */}
            <div className="w-full lg:w-auto lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-2 liquid-glass rounded-[24px] p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-start lg:items-center gap-4 mb-6">
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <h4 className="text-xl lg:text-2xl font-medium text-white pt-1 lg:pt-0">Paso 1. Me cuentas tu negocio</h4>
              </div>
              <p className="text-[#a1a1aa] text-sm lg:text-base leading-relaxed">
                Una llamada o un WhatsApp. Me explicas cómo funciona tu día a día, qué se repite, qué te quita tiempo y dónde están los cuellos de botella.<br/><br/>No hace falta que sepas nada de tecnología — identificaremos juntos las oportunidades reales.
              </p>
            </div>

            {/* Center Top (Paso 2) */}
            <div className="w-full lg:w-auto lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-2 liquid-glass rounded-[24px] p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-start lg:items-center gap-4 mb-4">
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <Wrench size={20} className="text-white" />
                </div>
                <h4 className="text-xl lg:text-2xl font-medium text-white pt-1 lg:pt-0">Paso 2. Lo monto yo</h4>
              </div>
              <p className="text-[#a1a1aa] text-sm lg:text-base leading-relaxed">
                Diseño el ecosistema a medida de lo que necesitas, me encargo de todo el código y lo conecto con las herramientas que ya usas diariamente. Lo pongo a prueba rigurosamente hasta que funciona solo para asegurarte una fiabilidad absoluta sin que tú tengas que tocar nada técnico.
              </p>
            </div>

            {/* Center Bottom (Paso 3) */}
            <div className="w-full lg:w-auto lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-3 liquid-glass rounded-[24px] p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-start lg:items-center gap-4 mb-4">
                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle size={20} className="text-white" />
                </div>
                <h4 className="text-xl lg:text-2xl font-medium text-white pt-1 lg:pt-0">Paso 3. Funciona solo. Tú solo supervisas.</h4>
              </div>
              <p className="text-[#a1a1aa] text-sm lg:text-base leading-relaxed">
                El sistema trabaja de fondo mientras tú atiendes a clientes, descansas o haces lo que realmente importa. Ganas un control absoluto y recuperas tu tiempo. Solo te avisará cuando necesite de tu criterio humano para decisiones clave; el resto lo gestionará en piloto automático.
              </p>
            </div>

            {/* Right Card (Video) */}
            <div className="w-full lg:w-auto lg:col-span-1 lg:row-span-2 lg:col-start-4 lg:row-start-2 liquid-glass rounded-[24px] overflow-hidden flex flex-col relative h-[300px] sm:h-[400px] lg:h-auto min-h-[300px]">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_39uAMRdXtyPD0i1Kbmj8YAvTY0y/hf_20260418_171506_002a5b14-e72b-406d-b4b9-5986f330ad59.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </section>

        {/* SECTION: QUIEN SOY */}
        <section id="quien-soy" className="w-full min-h-[100dvh] lg:h-[100dvh] lg:snap-start flex items-start lg:items-center justify-center px-4 sm:px-12 relative pointer-events-auto pt-24 pb-12 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[1600px] xl:max-w-[92vw] flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-6 h-auto lg:min-h-[60vh] xl:min-h-[65vh] xl:max-h-[85vh]"
          >
            {/* Left Card (Photo) */}
            <div className="w-full lg:w-auto h-[400px] lg:h-full lg:min-h-[400px] lg:col-span-1 liquid-glass rounded-[24px] overflow-hidden relative">
              <img 
                src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_39uAMRdXtyPD0i1Kbmj8YAvTY0y%2Fhf_20260418_173048_8cfa5b41-6c15-4c72-8092-217aa9f2dd7d.png&w=1280&q=85" 
                alt="Juanma López"
                referrerPolicy="no-referrer"
                className="absolute w-full h-full object-cover object-[50%_15%]"
              />
            </div>

            {/* Right Card (Text) */}
            <div className="w-full lg:w-auto lg:col-span-2 liquid-glass rounded-[24px] p-8 lg:px-12 lg:py-10 flex flex-col justify-center items-center text-center">
              <h3 className="text-3xl sm:text-4xl xl:text-5xl font-medium mb-6">Soy Juanma López.</h3>
              
              <p className="text-[#a1a1aa] text-base lg:text-[17px] xl:text-lg leading-relaxed w-full mb-4">
                Llevo una década trabajando en tecnología — desarrollo de software, consultoría IT, gestión de proyectos. El tipo de trabajo que no se ve pero que hace que las cosas funcionen solas. A lo largo de mi carrera, he comprobado que el mayor recurso de cualquier profesional no es el capital, sino su tiempo.
              </p>
              
              <p className="text-[#a1a1aa] text-base lg:text-[17px] xl:text-lg leading-relaxed w-full mb-4">
                Esas herramientas que usan las empresas grandes para no perder tiempo ni dinero también están al alcance de un negocio pequeño. <strong className="text-white font-medium">La diferencia es que alguien tiene que entender la tecnología y, a la vez, entender cómo funciona un negocio local. Yo soy ese alguien.</strong>
              </p>

              <p className="text-[#a1a1aa] text-base lg:text-[17px] xl:text-lg leading-relaxed w-full mb-4">
                Mi objetivo no es instalarte software genérico y desaparecer. Mi meta es auditar tus procesos, detectar cuellos de botella y diseñar un ecosistema en piloto automático que trabaje para ti 24/7.
              </p>
              
              <p className="text-[#a1a1aa] text-base lg:text-[17px] xl:text-lg leading-relaxed w-full">
                Si algo de lo que has leído te cuadra, escríbeme y me cuentas cómo tienes tu negocio. Sin compromiso, miramos juntos qué piezas podemos automatizar hoy mismo.
              </p>

              <Link to="/cv" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform w-[max-content] mt-6 lg:mt-8">
                Leer mi trayectoria completa <Play size={16} fill="black" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* SECTION: HABLEMOS */}
        <section id="hablemos" className="w-full min-h-[100dvh] lg:h-[100dvh] lg:snap-start flex flex-col items-center justify-center px-4 sm:px-12 relative pointer-events-auto pt-24 pb-8 lg:pt-28 lg:pb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[1600px] xl:max-w-[92vw] flex flex-col gap-4 lg:gap-6 flex-1 lg:flex-none justify-center"
          >
            {/* Top Area: Splitted Desktop */}
            <div className="w-full flex flex-col lg:grid lg:grid-cols-[4fr_6fr] xl:grid-cols-[3.5fr_6.5fr] gap-4 lg:gap-6">
              
              {/* Left Card: Video */}
              <div className="w-full h-[300px] sm:h-[350px] lg:h-auto liquid-glass rounded-[24px] lg:rounded-[32px] overflow-hidden relative border border-white/10">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="https://d8j0ntlcm91z4.cloudfront.net/user_39uAMRdXtyPD0i1Kbmj8YAvTY0y/hf_20260418_183022_75111356-1725-4629-97c6-4fa8054b3454.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Right Card: Contact Form */}
              <div className="w-full liquid-glass rounded-[24px] lg:rounded-[32px] p-6 sm:p-10 lg:p-8 xl:p-12 text-center flex flex-col items-center justify-center">
                <h3 className="text-3xl lg:text-4xl xl:text-[40px] font-medium mb-6 sm:mb-8 w-full xl:leading-tight">Empieza tu transformación.</h3>
                
                <div className="flex flex-col min-[450px]:flex-row flex-wrap justify-center items-center gap-4 lg:gap-6 w-full max-w-[600px] mx-auto">
                  <a 
                    href="https://calendly.com/juanmalopezz/15min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full min-[450px]:w-[270px] flex items-center justify-center gap-3 bg-white text-black rounded-full font-medium py-3.5 sm:py-4 hover:scale-105 transition-transform text-center shrink-0"
                  >
                    <Calendar className="w-5 h-5 shrink-0" />
                    Agendar reunión
                  </a>
                  <a 
                    href="https://wa.me/34657372039" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-[450px]:w-[270px] flex items-center justify-center gap-3 liquid-glass !bg-[#25D366]/10 !border-[#25D366]/30 rounded-full font-medium py-3.5 sm:py-4 text-white hover:scale-105 transition-transform text-center shrink-0"
                  >
                    <WhatsappIcon className="w-5 h-5 shrink-0" />
                    Escríbeme por Whatsapp
                  </a>
                  <a 
                    href="mailto:juanmalopez9@gmail.com" 
                    className="w-full min-[450px]:w-[270px] flex items-center justify-center gap-3 liquid-glass rounded-full font-medium py-3.5 sm:py-4 text-white hover:scale-105 transition-transform text-center shrink-0"
                  >
                    <Mail className="w-5 h-5 shrink-0" />
                    Contacta por correo
                  </a>
                </div>
                
                <div className="mt-8 lg:mt-10 pt-6 border-t border-white/10 w-full">
                  <p className="text-sm lg:text-base text-[#a1a1aa] max-w-xl mx-auto leading-relaxed">
                    Contacta conmigo a través de cualquier método disponible y descubriremos cómo podemos ahorrarte tiempo e impulsar tu productividad de manera medible.
                  </p>
                </div>
              </div>

            </div>

            {/* KIT DIGITAL */}
            <div className="w-full liquid-glass rounded-[24px] p-6 lg:p-8 text-center mt-2 lg:mt-0">
              <p className="text-[#a1a1aa] text-sm lg:text-base leading-relaxed">
                <strong className="text-amber-400 font-medium tracking-wide">Kit Digital:</strong> Si tienes entre 0 y 49 empleados, puede que parte de esto lo cubra el Kit Digital — pregúntame y te cuento sin rodeos.
              </p>
            </div>
          </motion.div>

          {/* FOOTER */}
          <div className="w-full max-w-7xl mt-16 pt-8 pb-4 text-center border-t border-white/10 shrink-0">
            <p className="text-sm text-[#a1a1aa]">© 2026 Juanma López · juanmalopez.net</p>
          </div>
        </section>

      </div>

      {/* SCROLL TO TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollTo('hero')}
            className="fixed bottom-10 lg:bottom-14 left-6 lg:left-10 z-[100] liquid-glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all text-white border border-white/20"
            aria-label="Volver arriba"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function SearchIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
  );
}

function WhatsappIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );
}
