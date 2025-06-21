import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
  <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
    
    {/* Navigation des sections */}
    <nav className="flex flex-wrap justify-center gap-6 text-sm">
      <a href="#project" className="hover:text-green-400 transition">Projets</a>
      <a href="#skills" className="hover:text-green-400 transition">Compétences</a>
      <a href="#about" className="hover:text-green-400 transition">À propos</a>
      <a href="#contact" className="hover:text-green-400 transition">Contact</a>
    </nav>

    {/* Icônes réseaux sociaux */}
   <div className="flex gap-5 items-center">
  {/* GitHub */}
  <a href="https://github.com/Pierrino421" target="_blank" rel="noopener noreferrer" >
    <img
      src="/assets/github-142-svgrepo-com.svg"
      alt="GitHub"
      className="w-6 h-6 hover:opacity-70 transition"
    />
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/pierrino-kavege-5971a72b5/" target="_blank" rel="noopener noreferrer">
    <img
      src="/assets/linkedin-svgrepo-com.svg"
      alt="LinkedIn"
      className="w-6 h-6 hover:opacity-70 transition"
    />
  </a>

  {/* Email */}
  <a href="mailto:kavegep@3il.fr">
    <img
      src="/assets/mail-alt-svgrepo-com.svg"
      alt="Email"
      className="w-6 h-6 hover:opacity-70 transition"
    />
  </a>
</div>


    {/* Copyright */}
    <aside className="text-xs text-gray-400">
      © {new Date().getFullYear()} — Pierrino. Tous droits réservés.
    </aside>
  </div>
</footer>

  );
};

export default Footer;
