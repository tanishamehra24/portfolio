import {Github, Linkedin, Mail} from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] grid place-items-center py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-10">
        <h3 className="text-gray-200 text-3xl sm:text-4xl text-center font-semibold">
          Open to Internships & freelance Opportunities
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a
            href="mailto:tanishamehra24@gmail.com"
            className="flex items-center gap-3
    px-6 py-3
    rounded-md
    text-2xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    text-gray-200 font-medium
    hover:bg-white/10
    hover:border-[#38bdf8]/40
    hover:text-white
    transition-all duration-300 
  "
          >
            <Mail size={28} className="text-[#38bdf8]" /> <span>Email Me</span>
          </a>

          <a
            href="https://github.com/tanishamehra24"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3
    px-6 py-3
    rounded-md
    text-2xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    text-gray-200 font-medium
    hover:bg-white/10
    hover:border-[#38bdf8]/40
    hover:text-white
    transition-all duration-300 
  "
          >
            <Github size={28} className="text-[#38bdf8]" /> <span>Github</span>
          </a>

          <a
            href="https://www.linkedin.com/in/tanisha-mehra/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3
    px-6 py-3
    rounded-md
    text-2xl
    border border-white/10
    bg-white/5
    backdrop-blur-md
    text-gray-200 font-medium
    hover:bg-white/10
    hover:border-[#38bdf8]/40
    hover:text-white
    transition-all duration-300 
  "
          >
            <Linkedin size={28} className="text-[#38bdf8]" />{" "}
            <span>Linkedin</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
