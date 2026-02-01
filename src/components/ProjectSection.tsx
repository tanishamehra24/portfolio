type Props = {
  title: string;
  children: React.ReactNode;
};

const ProjectSection = ({title, children}: Props) => {
  return (
    <div className="mt-10 bg-[#020617] border border-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-3 text-slate-200">{title}</h2>
      <div className="text-slate-400 leading-relaxed">{children}</div>
    </div>
  );
};

export default ProjectSection;
