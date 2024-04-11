import { FC } from "react";
import Container from "@/components/shared/container-component";
import { ToogleTheme } from "@/components/shared/toogle-theme";
import Link from "next/link";
import { Cloud } from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <header className="w-full  h-[74px] border-b sticky top-0 z-40 bg-background">
      <Container className="flex items-center justify-between size-full ">
        <Link className="text-2xl font-semibold" href="/">
          <Cloud className="size-7" />
        </Link>
        <ToogleTheme />
      </Container>
    </header>
  );
};

export default Navbar;
