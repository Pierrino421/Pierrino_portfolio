import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  linkgit: string;
  linkimg: string;
  comp1: string;
  comp2: string;
  comp3: string;
  typeP: string;
}

const Card: React.FC<ProjectProps> = ({
  title,
  description,
  linkgit,
  linkimg,
  comp1,
  comp2,
  comp3,
  typeP,
}) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md p-1 w-[400px] h-[460px] flex flex-col justify-between  "
      data-category="ml"
    >
      <div>
        <img
          src={linkimg}
          alt="Projet de prédiction"
          className="w-full h-50 object-contain mb-1"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <span className="px-3 py-1 bg-green-100 text-primary text-xs font-medium rounded-full">
            {typeP}
          </span>
        </div>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
            {comp1}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
            {comp2}
          </span>
          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
            {comp3}
          </span>
        </div>
        <a
          href={linkgit}
          className="inline-flex items-center text-green-600 font-medium font-medium underline mb-3"
        >
          Voir le projet
          <div className="w-5 h-5 ml-2 flex items-center justify-center">
            <img
              src="/assets/right-arrow-svgrepo-com.svg"
              alt="fleche"
              className="w-6 h-6 hover:opacity-70 transition"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
