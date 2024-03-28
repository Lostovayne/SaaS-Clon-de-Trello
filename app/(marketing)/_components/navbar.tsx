import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="top-0 fixed flex items-center bg-white shadow-sm px-4 border-b w-full h-14">
      <div className="flex justify-between items-center mx-auto w-full md:max-w-screen-2xl">
        <Logo />
        <div className="md:block flex justify-between items-center space-x-4 w-full md:w-auto">
          <Button size={"sm"} variant={"outline"} asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size={"sm"} asChild>
            <Link href="/sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
