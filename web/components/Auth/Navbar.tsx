import Image from "next/image"
import ArrowIconDown from "../../icons/solid/ArrowIconDown"
export default function Navbar() {
  return (
    <div className="w-[98%] h-16 font-montserrat flex ml-4 items-center justify-between gap-2 mx-2 select-none">
      <h1 className="text-2xl tracking-wide font-extrabold md:text-lg">HYDRALITE</h1>
      <div className="flex gap-3 font-semibold text-xl md:text-base ">
        <div>Discover</div>
        <div className="text-dark-color-accent">Projects</div>
        <div>Profile</div>
        <div>Blog</div>
        <div>Project Ideas</div>
      </div>
      <div className="flex bg-iris-10 dark:bg-dark-bgMuted1 w-44 h-11 rounded items-center justify-center gap-3 px-2">
        <Image src="https://avatars.githubusercontent.com/u/77481923?v=4" height="35%" width="35%" className="rounded-xl" ></Image>
        <span className="text-lg">VarunPotti</span>
        <div className=" dark:text-white text-gray-900">
          <ArrowIconDown className="fill-current" />
        </div>
      </div>
    </div>
  );
}
