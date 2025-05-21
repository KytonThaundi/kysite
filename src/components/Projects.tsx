import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'EMR Quarterly Releases',
    description: 'Led successful quarterly releases for 5 modules within the Malawi national Electronic Medical Record (EMR) system, improving healthcare data management across the country.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1280',
    tags: ['EMR', 'Project Management', 'Healthcare IT', 'System Development'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'TB Electronic Health Records Migration',
    description: 'Successfully led the modernization and migration of the TB Electronic Health Records system into the Malawi EMR, enhancing data integration and accessibility.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1280',
    tags: ['Data Migration', 'System Integration', 'TB Health Records', 'EMR'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Healthcare Worker Training',
    description: 'Trained over 1,000 healthcare workers in EMRs from over 70 health facilities across Malawi, improving system adoption and data quality.',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1280',
    tags: ['Training', 'Capacity Building', 'EMR', 'Healthcare'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'EMR System Maintenance',
    description: 'Maintained an exceptional 96% uptime of EMRs in the 49 Health Facilities managed, ensuring continuous access to critical healthcare data.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1280',
    tags: ['System Maintenance', 'Uptime Management', 'Technical Support', 'EMR'],
    link: '#',
    github: '#'
  }
];

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Key Achievements
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore some of my notable achievements that demonstrate my expertise in healthcare IT systems,
            project management, and technical leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;