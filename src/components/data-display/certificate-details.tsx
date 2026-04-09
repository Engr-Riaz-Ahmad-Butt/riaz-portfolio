import Image from 'next/image';

import { CertificatesDetails as CertificateDetailsJProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';

const CertificateDetails = ({
  image,
  title,
  CertificateName,
  url,
}: CertificateDetailsJProps) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:p-12 border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:border-gray-800 dark:bg-gray-900">
      <a href={url} target="_blank" rel="noopener noreferrer" className="overflow-hidden rounded-lg shadow-md transition-transform duration-500 hover:scale-105">
        <Image
          src={image!}
          alt={`${title} avatar`}
          className="cursor-pointer"
        />
      </a>
      <div className="flex w-full flex-col gap-3 text-center">
        <Typography variant="subtitle" className="font-bold text-gray-900 dark:text-gray-100">
          {CertificateName}
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-300 text-sm italic">
          &quot;{title}&quot;
        </Typography>
      </div>
    </Card>
  );
};

export default CertificateDetails;
