import * as React from 'react';

import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps, ref) => {
    return (
      <div
        ref={ref}
        className={mergeClasses(
          'group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-sky-200/80 bg-white/85 px-5 py-2 shadow-[0_10px_30px_rgba(14,165,233,0.14)] backdrop-blur-xl dark:border-sky-400/20 dark:bg-slate-900/70 dark:shadow-[0_12px_34px_rgba(2,132,199,0.16)]',
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(224,242,254,0.78),rgba(191,219,254,0.7))] dark:bg-[linear-gradient(135deg,rgba(15,23,42,0.96),rgba(12,74,110,0.82),rgba(30,64,175,0.72))]" />
        <span className="absolute -left-10 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-sky-300/50 blur-2xl transition-transform duration-500 group-hover:translate-x-3 dark:bg-sky-400/20" />
        <span className="absolute -right-8 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-blue-300/40 blur-2xl transition-transform duration-500 group-hover:-translate-x-3 dark:bg-blue-400/20" />
        <span className="absolute inset-[1px] rounded-full border border-white/80 dark:border-white/10" />
        <span className="relative inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_14px_rgba(14,165,233,0.85)] dark:bg-sky-300 dark:shadow-[0_0_16px_rgba(125,211,252,0.9)]" />
          <Typography
            variant="body3"
            className="p-0 text-sm font-semibold uppercase tracking-[0.28em] text-slate-800 dark:text-sky-50 md:text-[0.82rem]"
          >
            {label}
          </Typography>
        </span>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
