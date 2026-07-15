'use client';

import { SOCIAL_LINKS } from '@/lib/data';
import { mergeClasses } from '@/lib/utils';

const SocialIcons = ({ className }: { className?: string }) => {
  return (
    <div className={mergeClasses('flex gap-2', className)}>
      {SOCIAL_LINKS.map((socialLink) => (
        <a
          key={socialLink.label}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialLink.label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:hover:bg-white/5"
        >
          <socialLink.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
