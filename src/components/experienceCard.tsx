import React from 'react'

interface ExperienceCardProps {
    title: string;
    company: string;
    description: string;
    imageUrl: string;
    skills: string[];
    duration: string; 
    companyUrl?: string;
}

const ExprerienceCard :React.FC<ExperienceCardProps> = ({
  title,
  company,
  description,
  imageUrl,
  skills,
  duration ,
  companyUrl
}) => {
  return (
    <div className="max-w-2xl mx-auto mb-8">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8">
        <div className="flex-shrink-0 flex justify-center items-center mb-4 md:mb-0 md:mr-8">
          <img
            className="w-24 h-24 object-cover rounded-full border-4 border-gray-100 shadow"
            src={imageUrl}
            alt={company}
          />
        </div>
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <a className="text-md text-indigo-600 font-medium mb-1" href={companyUrl}>{company}</a>
          <p className="text-sm text-gray-500 mb-2">{duration}</p> {/* Affichage de la durée */}
          <p className="text-gray-600 mb-4 whitespace-pre-line">{description}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium border border-indigo-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExprerienceCard;