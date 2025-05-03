import React from 'react';
import {AppSkeletonWrapperProps} from "./interfaces/AppSkeletonWrapperProps";

const SkeletonWrapper: React.FC<AppSkeletonWrapperProps> = ({ loading, skeleton, children }) => {
  return <>{loading ? skeleton : children}</>;
};

export default SkeletonWrapper;
