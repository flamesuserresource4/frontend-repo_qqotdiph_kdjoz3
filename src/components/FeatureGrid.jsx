import { Shield, Zap, Globe, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Ultra-fast indexing',
    desc: 'Optimized for low latency reads so you get results instantly across Nexus rollups.'
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Secure by design',
    desc: 'Built with best practices and isolation layers inspired by Nexus security architecture.'
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Cross-domain aware',
    desc: 'Seamlessly traverse L1↔L2 bridges, message passing, and multi-chain assets.'
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: 'Rich onchain data',
    desc: 'Deep insights into accounts, contracts, gas, and token transfers with clean visuals.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-black to-[#0A0614]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold">Why Nexus-Explorer</h2>
          <p className="mt-2 text-white/70">A future-facing interface to understand the present state of crypto networks.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:border-fuchsia-400/40 transition"
            >
              <div className="w-10 h-10 rounded-xl grid place-items-center bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 text-white mb-3">
                {f.icon}
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-1 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
