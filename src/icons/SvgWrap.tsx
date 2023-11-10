import React from 'react';
import clsx from 'clsx';

export default function SVGWrap({ size = 20, children, className, onClick, ...props }: GPTHub.SVGWrapProps) {
  const handleClick = (e: React.MouseEvent) => {
    onClick && onClick(e);
  };

  return (
    <div
      onClick={handleClick}
      className={clsx('svg-wrap inline-flex items-center justify-center', className)}
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {children}
      </svg>
    </div>
  );
}
