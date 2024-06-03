"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
   const [menu, setMenu] = useState(false);

   const openMenu = () => {
      setMenu(!menu);
   };

   const closeMenu = () => {
      setMenu(false);
   };

   return (
      <div className="w-full">
         <header className="flex items-center justify-center p-5">
            <nav className="hidden md:block">
               <ul className="flex items-center justify-center gap-10 md:text-xl">
                  <Link onClick={closeMenu} href={"/"}>
                     <li className="font-semibold hover:text-purple-500">Inicio</li>
                  </Link>
                  <Link onClick={closeMenu} href={" /about"}>
                     <li className="font-semibold hover:text-purple-500">Sobre</li>
                  </Link>
                  <Link onClick={closeMenu} className="" href={"/tech"}>
                     <li className="font-semibold hover:text-purple-500 py-3">Tecnologias</li>
                  </Link>
                  <Link onClick={closeMenu} href={" /projects"}>
                     <li className="font-semibold hover:text-purple-500">Projetos</li>
                  </Link>
               </ul>
            </nav>

            <button className="md:hidden" onClick={openMenu}>
               {menu ? <X /> : <Menu />}
            </button>
         </header>

         {menu && (
            <nav className="text-center fixed w-full bg-white h-screen flex items-center justify-center">
               <ul className="flex flex-col w-full h-screen justify-center">
                  <Link onClick={closeMenu} className="" href={"/"}>
                     <li className="font-semibold hover:bg-purple-500 hover:text-white py-3">Inicio</li>
                  </Link>
                  <Link onClick={closeMenu} href={"/about"}>
                     <li className="font-semibold hover:bg-purple-500 hover:text-white py-3">Sobre</li>
                  </Link>
                  <Link onClick={closeMenu} className="" href={"/tech"}>
                     <li className="font-semibold hover:bg-purple-500 hover:text-white py-3">Tecnologias</li>
                  </Link>
                  <Link onClick={closeMenu} href={"/projects"}>
                     <li className="font-semibold hover:bg-purple-500 hover:text-white py-3">Projetos</li>
                  </Link>
               </ul>
            </nav>
         )}
      </div>
   );
};

export default Header;
