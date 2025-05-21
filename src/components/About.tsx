import React from 'react';
import { Code, Layout, Server, Sparkles, PenTool, Gauge } from 'lucide-react';

const skillsData = [
  {
    icon: <Code className="w-6 h-6" />,
    title: 'Software Development',
    description: 'Developing and maintaining software applications with focus on quality and performance.',
    skills: ['C#', 'PHP', 'JavaScript', 'MySQL', 'Docker']
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'System Analysis',
    description: 'Analyzing business processes and requirements to propose effective technical solutions.',
    skills: ['Business Process Analysis', 'Requirements Gathering', 'System Design', 'Documentation']
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Database Management',
    description: 'Managing and optimizing database systems to ensure data integrity and performance.',
    skills: ['MySQL', 'MSSQL', 'Data Security', 'Data Governance']
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Health Informatics',
    description: 'Implementing and maintaining electronic health record systems and health information systems.',
    skills: ['EMR Systems', 'Health Data Management', 'Healthcare IT', 'PEPFAR Program']
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Leadership & Communication',
    description: 'Leading teams and effectively communicating with stakeholders at all levels.',
    skills: ['Team Leadership', 'Stakeholder Management', 'Technical Training', 'Mentorship']
  },
  {
    icon: <Gauge className="w-6 h-6" />,
    title: 'Problem-solving',
    description: 'Identifying and resolving complex technical issues in business information systems.',
    skills: ['Troubleshooting', 'System Testing', 'Quality Assurance', 'Issue Resolution']
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-300/20 dark:from-purple-600/10 dark:to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-blue-400/20 to-teal-300/20 dark:from-blue-600/10 dark:to-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Information Technology professional with a proven track record of delivering innovative solutions that drive organizational growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Professional Experience</h3>

            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">System Analyst at Elizabeth Glaser Pediatric AIDS Foundation- Lilongwe Malawi</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">April 2024 – Present</p>
            <p className="text-gray-700 dark:text-gray-300">
              Serving as the main client interface for application development projects, coordinating activities with stakeholders,
              analyzing business processes, proposing technical specifications, and ensuring quality assurance.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Health Informatics Systems Officer at Elizabeth Glaser Pediatric AIDS Foundation- Blantyre Malawi</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">September 2020 – April 2024</p>
            <p className="text-gray-700 dark:text-gray-300">
              Led system setup and configuration, ensured system uptime, implemented data security measures,
              and provided technical assistance and training to facility stakeholders.
            </p>

            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-6">Support and Deployment Officer at Baobab Health Trust- Lilongwe Malawi</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">January 2019 – August 2020</p>
            <p className="text-gray-700 dark:text-gray-300">
              Performed system deployments and updates, monitored system performance, built relationships with partners,
              and delivered quality reports to stakeholders.
            </p>

            <h3 className="text-xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-200">Education</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">MBA Management Information Systems</span> - UNICAF (Expected 2025)<br/>
              <span className="font-semibold">BSc Management Information Systems</span> - University of Malawi (2016)
            </p>
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Skills & Expertise
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4 text-purple-600 dark:text-purple-400">
                <div className="mr-3 bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40 transition-colors duration-300">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">{skill.title}</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.skills.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;