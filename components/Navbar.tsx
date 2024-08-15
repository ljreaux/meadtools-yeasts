import logo from "@/assets/full-logo.png";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  return (
    <header className="h-20 fixed top-0 z-40 flex items-center justify-between mb-[1rem] bg-background">
      <nav className="relative flex items-center justify-between w-screen h-full text-xl text-center bg-sidebar text-foreground pr-6">
        <div className="bg-secondary w-52 h-full left-0 border-[1px] border-background">
          <Link
            className="flex flex-col items-center justify-center w-full h-full"
            href="https://meadtools.com"
          >
            <Image src={logo} alt="MeadTools logo" className="flex" />
          </Link>
        </div>
        <div className="flex gap-4 z-10">
          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
