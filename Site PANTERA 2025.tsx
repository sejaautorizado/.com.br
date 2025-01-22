import React from 'react';
import { Download, Shield, Users, BarChart, MessageSquare, CheckCircle, Phone, Mail } from 'lucide-react';

const Website = () => {
return (
  <div className="min-h-screen bg-black text-white">
    {/* Header/Nav */}
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">PANTERA 2025 🐾</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#inicio" className="text-gray-300 hover:text-white">Início</a>
            <a href="#sobre" className="text-gray-300 hover:text-white">Sobre</a>
            <a href="#planos" className="text-gray-300 hover:text-white">Planos</a>
            <a href="#blog" className="text-gray-300 hover:text-white">Blog</a>
            <a href="#contato" className="text-gray-300 hover:text-white">Contato</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Começar Agora
            </button>
          </div>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section id="inicio" className="pt-24 pb-12 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            PANTERA 2025
          </h1>
          <p className="mt-3 text-2xl text-purple-300">
            Uma nova era que já é realidade! 🚀
          </p>
          <div className="mt-8 flex justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-lg font-bold hover:opacity-90 transform hover:scale-105 transition">
              Descubra o Poder da Divulgação Viral
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Sobre Section */}
    <section id="sobre" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-400">Sobre o Programa</h2>
          <p className="mt-4 text-lg text-gray-300">
            Método inovador de divulgação que garante que sua mensagem chegue a SMS e SCR, 
            sem bloqueios ou banimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 mx-auto">
              <BarChart className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center text-white">Até 17mil Envios/Dia</h3>
            <p className="mt-2 text-gray-400 text-center">
              Alcance massivo com resultados garantidos
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 mx-auto">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center text-white">Sem Bloqueios</h3>
            <p className="mt-2 text-gray-400 text-center">
              Sistema seguro e confiável
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 mx-auto">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-center text-white">Suporte Exclusivo</h3>
            <p className="mt-2 text-gray-400 text-center">
              Acompanhamento até alcançar resultados
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Planos Section */}
    <section id="planos" className="py-16 bg-gradient-to-b from-black to-purple-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Planos Disponíveis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plano Prata */}
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-center text-white">Plano Prata</h3>
              <p className="text-purple-400 text-center mt-2">15 dias 💎</p>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold text-white">R$ 297</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                  <span className="ml-3 text-gray-300">Download do programa</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                  <span className="ml-3 text-gray-300">Instalação</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                  <span className="ml-3 text-gray-300">Suporte completo</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-purple-600 text-white rounded-lg py-3 hover:bg-purple-700">
                Escolher Plano
              </button>
            </div>
          </div>

          {/* Plano Ouro */}
          <div className="bg-gray-900 rounded-xl overflow-hidden border-2 border-purple-500">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-center text-white">Plano Ouro</h3>
              <p className="text-purple-400 text-center mt-2">30 dias 🏆</p>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold text-white">R$ 497</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                  <span className="ml-3 text-gray-300">Download do programa</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                  <span className="ml-3 text-gray-300">Instalação</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                  <span className="ml-3 text-gray-300">Suporte premium</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg py-3 hover:opacity-90">
                Escolher Plano
              </button>
            </div>
          </div>

          {/* Plano Diamante */}
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-center text-white">Plano Diamante</h3>
              <p className="text-purple-400 text-center mt-2">90 dias 💎✨</p>
              <div className="mt-4 text-center">
                <span className="text-4xl font-bold text-white">R$ 997</span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                  <span className="ml-3 text-gray-300">Download do programa</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                  <span className="ml-3 text-gray-300">Instalação VIP</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-400" />
                  <span className="ml-3 text-gray-300">Suporte prioritário</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-purple-600 text-white rounded-lg py-3 hover:bg-purple-700">
                Escolher Plano
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Blog Section */}
    <section id="blog" className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Dicas para Marketing Digital</h3>
            <p className="mt-2 text-gray-400">
              Aprenda estratégias eficazes para aumentar sua visibilidade online.
            </p>
            <a href="#" className="mt-4 inline-block text-purple-400 hover:underline">Leia mais</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Histórias de Sucesso</h3>
            <p className="mt-2 text-gray-400">
              Veja como nossos clientes alcançaram resultados incríveis.
            </p>
            <a href="#" className="mt-4 inline-block text-purple-400 hover:underline">Leia mais</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Tendências em Divulgação</h3>
            <p className="mt-2 text-gray-400">
              Fique por dentro das últimas novidades e tendências do mercado.
            </p>
            <a href="#" className="mt-4 inline-block text-purple-400 hover:underline">Leia mais</a>
          </div>
        </div>
      </div>
    </section>

    {/* Depoimentos */}
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">
          Depoimentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-300 italic">
              "A divulgação viral mudou meu negócio! Os resultados foram incríveis!"
            </p>
            <p className="mt-4 text-purple-400">- Cliente Satisfeito 🌟</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <p className="text-gray-300 italic">
              "Recomendo a todos que desejam expandir seus negócios!"
            </p>
            <p className="mt-4 text-purple-400">- Outro Cliente Satisfeito 👍</p>
          </div>
        </div>
      </div>
    </section>

    {/* Requisitos */}
    <section className="py-16 bg-gradient-to-b from-purple-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">
          Requisitos do Sistema
        </h2>
        <div className="bg-gray-900 p-6 rounded-lg max-w-2xl mx-auto">
          <ul className="space-y-4">
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-purple-400" />
              <span className="ml-3 text-gray-300">Windows 10 ou 11</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-5 w-5 text-purple-400" />
              <span className="ml-3 text-gray-300">Conexão com a Internet</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="py-6 bg-black">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>&copy; 2025 PANTERA. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-white">Política de Privacidade</a>
          <a href="#" className="hover:text-white">Termos de Uso</a>
        </div>
      </div>
    </footer>
  </div>
);
};

export default Website;