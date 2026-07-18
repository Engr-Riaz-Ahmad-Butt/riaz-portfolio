'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className={mergeClasses('icon', className)}
    aria-hidden
  >
    <path
      fill="currentColor"
      d="M4 15a1 1 0 0 0 1 1h19.586l-4.292 4.292a1 1 0 0 0 1.414 1.414l6-6a.99.99 0 0 0 .292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 0 0-.216-.324l-6-6a1 1 0 0 0-1.414 1.414L24.586 14H5a1 1 0 0 0-1 1z"
    />
  </svg>
);

const InnerArrow = () => (
  <span className="inner-button" aria-hidden>
    <ArrowIcon />
  </span>
);

const secondaryVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-gray disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        outline:
          'border border-gray-300 bg-transparent text-gray-900 hover:border-primary hover:text-primary dark:border-white/15 dark:text-gray-700 dark:hover:border-primary dark:hover:text-primary',
        ghost: 'text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100',
      },
    },
  }
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: 'default' | 'sm';
  variant?: 'primary' | 'outline' | 'ghost';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'default',
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    if (variant === 'primary') {
      const pillClass = mergeClasses(
        'styled-button',
        size === 'sm' && 'styled-button-sm',
        className
      );

      if (asChild && React.isValidElement(children)) {
        const child = children as React.ReactElement<{
          className?: string;
          children?: React.ReactNode;
        }>;

        return React.cloneElement(child, {
          ...props,
          className: mergeClasses(pillClass, child.props.className),
          // @ts-expect-error ref forwarded to anchor/button child
          ref,
          children: (
            <>
              {child.props.children}
              <InnerArrow />
            </>
          ),
        });
      }

      return (
        <button className={pillClass} ref={ref} type="button" {...props}>
          {children}
          <InnerArrow />
        </button>
      );
    }

    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={mergeClasses(
          secondaryVariants({ variant: variant as 'outline' | 'ghost' }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
