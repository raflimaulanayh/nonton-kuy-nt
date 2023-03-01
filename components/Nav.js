import NavItem from "./NavItem";

export default function Nav() {
  return (
    <ul className={`flex space-x-16`}>
      <NavItem href="#home" className="text-red-700 hover:opacity-50">
        Home
      </NavItem>
      <NavItem href="#trending" className="text-white hover:text-white/50">
        Trending
      </NavItem>
      <NavItem href="#premiere" className="text-white hover:text-white/50">
        Premiere
      </NavItem>
    </ul>
  );
}
