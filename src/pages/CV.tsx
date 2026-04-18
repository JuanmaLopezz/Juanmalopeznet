import React from 'react';
import { ArrowLeft, Briefcase, Code, GraduationCap, FolderGit2, Link as LinkIcon, ExternalLink, Mail, Calendar, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CV() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/30 p-4 sm:p-8 md:p-16 relative">
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-50"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(30, 41, 59, 1) 0%, rgba(0,0,0,1) 100%)'
        }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10 animate-blur-fade-up" style={{ animationDelay: '0ms' }}>
        <Link to="/" className="inline-flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight mb-4">Juanma López</h1>
          <h2 className="text-xl sm:text-2xl text-[#a1a1aa] font-light mb-8">Consultor Tecnológico / Analista de IA y Automatización</h2>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-8">
            <a href="https://calendly.com/juanmalopezz/15min" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2">
              <Calendar size={16} /> Agendar
            </a>
            <a href="mailto:juanmalopez9@gmail.com" className="liquid-glass px-6 py-2.5 rounded-full text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Mail size={16} /> juanmalopez9@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/juanmalopez-tech/" target="_blank" rel="noopener noreferrer" className="liquid-glass px-6 py-2.5 rounded-full text-[#3b82f6] font-medium text-sm hover:bg-[#3b82f6]/10 border border-[#3b82f6]/30 transition-colors flex items-center justify-center gap-2">
              <Linkedin size={16} /> Linkedin
            </a>
            <a href="https://github.com/JuanmaLopezz" target="_blank" rel="noopener noreferrer" className="liquid-glass px-6 py-2.5 rounded-full text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Github size={16} /> GitHub
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-12 lg:gap-16">
          <div className="space-y-16">
            
            {/* PROYECTOS DESTACADOS */}
            <section>
              <h3 className="flex items-center gap-3 text-2xl font-medium mb-6 border-b border-white/10 pb-4">
                <FolderGit2 size={24} className="text-[#a1a1aa]" /> Proyectos Destacados
              </h3>
              
              <div className="space-y-8">
                <div className="relative pl-6 border-l border-white/10 group">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-xl font-medium text-white">DocuSense</h4>
                    <a href="https://github.com/JuanmaLopezz/DocuSense" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors liquid-glass px-3 py-1 rounded-full w-[max-content]">
                      <Github size={12} /> Ver en GitHub <ExternalLink size={12} />
                    </a>
                  </div>
                  <p className="text-[#a1a1aa] leading-relaxed mb-4">
                    <strong>Pregunta a tus documentos de negocio en lenguaje natural y obtén respuestas precisas con cita a la fuente.</strong>
                  </p>
                  <p className="text-sm text-[#a1a1aa] mb-4">
                    Sistema avanzado de Búsqueda y Generación Aumentada (RAG) diseñado para entornos corporativos. Permite la ingesta de documentos complejos (PDFs, Excels, Word), procesado, vectorización en bases de datos orientadas a IA, y consulta directa con modelos de lenguaje.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="text-[11px] uppercase tracking-wider text-white/50 border border-white/10 px-2 py-0.5 rounded-md">Python</span>
                    <span className="text-[11px] uppercase tracking-wider text-white/50 border border-white/10 px-2 py-0.5 rounded-md">Google AI Studio</span>
                    <span className="text-[11px] uppercase tracking-wider text-white/50 border border-white/10 px-2 py-0.5 rounded-md">Supabase</span>
                    <span className="text-[11px] uppercase tracking-wider text-white/50 border border-white/10 px-2 py-0.5 rounded-md">Clerk</span>
                  </div>
                </div>
              </div>
            </section>

            {/* TRAYECTORIA */}
            <section>
              <h3 className="flex items-center gap-3 text-2xl font-medium mb-6 border-b border-white/10 pb-4">
                <Briefcase size={24} className="text-[#a1a1aa]" /> Trayectoria y Experiencia
              </h3>
              
              <div className="space-y-8">
                <div className="relative pl-6 border-l border-white/10 group">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1.5 group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-shadow"></div>
                  <h4 className="text-xl font-medium">Consultor de Transformación Digital e IA</h4>
                  <p className="text-sm text-[#a1a1aa] mb-3">Independiente | Presente</p>
                  <ul className="text-[#a1a1aa] space-y-2 list-disc list-inside">
                    <li>Diseño e implementación de sistemas de inteligencia artificial para PYMES.</li>
                    <li>Creación de Agentes RAG (Retrieval-Augmented Generation) para consulta interna de base documental de empresas.</li>
                    <li>Automatización de flujos de trabajo (CRM, Facturación, Excel) reduciendo el tiempo de tareas manuales en más de un 80%.</li>
                    <li>Desarrollo de chatbots de atención al cliente 24/7 avanzados con integración directa a bases de datos y calendarios.</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[6.5px] top-1.5"></div>
                  <h4 className="text-xl font-medium text-gray-300">Senior Core Banking & Energy Consultant (COBOL/AS400)</h4>
                  <p className="text-sm text-[#a1a1aa] mb-3">Sectores Banca y Energía | +10 Años de Experiencia</p>
                  <ul className="text-[#a1a1aa] space-y-2 list-disc list-inside">
                    <li>Más de diez años liderando migraciones, soporte y desarrollo core en sistemas heredados (Legacy Systems) para multinacionales financieras y energéticas.</li>
                    <li>Programación avanzada, refactorización y despliegue en entornos IBM AS/400 (iSeries) y COBOL.</li>
                    <li>Auditoría de datos críticos, optimización de transacciones por lotes (batch) y arquitectura orientada a la disponibilidad 24/7.</li>
                    <li>Profundo conocimiento de la operativa de bajo nivel y procesos transaccionales masivos empresariales.</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-gray-700 rounded-full -left-[6.5px] top-1.5"></div>
                  <h4 className="text-xl font-medium text-gray-400">Analista Tecnológico de Negocios</h4>
                  <p className="text-sm text-[#a1a1aa] mb-3">Consultoría Tecnológica</p>
                  <ul className="text-[#a1a1aa] space-y-2 list-disc list-inside">
                    <li>Análisis profundo de puntos de fricción en procesos operativos empresariales.</li>
                    <li>Implementación de soluciones tecnológicas integradas para reingeniería de procesos.</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          <div className="space-y-12">
            
            {/* TECNOLOGIAS */}
            <section className="liquid-glass rounded-[24px] p-6 sm:p-8">
              <h3 className="flex items-center gap-3 text-xl font-medium mb-6">
                <Code size={20} className="text-white" /> Stack Tecnológico
              </h3>
              
              <div className="flex flex-col gap-6">
                
                <div>
                  <h4 className="text-[11px] uppercase tracking-widest text-[#a1a1aa] mb-3">Inteligencia Artificial</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white font-medium">Claude</span>
                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white font-medium">Google AI Studio</span>
                    <span className="px-3 py-1.5 liquid-glass rounded-lg text-sm">Agents / RAG</span>
                    <span className="px-3 py-1.5 liquid-glass rounded-lg text-sm">Prompt Engineering</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] uppercase tracking-widest text-[#a1a1aa] mb-3">Core & Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white font-medium">Python</span>
                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white font-medium">Supabase</span>
                    <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white font-medium">Clerk</span>
                    <span className="px-3 py-1.5 liquid-glass rounded-lg text-sm">Node.js</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] uppercase tracking-widest text-[#a1a1aa] mb-3">Automatización & Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 liquid-glass rounded-lg text-sm">React</span>
                    <span className="px-3 py-1.5 liquid-glass rounded-lg text-sm">Make / n8n</span>
                    <span className="px-3 py-1.5 liquid-glass rounded-lg text-sm">Tailwind CSS</span>
                  </div>
                </div>

              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
