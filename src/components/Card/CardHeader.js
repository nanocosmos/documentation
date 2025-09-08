import React from 'react';
import clsx from 'clsx';

export default function CardHeader({
  children,
  className,
  title,
  ...props
}) {
  const headerClasses = clsx(
    'text--break',
    'cardTitle_dwRT',
    className
  );

  return (
    <h2 className={headerClasses} title={title} {...props}>
      {children || title}
    </h2>
  );
}
