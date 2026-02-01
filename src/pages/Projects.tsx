import ProjectCard from "../components/ProjectCard";
import projects from "../projects";
const Projects = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0f172a] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-10">
        <h2 className="text-4xl text-gray-200 font-bold text-center tracking-wide">
          Projects
          <br />
          <span className="text-xl text-gray-700 ">
            Things I've built while learning and shipping real code
          </span>
        </h2>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
