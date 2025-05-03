import React from "react";

export interface AppSkeletonWrapperProps {
  loading: boolean;
  skeleton: React.ReactNode;
  children: React.ReactNode;
}
