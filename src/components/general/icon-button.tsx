import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const iconButtonVariants = cva(
  'inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg p-2.5 transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-900',
  {
    variants: {
      size: {
        md: '[&_svg]:h-5 [&_svg]:w-5',
        lg: '[&_svg]:h-6 [&_svg]:w-6',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  showTooltip?: boolean;
  tooltipText?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      size,
      showTooltip = false,
      tooltipText = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={mergeClasses('relative', iconButtonVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        {children}
        {showTooltip && tooltipText.length > 0 ? (
          <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 rounded-lg bg-gray-900 px-2 py-1 text-xs text-gray-50 opacity-100 transition-opacity">
            {tooltipText}
          </span>
        ) : null}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
