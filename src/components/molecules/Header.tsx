import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex flex-col align-middle text-center gap-3 " >
        <h1 className="text-6xl font-semibold">Welcome to True Resume</h1>
        <h3 className="text-2xl font-regular">
          Craft your perfect resume effortlessly.
        </h3>
        <div>
          <Button>Create my Resume</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
