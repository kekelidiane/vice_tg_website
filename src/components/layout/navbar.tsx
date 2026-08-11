"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const homeSections = ["home", "about", "donate", "blog", "contact"];

const navLinks = [
  { id: "home", label: "Accueil", href: "/" },
  { id: "about", label: "À propos", href: "/#about" },
  { id: "donate", label: "Nous soutenir", href: "/#donate" },
  { id: "blog", label: "Actualités", href: "/blog" },
  { id: "contact", label: "Nous contacter", href: "/#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Sur l'accueil, la section active suit le scroll (scrollspy). Sur les
  // autres pages (/blog, /donation...), c'est le chemin de l'URL qui
  // détermine le lien actif.
  useEffect(() => {
    if (!isHome) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2 }
    );

    homeSections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const isActive = (id: string) => {
    if (isHome) return activeSection === id;
    if (id === "blog") return pathname.startsWith("/blog");
    if (id === "donate") return pathname.startsWith("/donation");
    return false;
  };

  const linkClass = (id: string) =>
    isActive(id) ? "text-green-600" : "text-gray-800 hover:text-green-600";

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/assets/logos/logo.png"
            alt="Logo VICE TOGO"
            width={56}
            height={56}
            className="h-10 md:h-12 lg:h-14 w-auto"
          />
        </Link>

        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href} className={linkClass(link.id)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
          className="md:hidden text-2xl text-gray-800"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-2 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block ${linkClass(link.id)}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
