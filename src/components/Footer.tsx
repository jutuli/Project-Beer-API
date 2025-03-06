import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex h-20 w-full items-center justify-center bg-amber-400">
      <Link to="/">
        <p className="size-15 rounded-full bg-slate-100 p-3 text-4xl">🍻</p>
      </Link>
    </footer>
  );
};

export default Footer;
