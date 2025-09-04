import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-60 p-4 mt-2 mb-2 ">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Me Contacter
          </h2>
          <p className="text-lg text-gray-600 mx-auto">
            Souhaitez discuter d'une opportunité ? N'hésitez pas à me contacter.
          </p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Informations de contact
        </h3>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-10 h-10  bg-primary/10 flex items-center justify-center mr-4 mt-1">
              <div className="w-5 h-5 flex items-center justify-center text-primary">
                <a href="mailto:kavegep@3il.fr">
                  <img
                    src="/assets/mail-alt-svgrepo-com.svg"
                    alt="Email"
                    className="w-6 h-6 hover:opacity-70 transition"
                  />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Email</h4>
              <p className="text-gray-600">kavegep@3il.fr</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mr-4 mt-1">
              <div className="w-5 h-5 flex items-center justify-center text-primary">
                <a>
                  <img
                    src="/assets/telephone-svgrepo-com.svg"
                    alt="tel"
                    className="w-6 h-6 hover:opacity-70 transition"
                  />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Téléphone</h4>
              <p className="text-gray-600">+33 7 68 74 14 12</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mr-4 mt-1">
              <div className="w-5 h-5 flex items-center justify-center text-primary">
                <a>
                  <img
                    src="/assets/map-pin-svgrepo-com.svg"
                    alt="Email"
                    className="w-6 h-6 hover:opacity-70 transition"
                  />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-1">Localisation</h4>
              <p className="text-gray-600">France</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="font-medium text-gray-900 mb-4">Suivez-moi</h4>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center text-gray-600 hover:text-primary">
                <a
                  href="https://www.linkedin.com/in/pierrino-kavege-5971a72b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/linkedin-svgrepo-com.svg"
                    alt="LinkedIn"
                    className="w-6 h-6 hover:opacity-70 transition"
                  />
                </a>
              </div>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center text-gray-600 hover:text-primary">
                <a
                  href="https://github.com/Pierrino421"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/github-142-svgrepo-com.svg"
                    alt="GitHub"
                    className="w-6 h-6 hover:opacity-70 transition text-white"
                  />
                </a>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
