/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Phone, 
  Home, 
  Building2, 
  School, 
  Building, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  BadgeDollarSign,
  MessageCircle,
  Star,
  Send,
  Mail,
  User,
  Type
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = "5548988076531";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const BenefitCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-blue-50 hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
      <Icon size={24} aria-hidden="true" />
    </div>
    <h3 className="font-display font-bold text-lg text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const ServiceItem = ({ icon: Icon, label }: { icon: any, label: string }) => (
  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
    <div className="text-blue-600">
      <Icon size={20} aria-hidden="true" />
    </div>
    <span className="font-medium text-slate-700">{label}</span>
  </div>
);

const TestimonialCard = ({ name, company, quote, rating }: { name: string, company: string, quote: string, rating: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full"
  >
    <div className="flex gap-1 mb-4">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-slate-700 italic mb-6 flex-grow">"{quote}"</p>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
        {name.charAt(0)}
      </div>
      <div>
        <div className="font-bold text-slate-900">{name}</div>
        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{company}</div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between" aria-label="Navegação Principal">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-display font-bold text-xl">
              RM
            </div>
            <span className="font-display font-bold text-xl tracking-tight hidden sm:block">
              Limpeza Clean
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 mr-8">
            <a href="#servicos" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Serviços</a>
            <a href="#depoimentos" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Depoimentos</a>
            <a href="#contato" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Contato</a>
          </div>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-200"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">Orçamento Grátis</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-blue-50 rounded-l-[100px] hidden lg:block" />
          
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                <Sparkles size={14} />
                <span>LIMPEZA PROFISSIONAL EM FLORIANÓPOLIS</span>
              </div>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-slate-900">
                Faxina Profissional <br />
                <span className="text-blue-600">é aqui na RM!</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                Serviços de limpeza residencial e comercial com garantia de satisfação. Sua casa ou empresa limpa, organizada e cheirosa hoje mesmo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-200"
                >
                  <MessageCircle size={24} />
                  Chamar no WhatsApp
                </a>
                <div className="flex items-center gap-4 px-6 py-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img 
                        key={i}
                        src={`https://picsum.photos/seed/user${i}/100/100`}
                        alt={`Cliente satisfeito ${i}`}
                        className="w-10 h-10 rounded-full border-2 border-white"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-bold text-slate-900">+500 Clientes</div>
                    <div className="text-slate-500">Satisfeitos na região</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=1000" 
                  alt="Profissional de limpeza da RM Limpeza Clean realizando faxina residencial"
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-blue-50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">100% Garantido</div>
                    <div className="text-sm text-slate-500">Satisfação total</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Por que escolher a RM Limpeza Clean?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Especialistas em limpeza técnica e residencial em Florianópolis, oferecendo confiança e agilidade.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <BenefitCard 
                icon={Clock}
                title="Atendimento Rápido"
                description="Agendamento ágil para atender sua necessidade no menor tempo possível em toda a ilha e continente."
              />
              <BenefitCard 
                icon={ShieldCheck}
                title="Serviço de Qualidade"
                description="Equipe treinada e produtos de primeira linha para um resultado impecável em cada cômodo."
              />
              <BenefitCard 
                icon={BadgeDollarSign}
                title="Preço Justo"
                description="Valores competitivos que cabem no seu bolso sem abrir mão da excelência e do cuidado."
              />
              <BenefitCard 
                icon={Sparkles}
                title="Garantia Total"
                description="Não ficou satisfeito? Nós refazemos o serviço sem custo adicional. Sua paz de espírito é nossa prioridade."
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">Onde a RM Limpeza atende?</h2>
                <p className="text-lg text-slate-600 mb-10">
                  Nossa equipe está preparada para transformar qualquer ambiente, seja ele residencial ou corporativo, com técnicas específicas para cada local.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <ServiceItem icon={Home} label="Casas e Sobrados" />
                  <ServiceItem icon={Building} label="Apartamentos e Studios" />
                  <ServiceItem icon={Building2} label="Pontos Comerciais" />
                  <ServiceItem icon={Building} label="Prédios e Condomínios" />
                  <ServiceItem icon={School} label="Escolas e Creches" />
                  <ServiceItem icon={Sparkles} label="Limpeza Pós-Obra" />
                </div>
              </div>
              
              <div className="bg-blue-600 rounded-[40px] p-8 lg:p-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-display text-3xl font-bold mb-6">Peça seu orçamento agora!</h3>
                  <p className="text-blue-100 mb-8 text-lg">
                    Clique no botão abaixo e fale diretamente conosco pelo WhatsApp. Respondemos em poucos minutos com uma proposta personalizada.
                  </p>
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-300" size={20} />
                      <span>Sem compromisso</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-300" size={20} />
                      <span>Preços personalizados por m²</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-300" size={20} />
                      <span>Atendimento humanizado</span>
                    </div>
                  </div>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-colors"
                  >
                    <Phone size={20} />
                    (48) 98807-6531
                  </a>
                </div>
                
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-32 -mt-32 opacity-50" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700 rounded-full -ml-16 -mb-16 opacity-50" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="depoimentos" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                A satisfação de quem já contratou a RM Limpeza Clean é o nosso maior orgulho.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard 
                name="Ana Paula"
                company="Residencial Itacorubi"
                quote="O serviço foi impecável. Minha casa nunca esteve tão limpa e organizada. Recomendo muito!"
                rating={5}
              />
              <TestimonialCard 
                name="Ricardo Silva"
                company="Escritório Advocacia"
                quote="Contratamos para a limpeza semanal do escritório e a diferença é notável. Profissionais pontuais e discretos."
                rating={5}
              />
              <TestimonialCard 
                name="Mariana Costa"
                company="Pós-Obra Campeche"
                quote="Fizeram a limpeza pós-obra do meu apartamento e tiraram todo o pó fino que parecia impossível de sair. Nota 10!"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contato" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">Entre em Contato</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Tem alguma dúvida ou prefere que entremos em contato? Preencha o formulário e nossa equipe retornará o mais breve possível.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">E-mail</div>
                      <div className="text-slate-600">contato@rmlimpezaclean.com.br</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Telefone</div>
                      <div className="text-slate-600">(48) 98807-6531</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 lg:p-10 rounded-[32px] shadow-xl border border-slate-100">
                <AnimatePresence mode="wait">
                  {formStatus === 'success' ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                      <p className="text-slate-600">Obrigado pelo contato. Retornaremos em breve.</p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-8 text-blue-600 font-bold hover:underline"
                      >
                        Enviar outra mensagem
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                    >
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <User size={14} /> Nome Completo
                          </label>
                          <input 
                            required
                            type="text"
                            placeholder="Seu nome"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                            <Mail size={14} /> E-mail
                          </label>
                          <input 
                            required
                            type="email"
                            placeholder="seu@email.com"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                          <Type size={14} /> Assunto
                        </label>
                        <input 
                          required
                          type="text"
                          placeholder="Ex: Orçamento para Apartamento"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          value={formData.subject}
                          onChange={e => setFormData({...formData, subject: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Mensagem</label>
                        <textarea 
                          required
                          rows={4}
                          placeholder="Conte-nos um pouco sobre o que você precisa..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                          value={formData.message}
                          onChange={e => setFormData({...formData, message: e.target.value})}
                        />
                      </div>
                      <button 
                        disabled={formStatus === 'submitting'}
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-100"
                      >
                        {formStatus === 'submitting' ? (
                          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send size={20} />
                            Enviar Mensagem
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800 pb-12 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-display font-bold text-2xl">
                RM
              </div>
              <div>
                <div className="font-display font-bold text-xl">RM Limpeza Clean</div>
                <div className="text-slate-400 text-sm">Profissionalismo em cada detalhe</div>
              </div>
            </div>
            
            <nav className="flex gap-6" aria-label="Links do Rodapé">
              <a href="#servicos" className="text-slate-400 hover:text-white transition-colors">Serviços</a>
              <a href="#depoimentos" className="text-slate-400 hover:text-white transition-colors">Depoimentos</a>
              <a href="#contato" className="text-slate-400 hover:text-white transition-colors">Contato</a>
            </nav>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2024 RM Limpeza Clean. Todos os direitos reservados.</p>
            <p>Florianópolis e Região - SC</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 active:scale-95 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Fale Conosco!
        </span>
      </a>
    </div>
  );
}
