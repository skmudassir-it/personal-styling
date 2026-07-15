import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faPinterest,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  Services: [
    { href: "/services/wardrobe-consultation", label: "Wardrobe Consultation" },
    { href: "/services/personal-shopping", label: "Personal Shopping" },
    { href: "/services/color-analysis", label: "Color Analysis" },
    { href: "/services/style-makeover", label: "Style Makeover" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
  Support: [
    { href: "/contact", label: "Book a Session" },
    { href: "/pricing", label: "Gift Cards" },
    { href: "/about", label: "Our Story" },
    { href: "/services", label: "All Services" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.svg" alt="StyleCraft" width={32} height={32} />
              <span className="text-xl font-bold tracking-tight text-primary">
                Style<span className="text-secondary">Craft</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Transform your personal style with expert styling, wardrobe curation,
              and image consulting. We help you look and feel your absolute best.
            </p>
            <div className="flex gap-3 mt-5">
              {[faInstagram, faPinterest, faTiktok].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <FontAwesomeIcon icon={icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-10" />
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} StyleCraft Personal Styling. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
