import PlusIconSolid from "../../../icons/solid/PlusIconSolid";
import Image from "next/image";
import Link from "next/link";
const SidebarItem = (props) => {
  return (
    <Link href={`/projects/${props.title}`}>
      <div className="mb-2 ml-5 h-12 w-12 relative has-tooltip">
        <Image
          src={props.img}
          className="rounded-full hover:rounded-xl cursor-pointer duration-75"
          alt=""
          width="50em"
          height="50em"
        />
        <span className="tooltip rounded absolute w-auto py-2 p-1 pr-2 truncate shadow-xl bg-dark-border1 text-white font-montserrat font-extrabold ml-4">
          {props.title}
        </span>
      </div>
    </Link>
  );
};
export default function Sidebar() {
  return (
    <div className="  h-full w-[5rem] flex flex-col items-center pt-16">
      <SidebarItem
        title="Hydralite"
        img="https://github.com/hydralite/hydralite/blob/dev/assets/logos/Hydralite%20Logo(WhiteBG).png?raw=true"
      />
      <SidebarItem
        title="Dogehouse"
        img="https://cdn.discordapp.com/icons/810571477316403233/874696134fd345707cc17d29266a1d49.png?size=128"
      />
      <div className="w-12 h-12 ml-5 my-2 rounded-full flex items-center justify-center bg-dark-bgMuted2 has-tooltip cursor-pointer  hover:rounded-xl">
        <PlusIconSolid className="w-[60%] fill-current text-" />
        <span className="tooltip rounded absolute w-auto py-2 p-1 pr-2 truncate shadow-xl bg-dark-border1 text-white font-montserrat font-extrabold ml-44">
          New Project
        </span>
      </div>
    </div>
  );
}
