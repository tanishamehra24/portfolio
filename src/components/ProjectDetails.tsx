import {useParams} from "react-router-dom";
import projects from "../projects";
import ProjectSection from "../components/ProjectSection";

const ProjectDetails = () => {
  const {id} = useParams<{id: string}>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <p className="text-white p-10">Project not found </p>;
  }

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-12  mx-auto flex items-center ">
      <div className="my-20">
        {/* Header */}
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="mt-4 text-slate-400">{project.overview}</p>

        {/* Sections */}
        <ProjectSection title="Problem Statement">
          {project.problem}
        </ProjectSection>

        <ProjectSection title="Solution & Approach">
          {project.solution}
        </ProjectSection>

        <ProjectSection title="Features">
          <ul className="list-disc pl-5 space-y-1">
            {project.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection title="Tech Stack">
          <p>
            <b>Frontend:</b> {project.tech.frontend.join(", ")}
          </p>
          <p>
            <b>Backend:</b> {project.tech.backend.join(", ")}
          </p>
          <p>
            <b>Database:</b> {project.tech.database.join(", ")}
          </p>
        </ProjectSection>

        <ProjectSection title="Challenges & Learnings">
          <ul className="list-disc pl-5 space-y-1">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection title="Future Improvements">
          <ul className="list-disc pl-5 space-y-1">
            {project.future.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </ProjectSection>

        {/* Links */}
        <div className="flex gap-4 mt-12 flex-wrap">
          <a
            href={project.frontendRepo}
            target="_blank"
            className="px-4 py-2 border rounded hover:bg-white hover:text-black transition"
          >
            🎨 Frontend Repo
          </a>

          <a
            href={project.backendRepo}
            target="_blank"
            className="px-4 py-2 border rounded hover:bg-white hover:text-black transition"
          >
            ⚙️ Backend Repo
          </a>

          <a
            href={project.live}
            target="_blank"
            className="px-4 py-2 border rounded hover:bg-white hover:text-black transition"
          >
            🌐 Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
