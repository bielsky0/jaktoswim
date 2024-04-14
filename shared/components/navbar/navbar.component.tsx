import { Button, Hamburger, Logo } from "@/shared/components";

export const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-between">
      <div className="hidden lg:flex">
        <ul className="flex justify-center items-center gap-16">
          <li className="cursor-pointer">Aktualności</li>
          <li className="cursor-pointer">O Nas</li>
          <li className="cursor-pointer">Galeria</li>
        </ul>
      </div>

      <Logo className="w-20 lg:w-24" />

      <div className="hidden lg:flex">
        <ul className="flex justify-center items-center gap-16">
          <li className="cursor-pointer">Zajęcia</li>
          <li className="cursor-pointer">Kontakt</li>
          <li className="cursor-pointer">Social</li>
        </ul>
      </div>

      <div className="flex lg:hidden">
        <Hamburger />
      </div>
    </div>
  );
};
