import { getAllCaseStudySlugs } from '@/content/work/case-studies';

export default function sitemap() {
  const base = 'https://www.engr-riaz.tech';
  const caseStudies = getAllCaseStudySlugs().map((slug) => ({
    url: `${base}/work/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
    ...caseStudies,
  ];
}
