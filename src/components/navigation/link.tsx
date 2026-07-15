import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { mergeClasses } from '@/lib/utils';

interface LinkProps extends NextLinkProps {
  className?: string;
  children?: React.ReactNode;
  noCustomization?: boolean;
  externalLink?: boolean;
  withUnderline?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      noCustomization,
      children = null,
      className = '',
      externalLink = false,
      withUnderline = false,
      ...props
    },
    ref
  ) => {
    return (
      <NextLink
        {...props}
        target={externalLink ? '_blank' : '_self'}
        rel={externalLink ? 'noopener noreferrer' : undefined}
        ref={ref}
        className={mergeClasses(
          noCustomization
            ? ''
            : 'text-base font-medium text-gray-600 transition-colors hover:text-primary active:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
          withUnderline
            ? 'underline underline-offset-4 transition-colors hover:text-primary'
            : '',
          className
        )}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
