const About = () => {
  return (
    <section className="bg-[#0f172a] mx-auto pt-24 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto space-y-10 animate-fadeUp">
        <div>
          <h2 className="text-6xl text-[#3068e9]">Tanisha Mehra</h2>
          <p className="text-2xl text-gray-400 mt-2">
            Building things on the web, one clean component at a time.
          </p>
          <hr className="border-gray-800 my-6" />
        </div>

        <p className="text-gray-100 lg:text-xl md:text-lg text-sm leading-relaxed">
          I’m a Computer Science Engineering student focused on frontend
          development, with a strong interest in building clean, responsive, and
          user-friendly web applications. I primarily work with React and modern
          JavaScript, and enjoy structuring components thoughtfully, solving
          problems, and writing clean, maintainable code. I’m also exploring
          backend technologies to better understand how applications work
          end-to-end through hands-on projects.
        </p>

        <h2 className="text-2xl text-white font-bold">Skills</h2>

        <div className="text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <ul className="space-y-2 text-gray-400">
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="space-y-2 text-gray-400">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
              <li>Component-based Architecture</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Platforms</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Vite</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Currently Exploring</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Backend fundamentals</li>
              <li>REST APIs</li>
              <li>Full-stack application flow</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
