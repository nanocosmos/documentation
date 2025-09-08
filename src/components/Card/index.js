import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

export default function Card({
  href,
  title,
  description,
  className,
  children,
  ...props
}) {
  const isExternal = href && href.startsWith('http');
  
  const cardClasses = clsx(
    'card',
    'padding--lg',
    'cardContainer_Uewx',
    className
  );

  // If no href is provided, render as a div
  if (!href) {
    return (
      <div className={cardClasses} {...props}>
        {children || (
          <>
            <CardHeader title={title} />
            <CardBody>{description}</CardBody>
          </>
        )}
      </div>
    );
  }

  // If children are provided, render them directly (compositional approach)
  if (children) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={cardClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        to={href}
        className={cardClasses}
        {...props}
      >
        {children}
      </Link>
    );
  }

  // Legacy approach for backward compatibility
  const content = (
    <>
      <CardHeader title={title} />
      <CardBody>{description}</CardBody>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={cardClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      to={href}
      className={cardClasses}
      {...props}
    >
      {content}
    </Link>
  );
}

// Export sub-components for compositional usage
Card.Header = CardHeader;
Card.Body = CardBody;