import React from "react";

const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-130 flex flex-col md:flex-row items-center justify-center text-left bg-white px-2 gap-10"
    >
      {/* TEXTE À GAUCHE */}
      <div className="max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Salut, moi c’est Pierrino
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Je suis un étudiant en cycle ingénieur informatique animé par la
          curiosité et la passion pour les données et le développement.J’aime créer des
           des outils d’analyse de données efficaces et concevoir des applications web dynamiques.
        </p>

        <a
          href="/assets/cv_alt_data_s.pdf"
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
