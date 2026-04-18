import React from 'react';
import { ArrowLeft, Briefcase, Code, GraduationCap, Link2, User } from 'lucide-react';
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
      
      <div className="max-w-4xl mx-auto relative z-10 animate-blur-fade-up" style={{ animationDelay: '0ms' }}>
        <Link to="/" className="inline-flex items-center gap-2 text-[#a1a1aa] hover:text-white transition-colors mb-12">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight mb-4">Juanma López</h1>
          <h2 className="text-xl sm:text-2xl text-[#a1a1aa] font-light mb-6">Consultor Tecnológico / Analista de IA y Automatización</h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://calendly.com/juanmalopezz/15min" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">
              Contactar
            </a>
            <a href="mailto:hola@juanmalopez.net" className="liquid-glass px-6 py-2 rounded-full text-white font-medium text-sm hover:bg-white/10 transition-colors">
              hola@juanmalopez.net
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            
            {/* TRAYECTORIA */}
            <section>
              <h3 className="flex items-center gap-3 text-2xl font-medium mb-6 border-b border-white/10 pb-4">
                <Briefcase size={24} className="text-[#a1a1aa]" /> Trayectoria y Experiencia
              </h3>
              
              <div className="space-y-8">
                <div className="relative pl-6 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
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
                  <h4 className="text-xl font-medium">Analista Tecnológico de Negocios</h4>
                  <p className="text-sm text-[#a1a1aa] mb-3">Consultoría Tecnológica</p>
                  <ul className="text-[#a1a1aa] space-y-2 list-disc list-inside">
                    <li>Análisis profundo de puntos de fricción en procesos operativos empresariales.</li>
                    <li>Implementación de soluciones tecnológicas integradas.</li>
                    <li>Auditoría de datos para la mejora de la toma de decisiones directivas.</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          <div className="space-y-12">
            
            {/* TECNOLOGIAS */}
            <section>
              <h3 className="flex items-center gap-3 text-2xl font-medium mb-6 border-b border-white/10 pb-4">
                <Code size={24} className="text-[#a1a1aa]" /> Stack Tecnológico
              </h3>
              
              <div className="flex flex-col gap-4">
                
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#a1a1aa] mb-3">Core & Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">Supabase</span>
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">PostgreSQL</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#a1a1aa] mb-3">Inteligencia Artificial</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">Google AI Studio</span>
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">Agents / RAG</span>
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">Prompt Engineering</span>
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">Langchain</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm uppercase tracking-widest text-[#a1a1aa] mb-3">Automatización & Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">Make / n8n</span>
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">React</span>
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">Tailwind CSS</span>
                    <span className="px-3 py-1 liquid-glass rounded-full text-sm">GitHub</span>
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
