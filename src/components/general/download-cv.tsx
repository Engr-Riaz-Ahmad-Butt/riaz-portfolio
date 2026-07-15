'use client';

import Button from '@/components/general/button';

const CV_PATH = '/files/Riaz-Ahmad-Butt-CV.pdf';

const DownloadCV = () => {
  return (
    <Button asChild>
      <a href={CV_PATH} download="Riaz-Ahmad-Butt-CV.pdf" target="_blank" rel="noopener noreferrer">
        Download CV
      </a>
    </Button>
  );
};

export default DownloadCV;
