'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap, Layout, Zap, ShieldCheck, Cpu, Layers } from "lucide-react";

import FullPose from "/public/images/full-pic.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import StatBadge from "@/components/data-display/about-stats";

const AboutMeSection = () => {
  return (
    <Container className="relative overflow-hidden" id="about">
      {/* Background Glows for Dark Mode */}
      <div className="absolute top-1/2 left-0 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px] dark:bg-indigo-600/20" />
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[100px] dark:bg-purple-600/15" />

      <div className="flex flex-col items-center gap-4 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Tag label="About me" />
        </motion.div>
        <Typography variant="h3" className="text-center font-bold text-gray-900 dark:text-zinc-50">
          Know more <span className="text-gradient">About Me</span>
        </Typography>
      </div>

      <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-12">
        {/* Image & Stats Side */}
        <div className="relative flex justify-center lg:col-span-12 xl:col-span-5 lg:justify-start">
          <div className="relative">
            {/* Animated Background Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 z-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-transparent to-purple-500 opacity-30 blur-xl dark:opacity-40"
            />

            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 h-[400px] w-[300px] md:h-[500px] md:w-[340px] lg:w-[400px] overflow-hidden rounded-3xl border-8 border-white shadow-2xl dark:border-[#18181b]"
            >
              <Image
                src={FullPose}
                alt="Riaz Ahmad Butt"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority
              />
            </motion.div>

            {/* Floating Stats Badges */}
            <StatBadge 
              icon={Briefcase} 
              label="Years Exp" 
              value="3+" 
              delay={0.2}
              className="absolute -top-6 -right-12 z-20 hidden md:flex"
            />
            <StatBadge 
              icon={Code2} 
              label="Projects" 
              value="25+" 
              delay={0.4}
              className="absolute bottom-12 -left-12 z-20 hidden md:flex"
            />
          </div>
        </div>

        {/* Content Side */}
        <div className="flex flex-col gap-10 lg:col-span-12 xl:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <Typography className="text-xl font-semibold text-gray-800 dark:text-zinc-50 leading-tight">
              I am a passionate <span className="text-indigo-600 dark:text-indigo-400">Full Stack Software Developer</span> who loves crafting seamless digital experiences.
            </Typography>
            
            <Typography className="text-gray-600 dark:text-zinc-300 leading-relaxed text-lg">
              With a strong foundation in the <span className="font-bold text-gray-900 dark:text-zinc-50">MERN Stack</span> and modern technologies like 
              <span className="font-bold text-gray-900 dark:text-zinc-50"> Next.js, TypeScript, and TailwindCSS</span>, I specialize in building fast, 
              scalable, and visually stunning web applications. 
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-5 rounded-2xl bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <Typography variant="body1" className="font-bold text-gray-900 dark:text-zinc-50 leading-none">Education</Typography>
                  <Typography variant="body3" className="text-gray-600 dark:text-zinc-400 mt-1">BSc Software Engineering</Typography>
                </div>
              </div>
              <div className="flex gap-4 p-5 rounded-2xl bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm border border-gray-100 dark:border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400">
                  <Layout size={28} />
                </div>
                <div>
                  <Typography variant="body1" className="font-bold text-gray-900 dark:text-zinc-50 leading-none">Availability</Typography>
                  <Typography variant="body3" className="text-gray-600 dark:text-zinc-400 mt-1">Freelance & Full-time</Typography>
                </div>
              </div>
            </div>

            {/* Core Strengths Section */}
            <div className="mt-4">
              <Typography variant="body1" className="font-bold text-gray-900 dark:text-zinc-50 mb-6 flex items-center gap-2">
                <Zap className="text-indigo-500" size={20} />
                What I Excel At
              </Typography>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Layers, label: "UI/UX Architecture" },
                  { icon: Cpu, label: "Backend Scalability" },
                  { icon: ShieldCheck, label: "ERP Customization" },
                  { icon: Zap, label: "Performance Tuning" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-50 dark:border-white/5 bg-gray-50/30 dark:bg-white/[0.02]">
                    <item.icon className="text-indigo-500 dark:text-indigo-400" size={24} />
                    <Typography variant="body3" className="text-center font-medium text-gray-700 dark:text-zinc-300">{item.label}</Typography>
                  </div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-4 relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full" />
              <Typography className="text-indigo-600 dark:text-indigo-400 font-bold italic pl-6 text-lg leading-relaxed">
                &quot;I enjoy working on products end-to-end, from ideation all the way to deployment, ensuring every detail aligns with the user&apos;s vision.&quot;
              </Typography>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
