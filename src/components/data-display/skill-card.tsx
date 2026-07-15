'use client';

import { TechDetails } from '@/lib/types';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Typography from '@/components/general/typography';

const SkillCard = ({ logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-gray p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-card-hover">
      <div className="relative h-12 w-12">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          fill
          className="object-contain"
          sizes="48px"
        />
      </div>
      <Typography className="text-center font-medium text-gray-900" variant="body3">
        {label}
      </Typography>
    </div>
  );
};

export default SkillCard;
