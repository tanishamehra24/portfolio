import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-8
                      flex flex-col md:flex-row
                      items-center justify-between gap-4">

        {/* Left */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Tanee. All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/tanishamehra24"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/tanisha-mehra/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:tanishamehra24@email.com"
            className="text-gray-400 hover:text-white transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

