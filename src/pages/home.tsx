import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-140 flex flex-col md:flex-row items-center justify-center text-left bg-white px-2 gap-10 py-5"
    >
      {/* TEXTE À GAUCHE */}
      <div className="max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Salut, moi c’est Pierrino
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Je suis un étudiant en cycle ingénieur informatique, animé par la curiosité et la passion pour les données et le développement logiciel. 
           J’aime concevoir des outils d’analyse de données performants ainsi que des applications web dynamiques.<b> Actuellement,
           je suis à la recherche d’une alternance de 24 mois en data analyst et en développement logiciel pour la rentrée 2025-2026.</b>
        </p>

        <a
          href="/assets/cv-alternance-Pierrino.pdf"
          download
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Télécharger mon CV
        </a>
         <a
          href="#contact"
          className="inline-block bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-100 transition mx-3"
        >
          Contactez moi
        </a>
      </div>

      {/* IMAGE À DROITE */}
      <div className="w-50 h-50 md:w-70 md:h-70 shrink-0">
        <img
          src="/assets/me2.png"
          alt="Photo de Pierrino"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Home;
