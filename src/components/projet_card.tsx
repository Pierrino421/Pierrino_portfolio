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
      className="bg-white rounded-2xl shadow-lg transition-all duration-300 w-full max-w-sm mx-auto flex flex-col overflow-hidden border border-gray-100 min-h-[480px]" // min-h ajoutée
      data-category="ml"
    >
      <div className="relative">
        <img
          src={linkimg}
          alt={title}
          className="w-full h-48 object-cover object-center rounded-t-2xl"
        />
        <span className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold rounded-full shadow">
          {typeP}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {[comp1, comp2, comp3].map(
            (c, i) =>
              c && (
                <span
                  key={i}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full"
                >
                  {c}
                </span>
              )
          )}
        </div>
        <div className="mt-auto">
          <a
            href={linkgit}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition"
          >
            Voir le projet
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;