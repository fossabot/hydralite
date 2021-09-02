export default function Navbar() {
  return (
    <div className="w-[98%] h-16 font-nunito flex items-center justify-between gap-2 mx-5 select-none">
      <div className="text-2xl font-montserrat font-extrabold">HYDRALITE</div>
      <div className="flex gap-3 font-normal text-xl">
        <div>Discover</div>
        <div className="text-dark-color-accent">Projects</div>
        <div>Profile</div>
        <div>Blog</div>
        <div>Project Ideas</div>
      </div>
      <div>PROFILE </div>
    </div>
  );
}
