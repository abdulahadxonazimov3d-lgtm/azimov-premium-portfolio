'use client';
import { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const GitHubMark = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.19 7.69 10.68.56.1.77-.24.77-.54v-2.08c-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 .1.31 2.62 2.63 1.86.1-.72.39-1.21.71-1.49-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.15-1.45 3.09-1.15 3.09-1.15.62 1.55.24 2.7.12 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.04.76 2.1v3.12c0 .3.2.65.78.54 4.46-1.49 7.68-5.71 7.68-10.68C23.25 5.48 18.27.5 12 .5Z"/>
  </svg>
);

const links = [
  ['Bosh sahifa', '#home'], ['Men haqimda', '#about'], ['Ko‘nikmalar', '#skills'],
  ['Portfolio', '#portfolio'], ['Sertifikatlar', '#certificates'], ['Galereya', '#gallery'], ['Bog‘lanish', '#contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const githubUrl = 'https://github.com/abdulahadxonazimov295';
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#07111f]/70 backdrop-blur-xl">
      <nav className="containerx flex h-20 items-center justify-between">
        <a href="#home" className="font-black tracking-tight text-xl">Azimov<span className="text-teal-300">.dev</span></a>
        <div className="hidden lg:flex items-center gap-7 text-sm text-slate-300">
          {links.map(([label, href]) => <a key={href} href={href} className="hover:text-teal-300 transition">{label}</a>)}
        </div>
        <div className="hidden lg:flex items-center gap-3">
          <a href={githubUrl} target="_blank" className="btn-secondary py-2"><GitHubMark size={18}/> GitHub</a>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="btn-secondary py-2" aria-label="theme">
            {theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>} Rejim
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="lg:hidden"><Menu /></button>
      </nav>
      {open && <div className="lg:hidden containerx pb-5">
        <div className="glass rounded-3xl p-4 flex flex-col gap-3">
          <button onClick={() => setOpen(false)} className="self-end"><X /></button>
          {links.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href} className="py-2">{label}</a>)}
        </div>
      </div>}
    </header>
  );
}
