import * as React from 'react';

import { mergeClasses } from '@/lib/utils';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={mergeClasses(
          'inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-600',
          className
        )}
        {...props}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="uppercase tracking-[0.18em] text-xs font-semibold">
          {label}
        </span>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
