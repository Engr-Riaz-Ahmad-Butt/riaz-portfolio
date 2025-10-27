import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

type ProjectDetailsProps = {
  project: ProjectDetailsType;
};

const ProjectDetails = ({
  project
}: ProjectDetailsProps) => {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl flex-shrink-0 flex flex-col h-full">
      <Link noCustomization href={project.url} externalLink>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={project.previewImage}
            alt={`${project.name} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="text-white" size={48} />
          </div>
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <Typography variant="subtitle" className="font-semibold text-gray-900 dark:text-gray-50 mb-3">
          {project.name}
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">
          {project.description}
        </Typography>
        <div className="flex flex-wrap gap-2">
          {project.technologies?.slice(0, 5).map((tech, index) => (
            <Tag key={index} label={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;