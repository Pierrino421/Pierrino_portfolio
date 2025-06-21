import React from 'react';
import Card from '../components/projet_card';

const projets = [
  {
    title: "tableau de bord de suivi commerciales",
    description: "création de visualisations interactives pour analyser le chiffre d’affaires, les produits les plus commandés et les plus rentables.",
    linkgit: "https://github.com/Pierrino421/powerbi-sales-dashboard-v2",
    linkimg: "/assets/projet2.png",
    comp1: "Power BI",
    comp2: "DAX",
    comp3: "Relations",
    typeP: "Analyse"
  },
  {
    title: "tableau de bord de suivi des ventes ",
    description: "Fusion et nettoyage de 12 datasets mensuels sur Power BI, création de visualisations interactives ",
    linkgit: "https://github.com/Pierrino421/powerbi-sales-dashboard",
    linkimg: "/assets/projet1.png",
    comp1: "Power BI",
    comp2: "DAX",
    comp3: "Relations",
    typeP: "Analyse"
  },

  {
    title: "Bibliothèque en ligne",
    description: "Application web permettant de consulter, lire et télécharger des livres avec une interface d’administration pour gérer les livres, auteurs, genres et chapitres.",
    linkgit: "#",
    linkimg: "/assets/projet3.png",
    comp1: "Spring Boot",
    comp2: "MVC",
    comp3: "PostgreeSQL",
    typeP: "Dev"
  },
];

const Projet: React.FC = () => {
  return (
    <section id="project" className="bg-gray-100 py-8 px-6">
      <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez une sélection de mes travaux dans le domaine de l'analyse
            de données et dans le développement web.
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {projets.map((p, index) => (
          <Card
            key={index}
            title={p.title}
            description={p.description}
            linkgit={p.linkgit}
            linkimg={p.linkimg}
            comp1={p.comp1}
            comp2={p.comp2}
            comp3={p.comp3}
            typeP={p.typeP}
          />
        ))}
      </div>
    </section>
  );
};

export default Projet;
