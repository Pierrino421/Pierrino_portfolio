import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-150 flex flex-col md:flex-row items-center justify-center text-left bg-gray-100 px-3 gap-10 mt-5 mb-5"
    >
      {/* TEXTE À GAUCHE */}
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          A propos de moi
        </h2>

        <p className="text-base  text-gray-600 mb-6">
          Je m'appelle Pierrino, j’ai 21 ans et je suis actuellement étudiant en
          cycle ingénieur informatique à 3iL Ingénieurs. Avant d’intégrer ce
          cursus, j’ai effectué deux années de classe préparatoire scientifique,
          ce qui m’a permis d’acquérir des bases solides en mathématiques,
          algorithmique et en raisonnement logique. Ce parcours m’a aussi appris
          à travailler avec rigueur, méthode et autonomie.
        </p>
        <p className="text-base  text-gray-600 mb-6">
          Passionné par l’analyse de données, je m’intéresse particulièrement
          aux outils et aux technologies qui permettent d’extraire de la valeur
          à partir d’informations brutes. Que ce soit à travers des projets de
          visualisation de données avec Power BI ou de traitement de données en
          Python, je cherche constamment à comprendre, modéliser et présenter
          les données de manière claire et impactante. Je suis convaincu que
          l’analyse de données est un levier essentiel pour innover et prendre
          de meilleures décisions.
        </p>

        <div className="flex items-center mb-5">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <div className="w-5 h-5 flex items-center justify-center text-primary">
             
                <img
                  src="/assets/school-svgrepo-com.svg"
                  alt="diplome"
                  className="w-6 h-6 hover:opacity-70 transition"
                />
             
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">
              Cycle ingénieurs (2024-2027)
            </h4>
            <p className="text-sm text-gray-500">3il Ingénieurs</p>
          </div>
        </div>

        <a
          href="/assets/cv_alt_data_s.pdf"
          download
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Télécharger mon CV
        </a>
      </div>

      {/* IMAGE À DROITE */}
      <div className="w-50 h-50 md:w-70 md:h-70 shrink-0">
        <img
          src="/assets/aboutme.jpg"
          alt="Photo de Pierrino"
          className="w-full h-full object-cover rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default About;
