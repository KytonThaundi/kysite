import React from 'react';
import { Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const images = import.meta.glob<Record<string, { default: string }>>('../assets/img/*.{png,jpg,jpeg}', { eager: true });

const projectsData = [
  {
    id: 1,
    title: 'EMR quarterly releases',
    description: 'Led quarterly releases across five modules in Malawi’s national Electronic Medical Record system, supporting ongoing improvements to healthcare data management.',
    impact: '5 EMR modules',
    image: images['../assets/img/dash-emr.png']?.default || '',
    tags: ['Digital health', 'Release coordination', 'Requirements analysis']
  },
  {
    id: 2,
    title: 'TB health records migration',
    description: 'Led the modernization and migration of the TB Electronic Health Records system into Malawi’s EMR, improving integration and access to records.',
    impact: 'System integration',
    image: images['../assets/img/tb-ehr.png']?.default || '',
    tags: ['Data migration', 'System integration', 'EMR']
  },
  {
    id: 3,
    title: 'Healthcare worker training',
    description: 'Trained more than 1,000 healthcare workers on EMR use across more than 70 facilities in Malawi, strengthening adoption and data quality.',
    impact: '1,000+ people · 70+ facilities',
    image: images['../assets/img/capacity_building.png']?.default || '',
    tags: ['Training', 'Capacity building', 'Digital health']
  },
  {
    id: 4,
    title: 'EMR reliability and support',
    description: 'Maintained 96% EMR uptime across 49 managed health facilities, helping keep critical healthcare systems available.',
    impact: '96% uptime · 49 facilities',
    image: images['../assets/img/system_maintainance.png']?.default || '',
    tags: ['System reliability', 'Technical support', 'EMR']
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-20 bg-gray-50 py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Selected impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A sample of outcomes from my digital health work. The same business analysis, stakeholder coordination, and systems delivery skills apply across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/KytonThaundi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-semibold text-gray-800 transition-colors hover:border-purple-500 hover:text-purple-800 dark:border-gray-600 dark:text-gray-100 dark:hover:border-purple-400 dark:hover:text-purple-200"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
            <span>Visit my GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;