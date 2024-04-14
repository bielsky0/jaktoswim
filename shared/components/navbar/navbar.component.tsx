import { Button, Hamburger, Logo, Navigation } from "@/shared/components";

export const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-between">
      <Logo />

      <div className="hidden lg:flex">
        <Navigation />
      </div>

      <div className="hidden lg:flex">
        <Button>Zacznij Projekt</Button>
      </div>

      <div className="flex lg:hidden">
        <Hamburger />
      </div>
    </div>
  );
};
