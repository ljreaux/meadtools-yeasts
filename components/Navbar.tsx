import logo from "@/assets/full-logo.png";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-20 fixed top-0 z-[51] flex items-center justify-between mb-[1rem] bg-background">
      <nav className="relative flex items-center justify-between w-screen h-full text-xl text-center bg-sidebar text-foreground pr-6">
        <div className="bg-secondary w-52 h-full left-0 border-[1px] border-background">
          <span className="flex flex-col items-center justify-center w-full h-full">
            <Image src={logo} alt="MeadTools logo" className="flex" />
          </span>
        </div>{" "}
        <ModeToggle />
      </nav>
    </header>
  );
}
