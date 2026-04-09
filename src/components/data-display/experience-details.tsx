import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
import Card from '@/components/layout/card';
import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';
import { Link } from 'lucide-react';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const ExperienceDetails = ({
  logo,
  darkModeLogo,
  logoAlt,
  position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
  url,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex w-full max-w-6xl flex-col justify-between border border-gray-100 bg-white shadow-sm gap-4 p-8 md:flex-row md:gap-8 dark:border-gray-800 dark:bg-gray-900">
      <div className="max-md:order-1 md:w-1/6">
      <a href={url} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-110">
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={logoAlt}
          className="max-w-[120px]"
        />
        </a>
      </div>
      <div className="flex flex-col gap-4 max-md:order-3 md:w-2/2">
        <Typography variant="subtitle" className="font-bold text-gray-900 dark:text-gray-100">
          {position}
        </Typography>
        <ul className="flex list-disc flex-col gap-2 md:gap-1">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index} className="text-gray-600 dark:text-gray-300">
              {sentence}
            </Typography>
          ))}
        </ul>
      </div>
      <div className="max-md:order-2 md:w-1/4">
        <Typography className="text-gray-700 dark:text-gray-400 font-medium md:text-right">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                endDate
              )
            : 'NA'}
        </Typography>
      </div>
    </Card>
  );
};

export default ExperienceDetails;
