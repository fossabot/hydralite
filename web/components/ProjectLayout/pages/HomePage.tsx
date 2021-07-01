import {
    FlagIcon,
    GotoIcon,
    HornIcon,
    PersonIcon,
    UseableIcon,
  } from "~/components/Icons";

const WelcomeWidget: React.FC<{
    color: string;
    icon: typeof UseableIcon;
    title: string;
    description: string;
    contentClassName?: string;
  }> = ({ color, icon, title, description, contentClassName }) => {
    const iconHolder = { icon };
  
    return (
      <div className="flex items-center justify-between h-28 w-120 bg-white-selected rounded-20 m-2 cursor-pointer select-none">
        <div className="flex items-center">
          <div
            className="grid place-items-center rounded-full h-16 w-16 mx-5"
            style={{ backgroundColor: color }}
          >
            {<iconHolder.icon />}
          </div>
          <div className={`flex flex-col justify-between items-start box-border h-20 py-1 ${contentClassName}`}>
            <div className="font-bold text-2xl">{title}</div>
            <div className="font-semibold text-base leading-5">{description}</div>
          </div>
        </div>
        <div className="flex justify-center items-center w-12 h-12 mr-10 rounded-10 hover:bg-white-hover-select">
          <div className="w-10 h-10">
            <GotoIcon />
          </div>
        </div>
      </div>
    );
  };
  
export const HomePage: React.FC<{ name: string }> = ({ name }) => {
    return (
      <div className="w-full h-full grid place-items-center">
        <div className="">
          <h2 className="text-4xl font-black mb-3 text-center">
            Welcome to <span className="text-green-700">Volt</span>
          </h2>
          <h3 className="text-xl font-semibold text mb-7 text-center">
            Welcome to your shiny new project. Here’s some tips to get you setup.
          </h3>
  
          <WelcomeWidget
            color="#FFA2D4"
            icon={PersonIcon}
            title="Invite your team"
            description="Get your teammates on board, and let the collaboration begin."
            contentClassName="w-96"
          />
          <WelcomeWidget
            color="#A2B1FF"
            icon={HornIcon}
            title="Publicize your project"
            description="Let others discover your project through hydra. Onboard potential contributors, all through one seamless platform."
            contentClassName="w-112"
          />
          <WelcomeWidget
            color="#FFA1A1"
            icon={FlagIcon}
            title="Start developing"
            description="Go ahead and start building your project roadmap, View project traffic, and more"
            contentClassName="w-96"
          />
        </div>
      </div>
    );
  };