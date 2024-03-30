import { Sun, Moon } from "lucide-react";
const Navbar = () => {
  const darkTheme = false;
  return (
    <div className="flex justify-between p-4 shadow-sm">
      <div className="logo">
        <h2 className="text-slate-900 font-lg font-semibold">TrueResume.</h2>
      </div>
      <div className="darkmode-toggler text-slate-900">
        {darkTheme ? <Moon /> : <Sun />}
      </div>
    </div>
  );
};

export default Navbar;
