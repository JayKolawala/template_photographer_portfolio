import { useEffect } from "react";
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 w-[300px] h-full bg-white z-40 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-4 text-center">
          <h3 className="py-16 text-2xl font-bold">
            <span className="block">YOUR</span>
            <span className="block">NAME</span>
          </h3>

          <button
            className="lg:hidden w-full py-2 px-4 bg-gray-200 hover:bg-gray-300 rounded mb-4 transition-colors"
            onClick={toggleSidebar}
          >
            CLOSE
          </button>

          <nav className="space-y-2">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors cursor-pointer"
              onClick={toggleSidebar}
            >
              PORTFOLIO
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors cursor-pointer"
              onClick={toggleSidebar}
            >
              ABOUT ME
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block py-2 px-4 hover:bg-gray-100 rounded transition-colors cursor-pointer"
              onClick={toggleSidebar}
            >
              CONTACT
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
