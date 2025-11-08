import { Rocket, Shield, Search, Github } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch?.(query.trim());
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_40px_-10px_rgba(168,85,247,0.7)]">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm text-white/60">Nexus</div>
              <div className="text-lg font-semibold tracking-wide">Explorer</div>
            </div>
          </a>

          <form onSubmit={handleSubmit} className="ml-auto hidden md:flex items-center gap-2 flex-1 max-w-xl">
            <div className="flex items-center gap-2 w-full rounded-xl border border-white/10 bg-white/5 focus-within:border-fuchsia-400/50 transition-colors">
              <Search className="w-4 h-4 ml-3 text-white/50" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search addresses, tx hashes, tokens, ENS..."
                className="w-full bg-transparent py-2.5 pr-3 text-sm outline-none placeholder:text-white/40"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-medium hover:shadow-[0_8px_30px_rgb(168,85,247,0.4)] transition-shadow"
            >
              Search
            </button>
          </form>

          <div className="ml-auto md:ml-4 flex items-center gap-2">
            <a
              href="https://docs.nexus.xyz"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white border border-white/10 hover:border-white/20 transition"
            >
              <Shield className="w-4 h-4" /> Docs
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-white/80 hover:text-white border border-white/10 hover:border-white/20 transition"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-3 md:hidden">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 w-full rounded-xl border border-white/10 bg-white/5">
              <Search className="w-4 h-4 ml-3 text-white/50" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search addresses, tx hashes, tokens..."
                className="w-full bg-transparent py-2.5 pr-3 text-sm outline-none placeholder:text-white/40"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm font-medium"
            >
              Go
            </button>
          </div>
        </form>
      </div>
    </header>
  );
}
