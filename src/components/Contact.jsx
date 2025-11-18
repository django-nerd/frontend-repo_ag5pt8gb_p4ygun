import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Placeholder submit - wire to backend later if needed
    setTimeout(() => setStatus('Thanks! I will get back to you.'), 600);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get in touch</h2>
          <p className="text-blue-200/80 mt-2">Have a project in mind or just want to say hi?</p>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-300/70" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="Your email" className="flex-1 bg-transparent text-white placeholder:text-blue-200/60 border-b border-white/10 focus:outline-none focus:border-blue-400 pb-2" />
          </div>
          <textarea value={message} onChange={(e)=>setMessage(e.target.value)} rows="5" placeholder="Your message" className="w-full bg-transparent text-white placeholder:text-blue-200/60 border border-white/10 rounded-xl p-3 focus:outline-none focus:border-blue-400" />
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:-translate-y-0.5 transition-transform">
            <Send className="h-4 w-4" /> Send
          </button>
          {status && <p className="text-blue-200/80 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
}
