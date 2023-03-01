export default function NavItem({ children, href, className }) {
  const addClassName = className ? `${className}` : "";

  return (
    <li className="">
      <a
        href={href}
        className={`sm:flex md:text-lg text-sm font-semibold transition duration-300 ${className}`}
      >
        {children}
      </a>
    </li>
  );
}
