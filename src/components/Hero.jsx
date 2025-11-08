import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 mb-4">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              Nexus-Explorer • Real-time L2 insights
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
              Explore the Nexus of Crypto
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300"> with Futuristic Clarity</span>
            </h1>
            
            <p className="mt-4 text-white/70 max-w-xl">
              A sleek, cyberpunk explorer for modern onchain activity. Search addresses, transactions, and tokens across Nexus with blazing-fast performance.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#features" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-medium hover:shadow-[0_8px_30px_rgb(168,85,247,0.4)] transition">
                Start Exploring
              </a>
              <a href="https://docs.nexus.xyz" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl border border-white/10 text-white/80 hover:text-white hover:border-white/20 transition">
                Read the Docs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
