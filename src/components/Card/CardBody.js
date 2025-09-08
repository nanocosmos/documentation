import React from 'react';
import clsx from 'clsx';

export default function CardBody({
  children,
  className,
  ...props
}) {
  const bodyClasses = clsx(
    'text--break',
    'cardDescription_mCBT',
    className
  );

  return (
    <p className={bodyClasses} {...props}> {children} </p>
  );
}
