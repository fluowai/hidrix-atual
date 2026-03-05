import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatBot } from './components/ChatBot';
import { 
  Droplets, 
  Leaf, 
  BarChart3, 
  ShieldCheck, 
  Settings, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Phone,
  Mail,
  MapPin,
  AlertCircle,
  TrendingDown,
  FileText,
  Zap,
  Users
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Soluções', href: '#solucoes' },
    { name: 'Sobre a Hidrix', href: '#sobre' },
    { name: 'Cases', href: '#cases' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-hidrix-blue rounded-lg flex items-center justify-center">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-hidrix-blue' : 'text-hidrix-blue'}`}>
            HIDRIX
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-hidrix-deep hover:text-hidrix-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="bg-hidrix-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-hidrix-deep transition-all shadow-lg shadow-hidrix-blue/20"
          >
            Solicitar Diagnóstico
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-hidrix-blue" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-gray-100"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-hidrix-deep"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contato" 
                className="bg-hidrix-blue text-white text-center py-3 rounded-xl font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solicitar Diagnóstico
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-hidrix-green/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-hidrix-green/10 text-hidrix-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Leaf className="w-4 h-4" />
              Sustentabilidade & Eficiência
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-hidrix-blue leading-tight mb-6">
              Transforme a gestão de água da sua empresa com <span className="text-hidrix-green">soluções inteligentes.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              A HIDRIX ajuda empresas, propriedades rurais e empreendimentos a reduzir custos, otimizar recursos hídricos e atender exigências ambientais com tecnologia de ponta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato" 
                className="bg-hidrix-blue text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-hidrix-deep transition-all flex items-center justify-center gap-2 shadow-xl shadow-hidrix-blue/20"
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5500000000000" 
                className="bg-white text-hidrix-blue border-2 border-hidrix-blue/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                Falar com Especialista
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-hidrix-green w-5 h-5" />
                Diagnóstico Gratuito
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-hidrix-green w-5 h-5" />
                Análise Técnica
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Tecnologia Hídrica Hidrix" 
                className="w-full h-auto object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hidrix-blue/40 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-hidrix-green/10 rounded-full flex items-center justify-center">
                  <TrendingDown className="text-hidrix-green w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Redução Média</p>
                  <p className="text-2xl font-bold text-hidrix-blue">Até 40%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Problems = () => {
  const problems = [
    { title: "Alto custo com água", icon: <TrendingDown className="w-6 h-6" /> },
    { title: "Desperdício hídrico", icon: <Droplets className="w-6 h-6" /> },
    { title: "Falta de controle", icon: <BarChart3 className="w-6 h-6" /> },
    { title: "Exigências ambientais", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Risco de multas", icon: <AlertCircle className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-hidrix-blue mb-4">
            Sua empresa enfrenta esses desafios?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A má gestão dos recursos hídricos pode comprometer a lucratividade e a reputação do seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center gap-4"
            >
              <div className="w-12 h-12 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
                {problem.icon}
              </div>
              <p className="font-semibold text-hidrix-deep">{problem.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const solutions = [
    {
      title: "Gestão inteligente de água",
      desc: "Monitoramento em tempo real do consumo e detecção automática de vazamentos.",
      benefit: "Controle total e previsibilidade de custos.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Tratamento e reaproveitamento",
      desc: "Sistemas avançados para tratamento de efluentes e reuso de água cinza.",
      benefit: "Redução drástica na captação de água nova.",
      icon: <Droplets className="w-8 h-8" />
    },
    {
      title: "Sustentabilidade ambiental",
      desc: "Adequação completa às normas e certificações ambientais vigentes.",
      benefit: "Segurança jurídica e valorização da marca.",
      icon: <Leaf className="w-8 h-8" />
    },
    {
      title: "Otimização de consumo",
      desc: "Engenharia aplicada para reduzir o consumo sem afetar a operação.",
      benefit: "Eficiência máxima com o menor recurso possível.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Consultoria técnica",
      desc: "Equipe especializada para diagnósticos complexos e projetos sob medida.",
      benefit: "Soluções personalizadas para o seu cenário.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <section id="solucoes" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-hidrix-blue mb-4">
              Soluções completas para cada necessidade
            </h2>
            <p className="text-gray-600">
              Combinamos tecnologia de ponta com consultoria especializada para entregar resultados reais.
            </p>
          </motion.div>
          <a href="#contato" className="text-hidrix-blue font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Ver todas as soluções <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-16 h-16 bg-hidrix-blue/5 text-hidrix-blue rounded-2xl flex items-center justify-center mb-6 group-hover:bg-hidrix-blue group-hover:text-white transition-colors">
                {sol.icon}
              </div>
              <h3 className="text-xl font-bold text-hidrix-blue mb-3">{sol.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{sol.desc}</p>
              <div className="pt-6 border-t border-gray-50">
                <p className="text-xs font-bold text-hidrix-green uppercase tracking-wider mb-1">Benefício</p>
                <p className="text-sm font-medium text-hidrix-deep">{sol.benefit}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    "Redução de custos operacionais",
    "Uso inteligente da água",
    "Adequação ambiental",
    "Aumento de eficiência hídrica",
    "Sustentabilidade real no negócio"
  ];

  return (
    <section className="py-24 bg-hidrix-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-hidrix-green/10 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              O que nossos clientes conquistam ao escolher a HIDRIX
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-hidrix-green rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-medium opacity-90">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-12">
              <a 
                href="#contato" 
                className="inline-flex items-center gap-2 bg-hidrix-green text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all"
              >
                Quero esses resultados
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
              <p className="text-4xl font-bold text-hidrix-green mb-2">40%</p>
              <p className="text-sm opacity-70">Redução média na conta de água</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center mt-8">
              <p className="text-4xl font-bold text-hidrix-green mb-2">+200</p>
              <p className="text-sm opacity-70">Empresas atendidas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center">
              <p className="text-4xl font-bold text-hidrix-green mb-2">100%</p>
              <p className="text-sm opacity-70">Conformidade ambiental</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center mt-8">
              <p className="text-4xl font-bold text-hidrix-green mb-2">24/7</p>
              <p className="text-sm opacity-70">Monitoramento inteligente</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { 
      title: "Diagnóstico hídrico", 
      desc: "Mapeamos todo o fluxo de água da sua operação para identificar gargalos.",
      icon: <FileText className="w-6 h-6" />
    },
    { 
      title: "Análise técnica", 
      desc: "Nossos especialistas desenham a solução ideal focada em ROI e sustentabilidade.",
      icon: <Settings className="w-6 h-6" />
    },
    { 
      title: "Implementação", 
      desc: "Instalação de tecnologias e processos com o mínimo de impacto operacional.",
      icon: <Zap className="w-6 h-6" />
    },
    { 
      title: "Monitoramento", 
      desc: "Acompanhamento contínuo para garantir a máxima eficiência a longo prazo.",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hidrix-blue mb-4">Como funciona nosso processo</h2>
          <p className="text-gray-600">Simplicidade e rigor técnico do início ao fim.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-white border-4 border-hidrix-green rounded-full flex items-center justify-center mb-6 shadow-lg">
                <span className="text-hidrix-blue font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-hidrix-blue mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    {
      name: "Ricardo Santos",
      role: "Gerente de Operações, Indústria Têxtil",
      text: "A HIDRIX reduziu nossos custos com água em 35% nos primeiros 6 meses. O monitoramento em tempo real mudou nossa forma de operar.",
      img: "https://i.pravatar.cc/150?u=a"
    },
    {
      name: "Mariana Costa",
      role: "Diretora de Sustentabilidade, Rede Hoteleira",
      text: "Excelente consultoria técnica. Conseguimos a certificação ambiental que buscávamos graças ao projeto de reuso implementado.",
      img: "https://i.pravatar.cc/150?u=b"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-hidrix-blue mb-4">Empresas que confiam na HIDRIX</h2>
          <p className="text-gray-600">Resultados comprovados em diversos setores do mercado.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-bold text-hidrix-blue">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
            </motion.div>
          ))}
        </div>

        {/* Logos Placeholder */}
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
          <div className="text-2xl font-bold">LOGOTIPO 1</div>
          <div className="text-2xl font-bold">LOGOTIPO 2</div>
          <div className="text-2xl font-bold">LOGOTIPO 3</div>
          <div className="text-2xl font-bold">LOGOTIPO 4</div>
          <div className="text-2xl font-bold">LOGOTIPO 5</div>
        </div>
      </div>
    </section>
  );
};

const LeadForm = () => {
  const [formState, setFormState] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    cidade: '',
    necessidade: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado pelo interesse! Nossa equipe entrará em contato em breve.');
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-hidrix-blue/5 -z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-extrabold text-hidrix-blue mb-6">
              Receba um Diagnóstico Gratuito da sua operação.
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nossos especialistas estão prontos para analisar seu cenário e propor as melhores estratégias de economia e sustentabilidade.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-hidrix-green">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-hidrix-blue">Análise Técnica Inicial</p>
                  <p className="text-sm text-gray-500">Sem custos ou compromisso.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-hidrix-green">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-hidrix-blue">Relatório de Oportunidades</p>
                  <p className="text-sm text-gray-500">Descubra onde você está perdendo dinheiro.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-hidrix-blue mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hidrix-green focus:ring-2 focus:ring-hidrix-green/20 outline-none transition-all"
                    placeholder="Seu nome"
                    value={formState.nome}
                    onChange={(e) => setFormState({...formState, nome: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-hidrix-blue mb-2">Empresa</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hidrix-green focus:ring-2 focus:ring-hidrix-green/20 outline-none transition-all"
                    placeholder="Nome da empresa"
                    value={formState.empresa}
                    onChange={(e) => setFormState({...formState, empresa: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-hidrix-blue mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hidrix-green focus:ring-2 focus:ring-hidrix-green/20 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                    value={formState.whatsapp}
                    onChange={(e) => setFormState({...formState, whatsapp: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-hidrix-blue mb-2">Cidade/UF</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hidrix-green focus:ring-2 focus:ring-hidrix-green/20 outline-none transition-all"
                    placeholder="Ex: São Paulo - SP"
                    value={formState.cidade}
                    onChange={(e) => setFormState({...formState, cidade: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-hidrix-blue mb-2">Tipo de Necessidade</label>
                <select 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-hidrix-green focus:ring-2 focus:ring-hidrix-green/20 outline-none transition-all"
                  value={formState.necessidade}
                  onChange={(e) => setFormState({...formState, necessidade: e.target.value})}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="gestao">Gestão de Consumo</option>
                  <option value="tratamento">Tratamento de Efluentes</option>
                  <option value="reuso">Reuso de Água</option>
                  <option value="ambiental">Adequação Ambiental</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full bg-hidrix-green text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-all shadow-lg shadow-hidrix-green/20 flex items-center justify-center gap-2"
              >
                Receber Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-center text-xs text-gray-400">
                Seus dados estão protegidos e serão usados apenas para este contato.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-hidrix-deep text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="text-hidrix-green w-8 h-8" />
              <span className="text-2xl font-bold">HIDRIX</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Líder em soluções sustentáveis para gestão e tratamento de água. Inovação tecnológica a serviço do meio ambiente e da sua lucratividade.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-hidrix-green transition-colors cursor-pointer">
                <span className="text-xs font-bold">In</span>
              </div>
              <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center hover:bg-hidrix-green transition-colors cursor-pointer">
                <span className="text-xs font-bold">Ig</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#solucoes" className="hover:text-white transition-colors">Soluções</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre a Hidrix</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Cases de Sucesso</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog & Notícias</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Soluções</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Gestão de Consumo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tratamento de Efluentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reuso de Água Cinza</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Consultoria Ambiental</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Monitoramento 24/7</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-hidrix-green" />
                (11) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-hidrix-green" />
                contato@hidrix.com.br
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-hidrix-green mt-1" />
                Av. Paulista, 1000 - Bela Vista<br />São Paulo - SP
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2024 HIDRIX - Soluções Sustentáveis. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 left-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="absolute left-full ml-4 bg-white text-hidrix-deep px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl whitespace-nowrap hidden md:block">
        Fale com um especialista
      </span>
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Benefits />
        <HowItWorks />
        <SocialProof />
        
        {/* Statistics Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-hidrix-green/5 rounded-[3rem] p-12 md:p-20 text-center">
              <h2 className="text-3xl font-bold text-hidrix-blue mb-12">Você sabia?</h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div>
                  <p className="text-5xl font-extrabold text-hidrix-blue mb-4">37%</p>
                  <p className="text-gray-600">Da água tratada no Brasil é perdida antes de chegar ao consumidor final.</p>
                </div>
                <div>
                  <p className="text-5xl font-extrabold text-hidrix-blue mb-4">R$ 10bi</p>
                  <p className="text-gray-600">É o prejuízo anual estimado das empresas brasileiras com desperdício hídrico.</p>
                </div>
                <div>
                  <p className="text-5xl font-extrabold text-hidrix-blue mb-4">80%</p>
                  <p className="text-gray-600">Das empresas que investem em reuso de água recuperam o investimento em menos de 2 anos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LeadForm />

        {/* Final CTA */}
        <section className="py-24 bg-hidrix-blue text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-hidrix-green via-transparent to-transparent" />
          </div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Descubra como reduzir custos e tornar sua operação mais sustentável.
            </h2>
            <a 
              href="https://wa.me/5500000000000" 
              className="inline-flex items-center gap-3 bg-white text-hidrix-blue px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl"
            >
              Falar com um especialista
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
