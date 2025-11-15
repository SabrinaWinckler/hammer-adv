import { useState, useEffect } from 'react';
import { Search, Menu, X, Phone, Mail, MapPin, ChevronRight, Award, Shield, Target, TrendingUp, Users, Building, Gavel, FileText, Home as HomeIcon, Clock, CheckCircle, Star, ArrowRight, MessageCircle } from 'lucide-react';

// ==================== DADOS ====================
const siteData = {
  company: {
    name: "HAMMER",
    slogan: "Precisão. Estratégia. Resultado.",
    phone: "+55 11 99999-9999",
    whatsapp: "5511999999999",
    email: "contato@hammer.com.br",
    address: "Av. Paulista, 1000 - São Paulo, SP",
    hours: "Seg-Sex: 9h às 18h"
  },
  pillars: [
    {
      id: "leiloes",
      title: "Leilões",
      icon: Gavel,
      description: "Expertise completa em leilões judiciais e extrajudiciais",
      color: "bg-gradient-to-br from-yellow-500 to-yellow-600"
    },
    {
      id: "licitacoes",
      title: "Licitações",
      icon: FileText,
      description: "Consultoria estratégica para vencer licitações públicas",
      color: "bg-gradient-to-br from-gray-800 to-black"
    },
    {
      id: "imoveis",
      title: "Imóveis & Gestão",
      icon: Building,
      description: "Administração profissional e compra de imóveis",
      color: "bg-gradient-to-br from-yellow-600 to-yellow-700"
    }
  ],
  testimonials: [
    {
      name: "Carlos Mendes",
      role: "Empresário",
      text: "A HAMMER transformou minha estratégia de licitações. Resultado acima das expectativas.",
      rating: 5
    },
    {
      name: "Maria Silva",
      role: "Investidora",
      text: "Adquiri meu primeiro imóvel em leilão com a assessoria da HAMMER. Processo seguro e rentável.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Proprietário",
      text: "A gestão do meu portfólio de imóveis ficou muito mais profissional e lucrativa.",
      rating: 5
    }
  ],
  blogPosts: [
    {
      slug: "como-participar-leilao-imoveis",
      title: "Como Participar de um Leilão de Imóveis: Guia Completo",
      excerpt: "Descubra o passo a passo para adquirir imóveis com até 50% de desconto em leilões judiciais e extrajudiciais.",
      date: "2024-11-10",
      author: "Equipe HAMMER",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
      content: `
# Como Participar de um Leilão de Imóveis: Guia Completo

Leilões de imóveis representam uma oportunidade única para investidores e compradores adquirirem propriedades com descontos significativos. Neste guia completo, vamos explicar todo o processo.

## O que é um Leilão de Imóveis?

Um leilão de imóveis é um processo de venda pública onde propriedades são oferecidas ao maior lance. Podem ser judiciais (determinados pela Justiça) ou extrajudiciais (realizados por instituições financeiras).

## Vantagens de Comprar em Leilão

- **Descontos de até 50%** sobre o valor de mercado
- **Processo transparente** e regulamentado
- **Diversidade de imóveis** disponíveis
- **Oportunidade de investimento** com alto retorno

## Passo a Passo

### 1. Pesquise os Leilões Disponíveis
Acompanhe sites especializados e leiloeiros oficiais para identificar oportunidades.

### 2. Análise do Imóvel
Visite o imóvel, verifique documentação e avalie custos adicionais.

### 3. Prepare a Documentação
Tenha em mãos CPF, comprovante de residência e recursos para depósito.

### 4. Faça seu Lance
Participe presencialmente ou online, respeitando as regras do edital.

### 5. Arrematação e Pagamento
Após ganhar o leilão, efetue o pagamento e inicie o processo de transferência.

## Cuidados Importantes

- Sempre leia o edital completo
- Verifique débitos e ônus sobre o imóvel
- Calcule todos os custos envolvidos
- Conte com assessoria especializada

## Como a HAMMER Pode Ajudar

Nossa equipe oferece assessoria completa em leilões, incluindo:

- Análise de oportunidades
- Verificação jurídica
- Acompanhamento no leilão
- Suporte pós-arrematação

Entre em contato e maximize suas chances de sucesso!
      `
    },
    {
      slug: "estrategias-vencer-licitacoes",
      title: "5 Estratégias para Vencer Licitações Públicas",
      excerpt: "Conheça as táticas que aumentam suas chances de sucesso em processos licitatórios.",
      date: "2024-11-08",
      author: "Dr. Roberto Almeida",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop",
      content: `
# 5 Estratégias para Vencer Licitações Públicas

Participar de licitações públicas exige preparo, conhecimento técnico e estratégia. Confira as 5 principais táticas para aumentar suas chances de sucesso.

## 1. Conheça Profundamente a Legislação

O domínio da Lei 14.133/2021 (Nova Lei de Licitações) é fundamental. Entenda:
- Modalidades de licitação
- Critérios de julgamento
- Prazos e recursos
- Documentação exigida

## 2. Análise Detalhada do Edital

Cada edital possui particularidades. Analise:
- Requisitos técnicos
- Critérios de habilitação
- Pontuação e pesos
- Prazos críticos

## 3. Precificação Competitiva

O preço precisa ser competitivo sem comprometer a qualidade:
- Calcule custos reais
- Considere margem sustentável
- Analise concorrência
- Evite sobrepreço ou subfaturamento

## 4. Documentação Impecável

Erros documentais são a principal causa de desclassificação:
- Prepare documentação com antecedência
- Verifique validade de certidões
- Organize de forma clara
- Tenha cópias de segurança

## 5. Conte com Consultoria Especializada

Profissionais experientes fazem a diferença:
- Análise de viabilidade
- Elaboração de proposta
- Acompanhamento do processo
- Gestão de recursos

## Conclusão

Vencer licitações é uma combinação de conhecimento, preparo e estratégia. A HAMMER oferece consultoria completa para maximizar suas chances de sucesso.

Entre em contato e transforme licitações em oportunidades reais de negócio!
      `
    },
    {
      slug: "gestao-profissional-imoveis",
      title: "Gestão Profissional de Imóveis: Por Que é Essencial?",
      excerpt: "Entenda como a administração profissional pode aumentar a rentabilidade do seu portfólio imobiliário.",
      date: "2024-11-05",
      author: "Equipe HAMMER",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=400&fit=crop",
      content: `
# Gestão Profissional de Imóveis: Por Que é Essencial?

Ter imóveis é um excelente investimento, mas gerenciá-los adequadamente faz toda a diferença entre lucro e prejuízo. Descubra por que a gestão profissional é essencial.

## O Que é Gestão de Imóveis?

É o conjunto de processos e práticas para administrar propriedades de forma eficiente, incluindo:
- Locação e relacionamento com inquilinos
- Manutenção preventiva e corretiva
- Cobrança e inadimplência
- Documentação e conformidade legal
- Valorização do patrimônio

## Benefícios da Gestão Profissional

### 1. Redução de Vacância
Imóveis bem gerenciados têm menor tempo sem locação, maximizando receita.

### 2. Inquilinos Qualificados
Processo rigoroso de seleção reduz inadimplência e problemas.

### 3. Manutenção Preventiva
Evita problemas maiores e mantém o valor do imóvel.

### 4. Conformidade Legal
Garante que contratos e processos estejam de acordo com a legislação.

### 5. Maximização de Rentabilidade
Otimização de custos e receitas aumenta o retorno do investimento.

## Desafios da Autogestão

Gerenciar imóveis por conta própria pode resultar em:
- Perda de tempo considerável
- Falta de expertise jurídica
- Dificuldade em lidar com inadimplência
- Manutenções mal planejadas
- Conflitos com inquilinos

## Como Escolher uma Gestora

Busque empresas com:
- Experiência comprovada
- Processos transparentes
- Tecnologia de gestão
- Equipe multidisciplinar
- Boas referências

## A HAMMER na Gestão de Imóveis

Oferecemos gestão completa e personalizada:
- Análise de mercado para precificação
- Marketing para locação
- Seleção criteriosa de inquilinos
- Gestão financeira e cobrança
- Manutenção e vistorias
- Relatórios periódicos

## Conclusão

A gestão profissional não é um custo, é um investimento que protege e valoriza seu patrimônio. Com a HAMMER, seus imóveis trabalham por você com máxima eficiência.

Entre em contato e descubra como podemos transformar seus imóveis em ativos de alta performance!
      `
    }
  ]
};

// ==================== COMPONENTES ====================

// Header
const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-black shadow-lg' : 'bg-black/90'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <Gavel className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold text-white">HAMMER</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white hover:text-yellow-500 transition">Home</a>
            <a href="/leiloes" className="text-white hover:text-yellow-500 transition">Leilões</a>
            <a href="/licitacoes" className="text-white hover:text-yellow-500 transition">Licitações</a>
            <a href="/imoveis" className="text-white hover:text-yellow-500 transition">Imóveis</a>
            <a href="/sobre" className="text-white hover:text-yellow-500 transition">Sobre</a>
            <a href="/blog" className="text-white hover:text-yellow-500 transition">Blog</a>
            <a href="/contato" className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition font-semibold">Contato</a>
          </nav>

          <button onClick={onMenuClick} className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

// Mobile Menu
const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/80" onClick={onClose}></div>
      <div className="fixed right-0 top-0 bottom-0 w-64 bg-black p-6">
        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          <X className="h-6 w-6" />
        </button>
        <nav className="mt-12 flex flex-col space-y-4">
          <a href="/" className="text-white hover:text-yellow-500 transition" onClick={onClose}>Home</a>
          <a href="/leiloes" className="text-white hover:text-yellow-500 transition" onClick={onClose}>Leilões</a>
          <a href="/licitacoes" className="text-white hover:text-yellow-500 transition" onClick={onClose}>Licitações</a>
          <a href="/imoveis" className="text-white hover:text-yellow-500 transition" onClick={onClose}>Imóveis</a>
          <a href="/sobre" className="text-white hover:text-yellow-500 transition" onClick={onClose}>Sobre</a>
          <a href="/blog" className="text-white hover:text-yellow-500 transition" onClick={onClose}>Blog</a>
          <a href="/contato" className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600 transition font-semibold text-center" onClick={onClose}>Contato</a>
        </nav>
      </div>
    </div>
  );
};

// Footer
const Footer = () => (
  <footer className="bg-black text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Gavel className="h-6 w-6 text-yellow-500" />
            <span className="text-xl font-bold">HAMMER</span>
          </div>
          <p className="text-gray-400 text-sm">{siteData.company.slogan}</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Serviços</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/leiloes" className="text-gray-400 hover:text-yellow-500 transition">Leilões</a></li>
            <li><a href="/licitacoes" className="text-gray-400 hover:text-yellow-500 transition">Licitações</a></li>
            <li><a href="/imoveis" className="text-gray-400 hover:text-yellow-500 transition">Imóveis & Gestão</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Empresa</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/sobre" className="text-gray-400 hover:text-yellow-500 transition">Sobre Nós</a></li>
            <li><a href="/blog" className="text-gray-400 hover:text-yellow-500 transition">Blog</a></li>
            <li><a href="/contato" className="text-gray-400 hover:text-yellow-500 transition">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{siteData.company.phone}</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{siteData.company.email}</span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{siteData.company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2024 HAMMER. Todos os direitos reservados.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/politica-de-privacidade" className="hover:text-yellow-500 transition">Política de Privacidade</a>
          <a href="/termos-de-uso" className="hover:text-yellow-500 transition">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
);

// WhatsApp Button
const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${siteData.company.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-40 animate-pulse"
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle className="h-6 w-6" />
  </a>
);

// Lead Popup
const LeadPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! Entraremos em contato em breve.');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-black">
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Receba Oportunidades Exclusivas</h2>
        <p className="text-gray-600 mb-6">Cadastre-se e receba alertas sobre leilões, licitações e imóveis imperdíveis.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input
            type="tel"
            placeholder="Seu telefone"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
          <button type="submit" className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-600 transition">
            Quero Receber Oportunidades
          </button>
        </form>
      </div>
    </div>
  );
};

// ==================== PÁGINAS ====================

// Home
const HomePage = () => (
  <div className="pt-16">
    {/* Hero */}
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Precisão. Estratégia. <span className="text-yellow-500">Resultado.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Expertise jurídica e comercial em leilões, licitações e gestão imobiliária
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contato" className="bg-yellow-500 text-black px-8 py-4 rounded-lg hover:bg-yellow-600 transition font-semibold text-lg">
              Fale com um Especialista
            </a>
            <a href="#pilares" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition font-semibold text-lg">
              Conheça Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Pilares */}
    <section id="pilares" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Pilares de Atuação</h2>
          <p className="text-xl text-gray-600">Soluções completas para seu sucesso</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {siteData.pillars.map((pillar) => (
            <a key={pillar.id} href={`/${pillar.id}`} className="group">
              <div className={`${pillar.color} text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2`}>
                <pillar.icon className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                <p className="mb-4">{pillar.description}</p>
                <div className="flex items-center text-sm font-semibold">
                  Saiba mais <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    {/* Diferenciais */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher a HAMMER?</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Expertise Jurídica", desc: "Equipe com formação em Direito" },
            { icon: Target, title: "Foco em Resultado", desc: "Estratégias orientadas a retorno" },
            { icon: Award, title: "Processos Auditados", desc: "Máxima transparência e segurança" },
            { icon: TrendingUp, title: "Alta Performance", desc: "Histórico comprovado de sucesso" }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition">
              <item.icon className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Depoimentos */}
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Que Nossos Clientes Dizem</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {siteData.testimonials.map((testimonial, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Como Funciona */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "1", title: "Contato Inicial", desc: "Entre em contato e conte seus objetivos" },
            { step: "2", title: "Análise Estratégica", desc: "Avaliamos oportunidades e viabilidade" },
            { step: "3", title: "Execução", desc: "Implementamos a estratégia definida" },
            { step: "4", title: "Resultado", desc: "Você alcança seus objetivos com segurança" }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Final */}
    <section className="py-20 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto Para Alavancar Seus Resultados?</h2>
        <p className="text-xl mb-8">Entre em contato e descubra como a HAMMER pode transformar suas oportunidades em conquistas reais.</p>
        <a href="/contato" className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition font-semibold text-lg">
          Falar com Especialista Agora
        </a>
      </div>
    </section>
  </div>
);

// Leilões
const LeiloesPage = () => (
  <div className="pt-16">
    <section className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Leilões Judiciais e Extrajudiciais</h1>
        <p className="text-xl mb-8">Adquira imóveis com até 50% de desconto com segurança e assessoria especializada.</p>
        <a href="/contato" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition font-semibold">
          Fale com um Especialista em Leilões
        </a>
      </div>
    </section>
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Serviços em Leilões</h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
          <li>Análise de oportunidades de leilões judiciais e extrajudiciais</li>
          <li>Verificação jurídica completa dos imóveis</li>
          <li>Acompanhamento e participação em leilões</li>
          <li>Suporte pós-arrematação e regularização</li>
          <li>Consultoria personalizada para investidores</li>
        </ul>
      </div>
    </section>
  </div>
);

// Licitações
const LicitacoesPage = () => (
  <div className="pt-16">
    <section className="bg-gradient-to-br from-gray-800 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Consultoria em Licitações Públicas</h1>
        <p className="text-xl mb-8">Aumente suas chances de sucesso com estratégias personalizadas e expertise jurídica.</p>
        <a href="/contato" className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-600 transition font-semibold">
          Fale com um Especialista em Licitações
        </a>
      </div>
    </section>
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Serviços em Licitações</h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
          <li>Análise de editais e viabilidade de participação</li>
          <li>Elaboração de propostas técnicas e comerciais</li>
          <li>Gestão de documentação e habilitação</li>
          <li>Acompanhamento do processo licitatório</li>
          <li>Recursos e contestações jurídicas</li>
        </ul>
      </div>
    </section>
  </div>
);

// Imóveis
const ImoveisPage = () => (
  <div className="pt-16">
    <section className="bg-gradient-to-br from-yellow-600 to-yellow-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Gestão e Administração de Imóveis</h1>
        <p className="text-xl mb-8">Maximize a rentabilidade do seu patrimônio com gestão profissional.</p>
        <a href="/contato" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition font-semibold">
          Fale com um Especialista em Imóveis
        </a>
      </div>
    </section>
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Serviços de Gestão Imobiliária</h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
          <li>Administração completa de imóveis para locação</li>
          <li>Seleção e qualificação de inquilinos</li>
          <li>Gestão de contratos e documentação</li>
          <li>Manutenção preventiva e corretiva</li>
          <li>Otimização de rentabilidade do portfólio</li>
        </ul>
      </div>
    </section>
  </div>
);

// ==================== APP PRINCIPAL ====================

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Simular roteamento simples
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/leiloes') setCurrentPage('leiloes');
    else if (path === '/licitacoes') setCurrentPage('licitacoes');
    else if (path === '/imoveis') setCurrentPage('imoveis');
    else setCurrentPage('home');
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'leiloes': return <LeiloesPage />;
      case 'licitacoes': return <LicitacoesPage />;
      case 'imoveis': return <ImoveisPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setMobileMenuOpen(true)} />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppButton />
      <LeadPopup />
    </div>
  );
}

export default App;