const Navbar = () => {
  return (
    <div
      className="w-full h-9vh flex justify-between items-center"
      style={{
        boxShadow: '0px 4px 10px rgba(217, 217, 217, 0.25)',
      }}
    >
      <div className="flex justify-center items-center">
        <img src="/logo.png" alt="Logo" className="w-16 h-16 ml-3" />
        <div className="flex justify-center items-center m-5 gap-1">
          <h3>Dashboard</h3>
        </div>
        <div className="flex justify-center items-center m-5 gap-1">
          <h3>Projects</h3>
          <img src="/icons/down_arrow.svg" alt="down" />
        </div>
        <div className="flex justify-center items-center m-5 gap-1">
          <h3>Discover</h3>
          <img src="/icons/down_arrow.svg" alt="down" />
        </div>
        <div className="flex justify-center items-center m-5 gap-1">
          <h3>Communicate</h3>
          <img src="/icons/down_arrow.svg" alt="down" />
        </div>
        <div className="flex justify-center items-center m-5 gap-1">
          <h3>More</h3>
          <img src="/icons/down_arrow.svg" alt="down" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src="icons/search.svg" alt="search" className="m-2" />
        <img
          src="icons/notifications.svg"
          alt="notifications"
          className="m-2"
        />
        <img src="/avatar.svg" alt="avatar" className="ml-2 mr-1" />
        <img src="/icons/down_arrow.svg" alt="down" className="mr-8 w-4" />
      </div>
    </div>
  );
};

export default Navbar;
