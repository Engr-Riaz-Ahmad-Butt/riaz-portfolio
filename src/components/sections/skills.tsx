'use client';

import { motion } from 'framer-motion';
import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';
import SkillCard from '@/components/data-display/skill-card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
  },
};

const SkillsSection = () => {
  // Group technologies by category
  const categories = {
    frontend: TECHNOLOGIES.filter(tech => tech.category === 'frontend'),
    backend: TECHNOLOGIES.filter(tech => tech.category === 'backend'),
    database: TECHNOLOGIES.filter(tech => tech.category === 'database'),
    tools: TECHNOLOGIES.filter(tech => tech.category === 'tools'),
  };

  const categoryLabels = {
    frontend: 'Frontend Development',
    backend: 'Backend & APIs',
    database: 'Databases',
    tools: 'DevOps & Tools',
  };

  return (
    <Container id='skills' className="overflow-hidden">
      <div className="flex flex-col items-center gap-4 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="self-center"
        >
          <Tag label="Expertise" />
        </motion.div>
        <Typography variant="h3" className="text-center font-bold text-gray-900 dark:text-gray-100">
          The skills, tools and technologies <br /> 
          <span className="text-gradient">I am really good at:</span>
        </Typography>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col gap-16"
      >
        {Object.entries(categories).map(([key, techs]) => (
          techs.length > 0 && (
            <motion.div 
              key={key} 
              variants={categoryVariants}
              transition={{
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
                staggerChildren: 0.1
              }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4">
                <Typography variant="h3" className="text-lg font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest">
                  {categoryLabels[key as keyof typeof categoryLabels]}
                </Typography>
                <div className="h-px flex-grow bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-800" />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {techs.map((technology, index) => (
                  <SkillCard key={index} {...technology} />
                ))}
              </div>
            </motion.div>
          )
        ))}
      </motion.div>
    </Container>
  );
};

export default SkillsSection;
