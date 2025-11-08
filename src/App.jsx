import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import LiveStats from './components/LiveStats';

function App() {
  const [lastQuery, setLastQuery] = useState('');

  const handleSearch = (q) => {
    setLastQuery(q);
    const section = document.getElementById('explorer');
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onSearch={handleSearch} />
      <main>
        <Hero />
        <FeatureGrid />

        <section id="explorer" className="py-16 bg-[#07040F] border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold">Quick Lookup</h2>
                <p className="text-white/70 mt-1">Paste an address, tx hash, or token to preview metadata. (Demo only)</p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-white/60">Last query</div>
                <div className="mt-1 text-xl font-medium break-all">{lastQuery || '—'}</div>
                <div className="mt-4 text-white/70 text-sm">Full explorer features can integrate with the Nexus indexer and RPCs. This template focuses on the futuristic UI and can be wired to live data sources next.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-white/60">Network</div>
                <div className="mt-1 text-lg">Nexus</div>
                <ul className="mt-4 space-y-2 text-sm text-white/70 list-disc list-inside">
                  <li>L2 rollup aware</li>
                  <li>Bridge + cross-domain insights</li>
                  <li>Account abstraction ready</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <LiveStats />
      </main>

      <footer className="py-10 border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} Nexus-Explorer. Built for the Nexus ecosystem.</div>
          <a href="https://docs.nexus.xyz" target="_blank" rel="noreferrer" className="text-sm text-white/70 hover:text-white">docs.nexus.xyz</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
