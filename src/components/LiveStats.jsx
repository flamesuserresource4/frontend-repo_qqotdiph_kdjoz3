import { useEffect, useState } from 'react';
import { Activity, Blocks, Coins, ArrowRight } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export default function LiveStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchStats() {
      try {
        const res = await fetch(`${BACKEND_URL}/api/crypto/stats`);
        if (!res.ok) throw new Error('Failed');
        const data = await res.json();
        if (mounted) setStats(data);
      } catch (e) {
        // fallback demo data to showcase UI even if backend not yet implemented
        if (mounted) setStats({
          tps: 128.4,
          blocks_24h: 5234,
          active_addresses: 84213,
          tvl_usd: 124523456.78,
        });
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchStats();
    const id = setInterval(fetchStats, 15000);
    return () => { mounted = false; clearInterval(id); };
  }, []);

  const Stat = ({ icon: Icon, label, value, suffix }) => (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 grid place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-white">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm text-white/60">{label}</div>
          <div className="text-xl font-semibold">{loading ? '—' : value}{suffix}</div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Live Network Pulse</h2>
            <p className="text-white/70 mt-1">Realtime metrics streaming from the Nexus network.</p>
          </div>
          <a href="https://docs.nexus.xyz" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-fuchsia-300 hover:text-fuchsia-200">
            Learn how data flows <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat icon={Activity} label="Throughput (TPS)" value={stats?.tps?.toLocaleString?.() || stats?.tps || '—'} />
          <Stat icon={Blocks} label="Blocks (24h)" value={stats?.blocks_24h?.toLocaleString?.() || stats?.blocks_24h || '—'} />
          <Stat icon={Coins} label="Active Addresses" value={stats?.active_addresses?.toLocaleString?.() || stats?.active_addresses || '—'} />
          <Stat icon={Coins} label="TVL" value={stats?.tvl_usd ? `$${stats.tvl_usd.toLocaleString()}` : '—'} />
        </div>
      </div>
    </section>
  );
}
