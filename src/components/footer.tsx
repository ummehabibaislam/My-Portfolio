import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e1e42] text-gray-300 px-6 py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-10">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-400" />
            <div>
              <p className="text-sm text-gray-400 uppercase mb-1">Email</p>
              <p className="font-semibold text-white">tanni.bsmrstu@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaGithub className="text-blue-400" />
            <div>
              <p className="text-sm text-gray-400 uppercase mb-1">GitHub</p>
              <a
                href="https://github.com/ummehabibaislam"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:text-blue-400 transition-colors duration-300"
              >
                ummehabibaislam
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-right">
          © 2025 Umme Habiba Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
