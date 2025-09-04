import React from "react";
import CardC from "../components/competence_card";

const competences = [
  {
    title: "Power BI",
    linkimg: "/assets/powerbi.png",
  },

  {
    title: "Python",
    linkimg: "/assets/python.webp",
  },

  {
    title: "Pandas",
    linkimg: "/assets/pandas.png",
  },

  {
    title: "Seaborn",
    linkimg: "/assets/seaborn.png",
  },
  {
    title: "Matplotlib",
    linkimg: "/assets/matplotlib.png",
  },
  {
    title: "Java & SpringBoot",
    linkimg: "/assets/java.png",
  },
  {
    title: "React & TypeScript",
    linkimg: "/assets/react.png",
  },
  {
    title: "PHP",
    linkimg: "/assets/php.png",
  },
   {
    title: "HTML & CSS & Js",
    linkimg: "/assets/html.jpeg",
  },
  {
    title: "Figma",
    linkimg: "/assets/figma.png",
  },
];

const Competence: React.FC = () => {
  return (
    <section id="competence" className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mes Compétences
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Un aperçu de mes compétences techniques et des outils que je maîtrise
          pour transformer les données en valeur.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
        {competences.map((c, index) => (
          <CardC key={index} title={c.title} linkimg={c.linkimg} />
        ))}
      </div>
    </section>
  );
};

export default Competence;
