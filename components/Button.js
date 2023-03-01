export default function Button({ className, variant, children, href }) {
  const addClassName = className ? `${className}` : "";

  let variants = {
    "outline-white": `text-white border border-white`,
    "red-only": "bg-[#EE3137] text-white hover:bg-opacity-80",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={`rounded 2xl:text-xl lg:text-lg text-sm font-semibold py-2 px-6 inline-block cursor-pointer transition-all duration-200 ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
}
