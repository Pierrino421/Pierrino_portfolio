import React from "react";

interface ProjectProps {
  title: string;
  linkimg: string;
}

const CardC: React.FC<ProjectProps> = ({ title, linkimg }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition flex flex-col items-center justify-center w-full max-w-[160px] aspect-square">
  <div className="w-20 h-20 mb-3">
    <img
      src={linkimg}
      alt={title}
      className="w-full h-full object-contain"
    />
  </div>
  <h4 className="text-sm font-medium text-gray-900 text-center">{title}</h4>
</div>

  );
};

export default CardC;
