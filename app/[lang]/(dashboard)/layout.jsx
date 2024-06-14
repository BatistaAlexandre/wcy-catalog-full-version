import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getDictionary } from "@/app/dictionaries";
import { auth } from "../../../lib/auth";
const layout = async ({ children, params: { lang } }) => {
  const session = await auth;

  // if (!session?.user?.email) {
  //   redirect("/auth/login");
  // }

  const trans = await getDictionary(lang);

  return (
    <DashBoardLayoutProvider trans={trans}>{children}</DashBoardLayoutProvider>
  );
};

export default layout;
