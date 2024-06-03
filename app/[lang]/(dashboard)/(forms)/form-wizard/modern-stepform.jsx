"use client";
import React from "react";
import { Stepper, Step, StepLabel } from "@/components/ui/steps";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
const ModernStepForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "Account Details",
      content: "Set up your account details",
    },
    {
      label: "Personal Info",
      content: "Add your personal info",
    },
    {
      label: "Social Links",
      content: "Add your social links",
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const onSubmit = () => {
    toast({
      title: "You submitted the following values:",
      description: (
        <div className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 top-0 right-0">
          <p className="text-primary-foreground">Done</p>
        </div>
      ),
    });
  };

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 xl:col-span-3 xl:border-r xl:border-default-200 ">
        <Stepper current={activeStep} direction="vertical">
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>
                  <div className="flex flex-col">
                    <span> {label.label}</span>
                    <span> {label.content}</span>
                  </div>
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <div className="col-span-12 xl:col-span-9">
        {activeStep === steps.length ? (
          <React.Fragment>
            <div className="mt-2 mb-2 font-semibold text-center">
              All steps completed - you&apos;re finished
            </div>
            <div className="flex pt-2">
              <div className=" flex-1" />
              <Button
                size="xs"
                variant="outline"
                color="destructive"
                className="cursor-pointer"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <form>
              <div className="grid grid-cols-12 gap-4">
                {activeStep === 0 && (
                  <>
                    <div className="col-span-12 ">
                      <h4 className="text-sm font-medium text-default-600">
                        Enter Your Account Details
                      </h4>
                      <p className="text-xs text-default-600 mt-1">
                        Fill in the box with correct data
                      </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input type="text" placeholder="Username" />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input type="password" placeholder="Password" />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input type="password" placeholder="Confirm Password" />
                    </div>
                  </>
                )}
                {activeStep === 1 && (
                  <>
                    <div className="col-span-12 ">
                      <h4 className="text-sm font-medium text-default-600">
                        Enter Your Personal Info
                      </h4>
                      <p className="text-xs text-default-600 mt-1">
                        Fill in the box with correct data
                      </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                      <Input type="number" placeholder="Phone number" />
                    </div>
                    <div className="col-span-12 lg:col-span-4">
                      <Input type="number" placeholder="Your age" />
                    </div>

                    <div className="col-span-12 lg:col-span-4">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                          <SelectItem value="spanish">Spanish</SelectItem>
                          <SelectItem value="arabic">Arabic</SelectItem>
                          <SelectItem value="bangla">Bangla</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {activeStep === 2 && (
                  <>
                    <div className="col-span-12 ">
                      <h4 className="text-sm font-medium text-default-600">
                        Enter Your Social Links
                      </h4>
                      <p className="text-xs text-default-600 mt-1">
                        Fill in the box with correct data
                      </p>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input
                        type="text"
                        placeholder="http://facebook.com/abc"
                      />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input type="text" placeholder="http://twitter.com/abc" />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input
                        type="text"
                        placeholder="http://linkedin.com/abc"
                      />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input type="text" placeholder="http://youtube.com/abc" />
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                      <Input
                        type="text"
                        placeholder="http://instagram.com/abc"
                      />
                    </div>
                  </>
                )}
              </div>
            </form>

            <div className="flex pt-2 ">
              <Button
                size="xs"
                variant="outline"
                color="secondary"
                className={cn("cursor-pointer", {
                  hidden: activeStep === 0,
                })}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <div className="flex-1	gap-4 " />
              <div className="flex	gap-2 ">
                {activeStep === steps.length - 1 ? (
                  <Button
                    size="xs"
                    variant="outline"
                    color="success"
                    className="cursor-pointer"
                    onClick={() => {
                      if (onSubmit) onSubmit();
                      handleNext();
                    }}
                  >
                    Submit
                  </Button>
                ) : (
                  <Button
                    size="xs"
                    variant="outline"
                    color="secondary"
                    className="cursor-pointer"
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ModernStepForm;
