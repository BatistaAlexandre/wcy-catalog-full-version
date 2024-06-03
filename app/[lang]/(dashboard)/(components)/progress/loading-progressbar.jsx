"use client"
import React from "react";
import { CircularProgress } from "@/components/ui/progress";

const LoadingProgressbar = () => {
  return (
    <div>
      <CircularProgress value="50" color="primary" loading />
    </div>
  );
};

export default LoadingProgressbar;
