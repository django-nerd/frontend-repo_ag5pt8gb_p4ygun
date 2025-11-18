import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Ambient gradient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(99,102,241,0.2),transparent)]" />
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="text-blue-200/60 text-sm">Built with React • Tailwind • Spline</div>
        </div>
      </footer>
    </div>
  )
}

export default App
