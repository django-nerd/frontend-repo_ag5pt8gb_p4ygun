export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-blue-100/90 leading-relaxed">
            I’m a full‑stack developer focused on crafting modern, accessible web apps. I love working with React, TypeScript, and cloud tooling. I care about performance, clean abstractions, and delightful details.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {["React","TypeScript","Node","Python","FastAPI","Tailwind"].map((s) => (
              <div key={s} className="rounded-xl border border-white/10 bg-slate-900/60 p-4 text-blue-100/90 text-sm">{s}</div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-violet-500/10 p-8">
          <p className="text-blue-100/90">
            Outside of coding, I enjoy photography, climbing, and learning new things. I’m currently exploring creative coding and 3D on the web.
          </p>
        </div>
      </div>
    </section>
  );
}
