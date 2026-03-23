import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-line/80 bg-rose-paper/92 backdrop-blur-xl">
      <div className="site-shell flex flex-wrap items-center gap-x-6 gap-y-2 py-2">
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-full border border-rose-line/80 bg-white/70 px-2 py-1"
          aria-label="The Boxed Bliss home"
        >
          <Image
            src="/brand/logo-bg.png"
            alt="The Boxed Bliss logo"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full border-2 border-rose-line object-cover shadow-sm"
            priority
          />
        </Link>

        <nav className="order-3 flex w-full items-center gap-5 text-[0.69rem] uppercase tracking-[0.2em] text-rose-muted sm:order-2 sm:w-auto sm:flex-1 sm:justify-center">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-rose-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="order-2 ml-auto flex items-center gap-2.5 sm:order-3">
          {["Search", "Wishlist", "Cart"].map((item) => (
            <button
              key={item}
              type="button"
              aria-label={item}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-rose-line/85 bg-white/75 text-rose-muted transition hover:border-rose-accent/50 hover:text-rose-ink"
            >
              <span className="text-[0.58rem] uppercase tracking-[0.13em]">{item[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
