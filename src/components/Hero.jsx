import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/10 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[90vh]">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200/80 mb-4">Portfolio</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight mb-6">
            Building delightful products with code and curiosity
          </h1>
          <p className="text-blue-100/90 text-lg mb-8">
            I craft web experiences that are fast, accessible, and a little bit playful. Dive into my favorite projects below.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-transform">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-slate-800/70 text-white border border-white/10 hover:bg-slate-800 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
}
