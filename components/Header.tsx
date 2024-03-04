"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();
  const handleLogout = () => {};
  return (
    <div
      className={twMerge(
        `h-fit
        bg-gradient-to-b
        from-emerald-800
        p-10`,
        className
      )}
    >
      <div
        className="
            w-full
            mb-4
            flex
            items-center
            jusitfy-between
        "
      >
        <div
          className="
                hidden
                md:flex
                gap-x-2
                items-center
            "
        >
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex
          items-center justify-center hover:opacity-75 transition
          "
          >
            <RxCaretLeft size={40} className="text-white" />
          </button>
          <button
            className="rounded-full bg-black flex
          items-center justify-center hover:opacity-75 transition
          "
          >
            <RxCaretRight
              onClick={() => router.forward()}
              size={40}
              className="text-white"
            />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button
            className="
          rounded-full
          p-2
          bg-white
          flex
          items-center
            justify-center
            hover:opacity-75
            transition
          "
          >
            <HiHome size={30} className="text-black" />
          </button>
          <button
            className="
          rounded-full
          p-2
          bg-white
          flex
          items-center
            justify-center
            hover:opacity-75
            transition
          "
          >
            <BiSearch size={30} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
