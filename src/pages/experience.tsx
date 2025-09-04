import React from "react";
import ExprerienceCard from "../components/experienceCard";

const experience: React.FC = () => {
  return (
    <section id="experience" className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mes expériences Professionnelles
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez mon parcours professionnel et les expériences qui ont
          façonné mes compétences et mon expertise dans le domaine du
          développement web et de l'analyse de données.
        </p>
      </div>
      <ExprerienceCard
        title="Stagiaire Développeur Web"
        company="Washoo"
        description="Participation au développement d’une application web de gestion de services de nettoyage
            de véhicules.
            Conception de l’architecture de la base de données (MCD, MLD) et modélisation des
            processus métiers via des diagrammes UML (cas d’utilisation, activité).
            Implémentation de fonctionnalités pour les clients, prestataires et administrateurs
            (authentification, formulaires, CRUD, paiement)."
        imageUrl="/assets/washoo.JPG"
        skills={[
          "React",
          "TypeScript",
          "Nest.js",
          "PostgreSQL",
          "Docker",
          "Stripe",
          "Figma",
        ]}
        duration="07 Juillet à 29 Août 2025"
        companyUrl=" "
      />
    </section>
  );
};

export default experience;
