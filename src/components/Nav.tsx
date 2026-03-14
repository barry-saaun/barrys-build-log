import { useState } from "react";

interface NavProps {
  variant?: "core" | "cream";
}

const Nav = ({ variant }: NavProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const isLight = variant === "core";
  const textColor = isLight ? "text-cream" : "text-core";
  const borderColor = isLight ? "border-cream/30" : "border-core/30";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b px-8 py-5 ${borderColor}`}
        style={{
          background: variant === "core" ? "var(--core)" : "var(--cream)",
        }}
      >
        <button
          onClick={() => setMenuOpen(true)}
          className={`font-mono text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-70 ${textColor}`}
        >
          MENU
        </button>

        <a
          href="/"
          className={`font-display text-2xl font-light tracking-wide transition-opacity hover:opacity-80 ${textColor}`}
        >
          barry's build log
        </a>

        <a
          href="https://github.com/barry-saaun"
          target="_blank"
          rel="noreferrer"
          className={`font-mono text-xs uppercase tracking-[0.2em] transition-opacity hover:opacity-70 ${textColor}`}
        >
          GITHUB ↗
        </a>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-90 min-h-screen bg-cream px-10 py-8">
            <button onClick={() => setMenuOpen(false)}>CLOSE</button>
          </div>

          <div
            className="flex-1 bg-dark-brown/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Nav;
