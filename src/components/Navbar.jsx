import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b border-white/10 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 shadow-lg shadow-blue-500/30" />
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight group-hover:text-blue-100 transition-colors">Your Name</p>
            <p className="text-xs text-blue-200/70">Software Engineer</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors text-sm">
              {item.label}
            </a>
          ))}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-200/80 hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-200/80 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="text-blue-200/80 hover:text-white">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-blue-100">
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-blue-100/90 py-2">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-200/80 hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-200/80 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#contact" className="text-blue-200/80 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
