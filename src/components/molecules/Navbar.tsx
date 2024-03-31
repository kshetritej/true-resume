import { ModeToggle } from "../mode-toggle";
const Navbar = () => {
  return (
    <div className="flex justify-between p-4 shadow-sm">
      <div className="logo">
        <h2 className="font-lg font-semibold">TrueResume.</h2>
      </div>
      <div className="darkmode-toggler text-slate-900">
      <ModeToggle/>
      </div>
    </div>
  );
};

export default Navbar;
