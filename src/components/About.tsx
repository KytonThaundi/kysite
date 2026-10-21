import React from 'react';
import { Code, Database, HeartPulse, MessagesSquare, SearchCheck, Settings2 } from 'lucide-react';

const skillsData = [
  {
    icon: <SearchCheck className="h-5 w-5" aria-hidden="true" />,
    title: 'Business & systems analysis',
    skills: ['Business process analysis', 'Requirements gathering', 'System design', 'Documentation']
  },
  {
    icon: <HeartPulse className="h-5 w-5" aria-hidden="true" />,
    title: 'Health informatics',
    skills: ['EMR systems', 'Health data management', 'Healthcare IT', 'PEPFAR program']
  },
  {
    icon: <Settings2 className="h-5 w-5" aria-hidden="true" />,
    title: 'Implementation & support',
    skills: ['System deployment', 'Quality assurance', 'Troubleshooting', 'Technical training']
  },
  {
    icon: <Database className="h-5 w-5" aria-hidden="true" />,
    title: 'Data & databases',
    skills: ['MySQL', 'MSSQL', 'Data security', 'Data governance']
  },
  {
    icon: <Code className="h-5 w-5" aria-hidden="true" />,
    title: 'Software & development tools',
    skills: ['Ruby on Rails', 'Vue.js', 'React', 'Ionic', 'TypeScript', 'JavaScript', 'PHP', 'C#', 'Tailwind CSS', 'Vite', 'Node.js', 'Express', 'Docker']
  },
  {
    icon: <MessagesSquare className="h-5 w-5" aria-hidden="true" />,
    title: 'Working with people',
    skills: ['Stakeholder management', 'Team leadership', 'Mentorship', 'Capacity building']
  }
];

const experience = [
  {
    role: 'Business Analyst',
    organization: 'Elizabeth Glaser Pediatric AIDS Foundation',
    location: 'Supporting Malawi’s Digital Health Division (DHD)',
    dates: 'April 2024 – Present',
    description: 'Support the Digital Health Division in building the Malawi Healthcare Information System (MaHIS). Coordinate stakeholders, analyze business processes, shape technical specifications, and support quality assurance.'
  },
  {
    role: 'Health Informatics Systems Officer',
    organization: 'Elizabeth Glaser Pediatric AIDS Foundation',
    location: 'Blantyre, Malawi',
    dates: 'September 2020 – April 2024',
    description: 'Led system setup and configuration, supported system uptime and data security, and provided technical assistance and training to facility stakeholders.'
  },
  {
    role: 'Support and Deployment Officer',
    organization: 'Baobab Health Trust',
    location: 'Lilongwe, Malawi',
    dates: 'January 2019 – August 2020',
    description: 'Supported system deployments and updates, monitored performance, worked with partners, and prepared reports for stakeholders.'
  },
  {
    role: 'Software Development Engineer',
    organization: 'The Mile Ltd',
    location: 'Blantyre, Malawi',
    dates: 'May 2017 – December 2018',
    description: 'Developed and maintained client software, analyzed systems, supported networking projects, and provided technical guidance and proposals.'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-20 overflow-hidden bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-purple-700 dark:text-purple-300">
            How I work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white md:text-5xl">
            From real-world needs to systems people can rely on
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          At my core, I am a business analyst. I clarify needs, map processes, and connect stakeholders with technical teams to deliver practical systems. Much of my experience is in digital health, and the analysis and delivery skills I bring are useful across industries.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-950 dark:text-white">Experience</h3>
            <ol className="space-y-8 border-l-2 border-purple-200 pl-6 dark:border-purple-900">
              {experience.map((item) => (
                <li key={`${item.role}-${item.dates}`} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-purple-600 ring-4 ring-white dark:bg-purple-400 dark:ring-gray-900" aria-hidden="true" />
                  <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">{item.dates}</p>
                  <h4 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">{item.role}</h4>
                  <p className="mt-1 font-medium text-gray-700 dark:text-gray-300">{item.organization}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.location}</p>
                  <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl bg-gray-50 p-6 dark:bg-gray-800">
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">Education</h3>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">MBA, Management Information Systems</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">UNICAF · 2026</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">BSc, Management Information Systems</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">University of Malawi · 2016</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-950 dark:text-white">Capabilities</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {skillsData.map((skill) => (
                  <div key={skill.title} className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                      {skill.icon}
                      <h4 className="font-semibold text-gray-900 dark:text-white">{skill.title}</h4>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {skill.skills.map((item) => (
                        <li key={item} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
