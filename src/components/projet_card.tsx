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
  className="bg-white rounded-lg shadow-md p-3 w-full max-w-xs flex flex-col justify-between mx-auto"
  data-category="ml"
>
  <div>
    <img
      src={linkimg}
      alt="Projet"
      className="w-full h-52 object-contain mb-2"
    />
  </div>
  <div className="p-2">
    <div className="flex justify-between items-start mb-3">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
        {typeP}
      </span>
    </div>
    <p className="text-gray-600 text-sm mb-3">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {[comp1, comp2, comp3].map((c, i) => (
        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
          {c}
        </span>
      ))}
    </div>
    <a
      href={linkgit}
      className="inline-flex items-center text-green-600 font-medium underline"
    >
      Voir le projet
      <img
        src="/assets/right-arrow-svgrepo-com.svg"
        alt="fleche"
        className="w-4 h-4 ml-2 hover:opacity-70 transition"
      />
    </a>
  </div>
</div>

  );
};

export default Card;
