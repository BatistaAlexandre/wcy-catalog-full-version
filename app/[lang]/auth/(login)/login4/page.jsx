"use client"
import Image from "next/image";
import background from "@/public/images/auth/mountain.png"
import LogInForm from "./login-form";

const LoginPage = () => {

  return (
    <div className="loginwrapper bg-card flex items-center min-h-screen overflow-hidden w-full">
      <div className="lg-inner-column  flex w-full flex-wrap justify-center lg:justify-end overflow-y-auto py-10">
        <Image src={background} alt="image" className="absolute top-0 left-0 w-full h-full" />
        <div className="basis-full lg:basis-1/2 w-full  flex justify-end items-center relative lg:pr-12 xl:pr-20 2xl:pr-[110px] px-5">
          <div className="w-full  py-5 md:w-[440px] xl:w-[570px]  px-5 py-7 md:p-10 lg:p-16  bg-card rounded-xl">
            <LogInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
