import React from "react";

export default function App() {
  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-600 to-indigo-700 text-white flex flex-col items-center p-6">
      <header className="text-center mt-10" role="banner">
        <h1 className="text-4xl font-extrabold mb-4">💰 IA Renda Automática</h1>
        <p className="text-lg max-w-2xl">
          Ganhe até <strong>75.000 Kz por dia</strong> no automático, com Inteligência Artificial — direto de casa!
        </p>
        <a
          href="#comprar"
          className="mt-6 inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-yellow-300 transition-all focus:outline-none focus:ring-4 focus:ring-yellow-300"
          aria-label="Quero Começar Agora - ir para a seção de compra"
        >
          Quero Começar Agora
        </a>
      </header>

      <section className="mt-20 max-w-4xl text-center space-y-6" aria-labelledby="o-que-e">
        <h2 id="o-que-e" className="text-3xl font-bold">🚀 O Que É o Sistema IA Renda Automática</h2>
        <p>
          Um método 100% digital que mostra como gerar até <strong>75.000 Kz por dia</strong>, de forma prática e automatizada,
          usando o poder da IA e do marketing digital.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[
            { title: "E-book Digital", desc: "Guia passo a passo para iniciar e configurar seu sistema." },
            { title: "Mini Curso em Vídeo", desc: "Aprenda visualmente como usar IA para gerar vendas." },
            { title: "Pacote de Ferramentas", desc: "Modelos prontos de posts, vídeos e automações." },
          ].map((item, i) => (
            <article key={i} className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg" role="article" aria-labelledby={`card-title-${i}`}>
              <h3 id={`card-title-${i}`} className="font-bold text-xl mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="comprar" className="mt-20 text-center" aria-labelledby="oferta">
        <h2 id="oferta" className="text-2xl font-bold mb-4">💵 Oferta Especial de Lançamento</h2>
        <p>Apenas <strong>12.500 Kz</strong> — acesso vitalício + atualizações grátis!</p>
        <a
          href="https://wa.me/244000000000"
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 inline-block bg-green-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-green-400 transition-all focus:outline-none focus:ring-4 focus:ring-green-300"
          aria-label="Ativar Minha Renda Automática no WhatsApp - abre em nova aba"
        >
          Ativar Minha Renda Automática
        </a>
      </section>

      <footer className="mt-20 text-center text-sm opacity-70" role="contentinfo">
        © 2025 IA Renda Automática. Todos os direitos reservados.
      </footer>
    </main>
  );
}
