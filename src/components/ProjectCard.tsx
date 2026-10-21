import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  impact: string;
  image: string;
  tags: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200/70 transition-shadow hover:shadow-xl dark:bg-gray-900 dark:ring-gray-700">
      <div className="h-28 overflow-hidden bg-gray-100 dark:bg-gray-800 sm:h-32">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover object-center opacity-80 saturate-50"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-6 md:p-7">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-purple-700 dark:text-purple-300">
          {project.impact}
        </p>
        <h3 className="text-xl font-bold text-gray-950 dark:text-white">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <ul aria-label={`${project.title} areas`} className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-200"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;