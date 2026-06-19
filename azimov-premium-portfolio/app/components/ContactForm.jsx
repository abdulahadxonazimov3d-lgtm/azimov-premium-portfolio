'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  async function submit(e) {
    e.preventDefault(); setLoading(true); setStatus('');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data) });
    const json = await res.json(); setLoading(false);
    if (json.ok) { setStatus('Xabar Telegramga yuborildi.'); e.currentTarget.reset(); }
    else setStatus(json.error || 'Xatolik yuz berdi.');
  }
  return <form onSubmit={submit} className="glass rounded-[2rem] p-6 md:p-8 space-y-4">
    <input name="name" placeholder="Ism" className="w-full rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none focus:border-teal-300" />
    <input name="phone" placeholder="Telefon" className="w-full rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none focus:border-teal-300" />
    <input name="email" type="email" placeholder="Email" className="w-full rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none focus:border-teal-300" />
    <textarea name="message" placeholder="Xabar" rows="5" className="w-full rounded-2xl bg-white/10 border border-white/10 px-5 py-4 outline-none focus:border-teal-300" />
    <button disabled={loading} className="btn-primary w-full justify-center"><Send size={18}/>{loading ? 'Yuborilmoqda...' : 'Telegramga yuborish'}</button>
    {status && <p className="text-sm text-teal-300">{status}</p>}
  </form>
}
