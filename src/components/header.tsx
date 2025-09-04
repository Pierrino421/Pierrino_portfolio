import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-xl">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <div className="w-7 h-7 rounded-full bg-green-100 items-center justify-center mr-3">
              <img
                src="/assets/person-svgrepo-com.svg"
                alt="pp"
                className="w-6 h-6 hover:opacity-70 transition mr-1"
              />
            </div>

            <span className="self-center text-xl font-semibold whitespace-nowrap text-green-600">
              Pierrino KAVEGE
            </span>
          </a>

          {/* Toggle button mobile */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-green-100 focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu-2"
            >
              <svg
                className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Menu navigation */}
          <div
            id="mobile-menu-2"
            className={`${
              isOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-7 lg:mt-0">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#experience" className="block py-2 pr-4 pl-3 text-gray-700">
                  Expériences
                </a>
              </li>
              <li>
                <a
                  href="#projet"
                  className="block py-2 pr-4 pl-3 text-gray-700"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#competence"
                  className="block py-2 pr-4 pl-3 text-gray-700"
                >
                  Compétences
                </a>
              </li>
              <li>
                <a href="#about" className="block py-2 pr-4 pl-3 text-gray-700">
                  À propos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 pr-4 pl-3 text-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
