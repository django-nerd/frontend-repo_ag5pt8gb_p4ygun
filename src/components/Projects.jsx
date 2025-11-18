import { useEffect, useState } from 'react';
import { Globe, Github, ExternalLink } from 'lucide-react';

const demoProjects = [
  {
    title: 'Realtime Chat UI',
    description: 'A snappy chat experience with optimistic updates and typing indicators.',
    tags: ['React', 'Tailwind', 'Socket.io'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Composable cards, smooth charts, and keyboard navigation.',
    tags: ['React', 'D3', 'Radix UI'],
    link: '#',
    repo: '#',
  },
  {
    title: '3D Landing Page',
    description: 'Playful 3D hero with Spline and scroll-based animations.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Projects</h2>
          <p className="text-blue-200/80 mt-2 max-w-2xl">A few things I loved building recently. I enjoy turning complex problems into simple, elegant interfaces.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((p) => (
            <div key={p.title} className={`group relative rounded-2xl border border-white/10 bg-slate-900/60 p-5 overflow-hidden ${mounted ? 'animate-in' : ''}`} style={{ animationName: 'fadeInUp', animationDuration: '500ms' }}>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-violet-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-violet-500/10 rounded-2xl transition-colors" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                    <p className="text-blue-200/80 text-sm mt-1">{p.description}</p>
                  </div>
                  <Globe className="text-blue-300/70 h-5 w-5" />
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-blue-200/90">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a href={p.link} className="inline-flex items-center gap-1 text-blue-100 hover:text-white text-sm"><ExternalLink className="h-4 w-4"/> Live</a>
                  <a href={p.repo} className="inline-flex items-center gap-1 text-blue-100 hover:text-white text-sm"><Github className="h-4 w-4"/> Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
