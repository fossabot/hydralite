export const Tabs = ({ tab, setTab }) => {
  return (
    <ul className="cursor-pointer grid grid-cols-3 gap-4 mt-8 select-none h-2">
      <div
        className={`w-full transition-colors duration-300 ${
          tab === "provider" ? "bg-dark-color-accent" : "bg-gray-700"
        } rounded-xl h-2 relative`}
        onClick={() => setTab("provider")}
      >
        <span className="absolute mt-4 font-semibold font-montserrat">
          1. Choose a provider
        </span>
      </div>
      <div
        className={`w-full transition-colors duration-300 ${
          tab === "repo" ? "bg-dark-color-accent" : "bg-gray-700"
        } rounded-xl h-2 relative`}
        onClick={() => setTab("repo")}
      >
        <span className="absolute mt-4 font-semibold font-montserrat">
          2. Pick a repository
        </span>
      </div>
      <div
        className={`w-full transition-colors duration-300 ${
          tab === "details" ? "bg-dark-color-accent" : "bg-gray-700"
        } rounded-xl h-2 relative`}
        onClick={() => setTab("details")}
      >
        <span className="absolute mt-4 font-semibold font-montserrat">
          3. Project details
        </span>
      </div>
    </ul>
  );
};
