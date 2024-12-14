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
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3 border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition-transform duration-300 transform hover:scale-105">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          src={image!}
          alt={`${title} avatar`}
          className="cursor-pointer rounded-lg"
        />
      </a>
      <Typography>&quot;{CertificateName}&quot;</Typography>
      <div className="flex w-full flex-col gap-1">
        <Typography>
          {title}
        </Typography>
      </div>
    </Card>
  );
};

export default CertificateDetails;
