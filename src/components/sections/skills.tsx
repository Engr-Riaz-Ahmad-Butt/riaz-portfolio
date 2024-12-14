import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container id='skills'>
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Skills" className='text-2xl'/>
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          The skills, tools and technologies I am really good at:
        </Typography>
      </div>

      {/* <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div> */}

<div className="grid grid-cols-3 gap-6 md:grid-cols-6 lg:grid-cols-8">
  {TECHNOLOGIES.map((technology, index) => (
    <div
      className="flex flex-col items-center justify-center p-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition-transform duration-300 transform hover:scale-105"
      key={index}
    >
      <TechDetails {...technology} />
    </div>
  ))}
</div>


    </Container>
  );
};

export default SkillsSection;
