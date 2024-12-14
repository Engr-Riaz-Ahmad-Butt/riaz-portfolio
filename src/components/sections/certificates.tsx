import { CERTIFICATES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import CertificateDetails from '@/components/data-display/certificate-details';
import Container from '@/components/layout/container';
import Typography from '../general/typography';

const TestimonialsSection = () => {
  return (
    <Container id="certificates">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Certificates" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
        Certifications I&#39;ve Earned:
        </Typography>
      </div>

      <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap ">
        {CERTIFICATES?.map((certificates, index) => (
          <CertificateDetails key={index} {...certificates} />
        ))}
      </div>
    </Container>
  );
};

export default TestimonialsSection;
