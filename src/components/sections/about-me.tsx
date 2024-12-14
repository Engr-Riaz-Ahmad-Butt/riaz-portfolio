import Image from "next/image";

import FullPose from "/public/images/full-pic.jpg";
import Tag from "@/components/data-display/tag";
import Container from "@/components/layout/container";
import Typography from "@/components/general/typography";
import Link from "@/components/navigation/link";
import { EXTERNAL_LINKS } from "@/lib/data";

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={FullPose}
              alt="Fullpose of Riaz"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: "cover" }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
             About me
          </Typography>
          <Typography>
            I am a passionate Full Stack Software Developer with a keen interest
            in frontend technologies and a strong foundation in building fast,
            responsive, and visually stunning web applications. My expertise
            spans JavaScript, React.js, Node.js, and the MERN stack, further
            enriched by hands-on experience with modern tools like Next.js,
            TypeScript, NestJS, TailwindCSS, and Supabase.
          </Typography>
          <Typography>
          In addition to my
            frontend and full-stack work, I have honed skills as a NetSuite
            Developer, customizing ERP systems and optimizing workflows to
            enhance business operations. During my career, I had the privilege
            of interning as a MERN Stack Developer at BetWise Limited and as a
            NetSuite Developer at Abacus Consulting in Islamabad, where I gained
            invaluable industry experience and a deeper understanding of
            software development practices. 
          </Typography>
          <Typography>
          With a passion for creating seamless
            user experiences and maintaining clean, high-performance code, I
            enjoy working on projects end-to-end, from ideation to deployment. I
            thrive on learning new technologies and contributing to innovative
            solutions.
          </Typography>

          <Typography>
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </Typography>

          <Typography variant="h3">Education</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">BSc Software Engineering</Typography>
            </ul>
          </div>
          <Typography>
            One last thing, I&apos;m available for freelance work, so feel free
            to reach out.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
