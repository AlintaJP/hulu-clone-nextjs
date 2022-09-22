import Image from "next/image";
import React from "react";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  CheckBadgeIcon,
  RectangleStackIcon,
  BoltIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const headerItems = [
  {
    title: "HOME",
    Icon: HomeIcon,
  },
  {
    title: "TRENDING",
    Icon: BoltIcon,
  },
  {
    title: "VERIFIED",
    Icon: CheckBadgeIcon,
  },
  {
    title: "COLLECTIONS",
    Icon: RectangleStackIcon,
  },
  {
    title: "SEARCH",
    Icon: MagnifyingGlassIcon,
  },
  {
    title: "ACCOUNT",
    Icon: UserIcon,
  },
];

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <ul className="flex flex-grow justify-evenly max-w-2xl">
        {headerItems.map((item) => (
          <HeaderItem key={item.title} title={item.title} Icon={item.Icon} />
        ))}
      </ul>
      <Image
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        layout="fixed"
        alt="Hulu Logo"
      />
    </header>
  );
};

export default Header;
