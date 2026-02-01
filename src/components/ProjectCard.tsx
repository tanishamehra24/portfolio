import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  desc: string;
};

const ProjectCard = ({ id, title, desc }: Props) => {
  return (
    <Link to={`/projects/${id}`}>
      <div className="bg-[#020617] border border-gray-800 rounded-xl p-6 hover:scale-105 transition cursor-pointer h-full">
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-3 text-gray-400 text-sm">
          {desc}
        </p>

        <span className="inline-block mt-4 text-sm text-indigo-400">
          View Project →
        </span>
      </div>
    </Link>
  );
};

export default ProjectCard;
