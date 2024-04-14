import { Button, Hamburger, Logo } from "@/shared/components";

export const Navbar = () => {
  return (
    <div className="w-full h-[100px] flex items-center justify-between">
      <div>
        <ul className="flex justify-center items-center gap-16">
          <li className="font-bold cursor-pointer">Aktualności</li>
          <li className="font-bold cursor-pointer">O Nas</li>
          <li className="font-bold cursor-pointer">Galeria</li>
        </ul>
      </div>

      <Logo className="w-24" />

      <div>
        <ul className="flex justify-center items-center gap-16">
          <li className="font-bold cursor-pointer">Zajęcia</li>
          <li className="font-bold cursor-pointer">Kontakt</li>
          <li className="font-bold cursor-pointer">Social</li>
        </ul>
      </div>
      {/*
      <div className="flex lg:hidden">
        <Hamburger />
      </div> */}
    </div>
  );
};
