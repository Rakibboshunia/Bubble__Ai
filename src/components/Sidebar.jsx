import { NavLink } from "react-router-dom";
import Logo from "../assets/images/S Logo.png"
import LogoText from "../assets/images/logoText.png"
import {
  Home,
  List,
  BarChart2,
  Settings,
  HelpCircle,
  Users,
  LogOut,
} from "lucide-react";

const menu = [
  { name: "Home", path: "/dashboard", icon: Home },
  { name: "Interaction List", path: "/interactions", icon: List },
  { name: "Dashboards", path: "/analytics", icon: BarChart2 },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "FAQ", path: "/faq", icon: HelpCircle },
  { name: "Employee Info", path: "/employees", icon: Users },
];

export default function Sidebar() {
  return (
    <aside className="w-68 bg-[#8BC43D] text-white flex flex-col">
      {/* Logo */}
      <div className="flex flex-col items-center justify-center py-6 gap-2">
        {/* Logo Icon */}
        <img src={Logo} alt="Logo" className="w-26 h-26 object-contain" />

        {/* Logo Text */}
        <img
          src={LogoText}
          alt="Spartacus Bubble"
          className="w-50 object-contain"
        />
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 text- space-y-2">
        {menu.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition
               ${isActive ? "bg-white text-[#8BC53F]" : "hover:bg-white/20"}`
            }
          >
            <Icon size={18} />
            {name}
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button className="flex items-center gap-3 px-6 py-4 hover:bg-white/20 cursor-pointer">
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}
