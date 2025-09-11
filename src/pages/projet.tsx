import React from "react";
import Card from "../components/projet_card";

const projets = [
  {
    title: "tableau de bord de suivi commerciales",
    description:
      "création de visualisations interactives pour analyser le chiffre d’affaires, les produits les plus commandés et les plus rentables.",
    linkgit: "https://github.com/Pierrino421/powerbi-sales-dashboard-v2",
    linkimg: "/assets/projet2.png",
    comp1: "Power BI",
    comp2: "DAX",
    comp3: "Relations",
    typeP: "Analyse",
  },
  {
    title: "Bibliothèque en ligne",
    description:
      "Application web permettant de consulter, lire et télécharger des livres avec une interface d’administration pour gérer les livres, auteurs, genres et chapitres.",
    linkgit: "#",
    linkimg: "/assets/projet3.png",
    comp1: "Spring Boot",
    comp2: "MVC",
    comp3: "PostgreeSQL",
    typeP: "Dev",
  },
  {
    title: " Création d’un tableau de bord analytique des notes scolaires",
    description:
      "Analyse d’un dataset Kaggle sur les performances d’étudiants, avec visualisations interactives des moyennes et de la répartition par genre, groupe et éducation parentale.",
    linkgit: "https://github.com/Pierrino421/powerbi-student-grades",
    linkimg: "/assets/projet4.png",
    comp1: "Power BI",
    comp2: "DAX",
    comp3: "Relations",
    typeP: "Analyse",
  },
  {
    title: " Analyse des ventes automobiles via Power BI",
    description:
      " Réalisation d’un rapport interactif sur les ventes de véhicules, permettant d’identifier les tendances de ventes, la répartition par catégories et les indicateurs clés (CA, volume des ventes, produits les plus demandés)",
    linkgit: "https://github.com/Pierrino421/powerbi-car-sales",
    linkimg: "/assets/projet5.png",
    comp1: "Power BI",
    comp2: "DAX",
    comp3: "Relations",
    typeP: "Analyse",
  },
];

const Projet: React.FC = () => {
  return (
    <section id="project" className="bg-white py-8 px-6 mt-5">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mes Projets
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez une sélection de mes travaux dans le domaine de l'analyse de
          données et dans le développement web.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
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
