import PlusIconSolid from "../../../icons/solid/PlusIconSolid";
import Image from "next/image";
import Link from "next/link";
const SidebarItem = (props) => {
  return (
    <Link href={`/projects/${props.title}`}>
      <div className="mb-3 md:ml-0 ml-5 md:h-10 md:w-10 lg:h-12 lg:w-12 relative has-tooltip ">
        <Image
          src={props.img}
          className="duration-200 cursor-pointer rounded_box"
          alt=""
          width="50em"
          height="50em"
        />
        <span className="tooltip rounded absolute w-auto py-2 p-1 pr-2 truncate text-sm shadow-xl bg-iris-10 dark:bg-dark-bgMuted2 text-black dark:text-white font-montserrat font-semibold ml-2">
          {props.title}
        </span>
      </div>
    </Link>
  );
};
export default function Sidebar() {
  return (
    <div className="h-full w-[5rem] flex flex-col items-center pt-16 select-none font-montserrat">
      <SidebarItem
        title="Hydralite"
        img="https://cdn.discordapp.com/icons/826330402939076648/5dc2015d46a4c84e332c9ea13cd05bad.png?size=128"
      />
      <SidebarItem
        title="Dogehouse"
        img="https://cdn.discordapp.com/icons/810571477316403233/874696134fd345707cc17d29266a1d49.png?size=128"
      />
      <div className="md:w-10 md:h-10 md:ml-0 lg:w-12 lg:h-12 ml-5 my-2 flex items-center justify-center bg-iris-10 dark:bg-dark-bgMuted1 has-tooltip cursor-pointer rounded_box">
        <PlusIconSolid className="w-[60%] fill-current" />
        <span className="tooltip absolute w-auto py-2 p-1 pr-2 truncate shadow-xl bg-iris-10 dark:bg-dark-bgMuted2 text-black dark:text-white font-montserrat ml-44">
          New Project
        </span>
      </div>
    </div>
  );
}
