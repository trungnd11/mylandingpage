import React from 'react';
import {AppTextSkeletonProps} from "./interfaces/AppTextSkeletonProps";

const TextSkeleton: React.FC<AppTextSkeletonProps> = ({lines = 3, width = '100%', height = '1rem',}) => {
  return (
    <div className="text-skeleton">
      {Array.from({ length: lines }).map((_, index) => (
        <div
          className="skeleton-line"
          key={index}
          style={{
            width: index === lines - 1 ? '60%' : width,
            height,
          }}
        />
      ))}
    </div>
  );
};

export default TextSkeleton;
