const About = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center mx-auto pt-24 md:pt-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-auto space-y-10 animate-fadeUp">
        <h2 className="text-6xl my-auto text-[#3068e9]">
          Tanisha Mehra
          <br />
          <span className="text-2xl text-gray-400">
            - Building things on the web, one clean component at a time.
            <hr className="text-gray-800 my-6"/>
          </span>
        </h2>
        <p className="text-gray-100 lg:text-xl sm:text-sm md:text-lg leading-relaxed ">
          I'm a Computer Science Engineering student and aspiring frontend
          developer with a strong interest in building clean, responsive, and
          user-friendly web applications. I primarily work with React and modern
          JavaScript, focusing on creating interfaces that are intuitive,
          accessible, and visually simple. I enjoy breaking down problems,
          structuring components thoughtfully, and writing clean code that is
          easy to maintain and scale. Alongside frontend development, I'm
          actively exploring backend technologies to broaden my understanding of
          full-stack development and how applications work end-to-end. I believe
          in learning by building, which is why I focus on real-world projects
          that challenge me to improve both technically and creatively. I'm
          continuously refining my skills, staying curious about new tools and
          frameworks, and aiming to build digital experiences that are both
          functional and meaningful.
        </p>
      </div>
    </section>
  );
};

export default About;
