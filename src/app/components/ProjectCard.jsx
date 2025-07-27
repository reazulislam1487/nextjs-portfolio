const ProjectCard = ({ title, description, live, github }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-[#718096] mb-4">{description}</p>
      <div className="flex gap-4">
        <a
          href={live}
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          Live
        </a>
        <a
          href={github}
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
