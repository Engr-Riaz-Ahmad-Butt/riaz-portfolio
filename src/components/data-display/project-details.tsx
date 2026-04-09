import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';

type ProjectDetailsProps = {
  project: ProjectDetailsType;
};

const ProjectDetails = ({
  project
}: ProjectDetailsProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex h-full flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900"
    >
      <Link noCustomization href={project.url} externalLink>
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={project.previewImage}
            alt={`${project.name} preview`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-600/20 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100">
            <div className="rounded-full bg-white p-3 shadow-xl dark:bg-gray-950">
              <ExternalLink className="text-indigo-600 dark:text-indigo-400" size={24} />
            </div>
            <span className="mt-2 font-medium text-white drop-shadow-md">View Project</span>
          </div>
        </div>
      </Link>
      
      <div className="flex flex-grow flex-col p-6">
        <Typography variant="subtitle" className="mb-3 font-bold text-gray-900 dark:text-gray-100">
          {project.name}
        </Typography>
        <Typography className="mb-4 flex-grow text-sm text-gray-600 dark:text-gray-300">
          {project.description}
        </Typography>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.technologies?.slice(0, 5).map((tech, index) => (
            <Tag key={index} label={tech} className="bg-gray-100 dark:bg-gray-800 text-xs py-0.5" />
          ))}
        </div>
      </div>

      {/* Modern Gradient Border on Hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/20 via-transparent to-purple-500/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

export default ProjectDetails;