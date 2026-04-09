import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';
import Card from '@/components/layout/card';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  layoutType = 'default',
}: ProjectDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col md:flex-row">
      {/* Image and Content Container */}
      <div className="relative group w-full overflow-hidden rounded-xl">
        {/* Image */}
        <Link noCustomization href={url} externalLink>
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={previewImage}
              alt={`${name} preview`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Hover effect for link */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="text-white text-4xl" />
            </div>
          </div>
        </Link>
        
        {/* Project Details - Animated on hover */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-gray/50 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
          <Typography variant="subtitle" className="font-semibold text-gray-900">
            {name}
          </Typography>
          <Typography>{description}</Typography>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((technology, index) => (
              <Tag key={index} label={technology} />
            ))}
          </div>
          <Link
            href={url}
            noCustomization
            className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500"
            externalLink
          >
            <ExternalLink />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectDetails;
