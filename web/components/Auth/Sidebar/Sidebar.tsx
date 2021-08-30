import PlusIconSolid from "../../../icons/solid/PlusIconSolid";
const SidebarItem = (props) => {
  return (
    <div className="mb-2 ml-5 h-12 w-12 relative has-tooltip">
      <img
        src={props.img}
        className="rounded-full hover:rotate-12 cursor-pointer duration-150 "
        alt=""
      />
      <span className='tooltip rounded-md absolute w-auto py-2 p-1 pr-2 truncate shadow-xl bg-dark-border1 text-white font-montserrat font-extrabold -mt-12 ml-14'>{props.title}</span>
    </div>
  );
};
export default function Sidebar() {
  return (
    <div className="w-[5vh] font-montserrat">
      <SidebarItem title="Hydralite" img="https://github.com/hydralite/hydralite/blob/dev/assets/logos/Hydralite%20Logo(WhiteBG).png?raw=true"/>
      <SidebarItem title="Dogehouse" img="https://cdn.discordapp.com/icons/810571477316403233/874696134fd345707cc17d29266a1d49.png?size=128"/>
      <div className="w-12 h-12 ml-5 my-2 rounded-full flex items-center justify-center bg-dark-bgMuted2 has-tooltip cursor-pointer  hover:rounded-xl">
        <PlusIconSolid className="w-[60%] fill-current text-" />
        <span className='tooltip rounded absolute w-auto py-2 p-1 pr-2 truncate shadow-xl bg-dark-border1 text-white font-montserrat font-extrabold ml-44'>New Project</span>
      </div>
    </div>
  );
}
