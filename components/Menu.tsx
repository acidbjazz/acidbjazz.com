import Link from "next/link";

const Menu = () => {
  return (
    <nav>
      <Link href="/">
        <a>portfolio</a>
      </Link>
      <Link href="/cv">
        <a>cv</a>
      </Link>
    </nav>
  );
};

export default Menu;
