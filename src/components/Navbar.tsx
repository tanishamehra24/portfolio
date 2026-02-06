import {Menu, X} from "lucide-react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {type ReactNode} from "react";

type NavLinkProps = {
  to: string;
  children: ReactNode;
};

type MobileLinkProps = {
  to: string;
  children: ReactNode;
  onClick: () => void;
};

const NavLink = ({to, children}: NavLinkProps) => (
  <Link
    to={to}
    className="relative text-lg font-medium hover:text-white transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#38bdf8] hover:after:w-full"
  >
    {children}
  </Link>
);

const MobileLink = ({to, children, onClick}: MobileLinkProps) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-lg font-medium hover:text-white transition"
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className=" fixed top-5 z-50 py-4 w-full border-y border-gray-700  backdrop-blur-md bg-[#0f172a]/70  ">
      <div className="mx-auto max-w-7xl flex px-4 sm:px-6 lg:px-8 justify-between items-center">
        <h1 className="text-xl text-white font-semibold tracking-wide">
          Tanisha.codes
        </h1>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 rounded-xl border border-gray-700 bg-[#020617] p-4 space-y-4 text-gray-300">
            <MobileLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </MobileLink>
            <MobileLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </MobileLink>
            <MobileLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </MobileLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
