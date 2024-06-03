"use client";
import React from "react";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
const ArrowTooltip = () => {
  return (
    <div className="flex  justify-center">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button color="primary">Hover Me</Button>
          </TooltipTrigger>
          <TooltipContent color="primary" arrowPadding="0">
            <p>I am tooltip</p>
            <TooltipArrow className=" fill-primary " />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ArrowTooltip;
