import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

// ✅ react-icons
import { FiMenu, FiX } from "react-icons/fi";

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* ===== DESKTOP SIDEBAR (UNCHANGED) ===== */}
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      {/* ===== MOBILE SIDEBAR DRAWER ===== */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <aside className="absolute left-0 top-0 h-full w-72 bg-[#8BC43D]">
            
            {/* ❌ CLOSE ICON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 cursor-pointer"
              aria-label="Close sidebar"
            >
              <FiX size={26} className="text-white" />
            </button>

            <Sidebar />
          </aside>
        </div>
      )}

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex flex-col flex-1">

        {/* Topbar (Desktop only) */}
        <div className="hidden lg:block">
          <Topbar />
        </div>

        {/* Mobile Header with Hamburger ICON */}
        <div className="flex items-center p-6 bg-[#8BC43D] shadow lg:hidden">
          <button
            onClick={() => setOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
            aria-label="Open sidebar"
          >
            <FiMenu size={26} />
          </button>
        </div>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
