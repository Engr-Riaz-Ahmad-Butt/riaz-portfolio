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
    frontend: 'Frontend Excellence',
    backend: 'Robust Backend & APIs',
    database: 'Data Architecture',
    tools: 'DevOps & Creative Tools',
  };

  return (
    <Container id='skills' className="relative overflow-hidden bg-gray-950/5 dark:bg-black">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]" 
           style={{ backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="flex flex-col items-center gap-4 mb-20 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Tag label="Expertise" />
        </motion.div>
        <Typography variant="h3" className="font-bold text-gray-900 dark:text-zinc-50 tracking-tight">
          Modern Stack & <span className="text-gradient">High-Performance Tools</span>
        </Typography>
        <Typography className="max-w-2xl text-gray-600 dark:text-zinc-400">
          I specialize in building scalable, secure, and high-performance applications using the most modern tools in the industry.
        </Typography>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-20"
      >
        {Object.entries(categories).map(([key, techs]) => (
          techs.length > 0 && (
            <motion.div 
              key={key} 
              variants={categoryVariants}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <Typography variant="h3" className="text-xl font-black text-gray-900 dark:text-zinc-50 uppercase tracking-widest">
                    {categoryLabels[key as keyof typeof categoryLabels]}
                  </Typography>
                  <div className="h-[2px] flex-grow bg-gradient-to-r from-indigo-500 to-transparent opacity-20" />
                </div>
                <Typography variant="body3" className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-[0.2em] text-[10px]">
                  Mastery Level: Advanced
                </Typography>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
