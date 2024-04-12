import { FC } from "react";
import { Cloud } from "lucide-react";
import Link from "next/link";

import Container from "@/components/shared/container-component";
import { ToogleTheme } from "@/components/shared/toogle-theme";
import SearchBar from "./search-bar";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="w-full  h-[74px] border-b sticky top-0 z-40 bg-background">
      <Container className="flex items-center justify-between size-full gap-x-6 sm:gap-x-0 ">
        <Link className="text-2xl font-semibold" href="/">
          <Cloud className="size-7" />
        </Link>
        <SearchBar className="max-w-sm" />
        <ToogleTheme />
      </Container>
    </header>
  );
};

export default Navbar;
