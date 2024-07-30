import React from 'react';

interface ShimmerButtonProps {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
  otherClasses?: string;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  title,
  icon,
  position = 'right',
  handleClick,
  otherClasses = '',
}) => {
  return (
    <button
      onClick={handleClick}
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#6a0d29,45%,#b03060,55%,#6a0d29)] bg-[length:200%_100%] px-6 font-bold text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
    >
      {position === 'left' && icon}
      <span className="mx-2">{title}</span>
      {position === 'right' && icon}
    </button>
  );
};
