'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Download, ExternalLink, Mail, MapPin, Phone, Sparkles, Boxes, GraduationCap, Bot, Globe2, Cpu, Database, Camera, CheckCircle2, X, Smartphone } from 'lucide-react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import ContactForm from './components/ContactForm';

const githubUrl = 'https://github.com/abdulahadxonazimov295';

const skills = [
  { title:'Frontend', icon:Code2, items:['HTML5','CSS3','JavaScript','TypeScript','React','Next.js','Tailwind CSS','Framer Motion','Responsive UI','SEO'] },
  { title:'Backend', icon:Database, items:['Node.js','Express.js','REST API','Firebase','Supabase','PostgreSQL','MongoDB','Authentication','Admin Panel','API Integration'] },
  { title:'Mobile Development', icon:Smartphone, items:['Flutter','Dart','React Native basics','Android UI','Mobile App Design','Hive Database','Firebase Mobile','Push Notifications','REST API Mobile','Responsive Layout'] },
  { title:'AI & Chatbot', icon:BrainCircuit, items:['OpenAI API','Gemini API','Groq AI','Prompt Engineering','Telegram Bot','AI Assistant','Chatbot Education','Automation','n8n','Recommendation Systems'] },
  { title:'3D & Design', icon:Boxes, items:['Blender basics','3D Modeling','Product mockup','UI/UX Design','Figma','Adobe Photoshop','Graphic Design','Logo layout','Portfolio Design','Presentation Design'] },
];

const projects = [
  { name:'ChatBot Edu Platform', tag:'Next.js • Firebase • Groq AI', desc:'Chatbot yaratishni o‘rgatuvchi AI asosidagi ta’lim platformasi.', image:'/projects/chatbot-edu-platform.jpg', link:'#' },
  { name:'Elektron Kutubxona BMI', tag:'Next.js • Supabase • Vercel', desc:'Kitob tavsiyalari va foydalanish statistikasini tahlil qiluvchi veb sayt.', image:'/projects/elektron-kutubxona-bmi.jpg', link:'#' },
  { name:'Texnikum Web Sayti', tag:'Admin Panel • Telegram Form', desc:'Marg‘ilon shahar 4-son texnikumi uchun zamonaviy veb sayt.', image:'/projects/texnikum-web-sayti.jpg', link:'#' },
  { name:'Davomat Tizimi', tag:'Telegram Bot • Dashboard', desc:'O‘quvchilar davomatini nazorat qilish va ota-onaga xabar berish tizimi.', image:'/projects/davomat-tizimi.jpg', link:'#' },
];

const certs = [
  { title:'Google IT Support', image:'/certificates/google-it-support.jpg' },
  { title:'Google Project Management', image:'/certificates/google-project-management.jpg' },
  { title:'Google Data Analytics', image:'/certificates/google-data-analytics.jpg' },
  { title:'Google UX Design', image:'/certificates/google-ux-design.jpg' },
  { title:'Palo Alto Cybersecurity', image:'/certificates/palo-alto-cybersecurity.jpg' },
];
const gallery = [
  { title:'Seminarlar', image:'/gallery/seminarlar.jpg' },
  { title:'Dars jarayonlari', image:'/gallery/dars-jarayonlari.jpg' },
  { title:'Konferensiyalar', image:'/gallery/konferensiyalar.jpg' },
  { title:'Talabalar bilan ishlar', image:'/gallery/talabalar-bilan-ishlar.jpg' },
];
const services = ['Web sayt yaratish','Telegram bot yaratish','AI integratsiya','LMS tizimlari','Texnik konsultatsiya','Ta’lim platformalari ishlab chiqish'];

export default function Home() {
  const [preview, setPreview] = useState(null);
  return <main className="overflow-hidden">
    {preview && (
      <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-lg flex items-center justify-center p-4" onClick={() => setPreview(null)}>
        <button className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white" onClick={() => setPreview(null)} aria-label="Yopish"><X size={24}/></button>
        <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
          <img src={preview.image} alt={preview.title} className="w-full max-h-[82vh] object-contain rounded-[2rem] bg-white shadow-2xl" />
          <h3 className="text-center mt-4 text-white text-2xl font-black">{preview.title}</h3>
        </div>
      </div>
    )}
    <Navbar />

    <section id="home" className="relative min-h-screen pt-32 pb-20 grid-bg">
      <div className="containerx grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm text-teal-200 mb-6">
            <Sparkles size={16}/> Professional Personal Website
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[.95] tracking-[-.06em]">Azimov Abdulahadxon</h1>
          <p className="mt-5 text-xl md:text-2xl text-teal-200 font-semibold">IT Instructor | Full Stack Developer | AI Enthusiast</p>
          <p className="mt-6 max-w-xl text-lg text-muted leading-8">Kompyuter injiniringi mutaxassisi. Ta'lim texnologiyalari, sun'iy intellekt va web dasturlash yo'nalishlarida faoliyat yuritaman.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#portfolio" className="btn-primary"><Code2 size={18}/> Portfolio</a>
            <a href="/azimov-abdulahadxon-cv.jpg" download className="btn-secondary"><Download size={18}/> CV yuklab olish</a>
            <a href="#contact" className="btn-secondary"><Mail size={18}/> Bog‘lanish</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted">
            <span className="flex items-center gap-2"><Phone size={16}/> +998 90 787 79 29</span>
            <span className="flex items-center gap-2"><Mail size={16}/> abdulahadxonazimov295@gmail.com</span>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.8}} className="relative">
          <div className="absolute -inset-8 rounded-full bg-gradient-to-tr from-teal-400/20 to-blue-500/20 blur-3xl" />
          <div className="glass rounded-[3rem] p-6 relative overflow-hidden">
            <div className="h-[460px] rounded-[2.3rem] bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 opacity-90 flex items-center justify-center relative">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <img src="/hero-digital-technologies.jpg" alt="Raqamli texnologiyalar" className="absolute inset-0 w-full h-full object-cover opacity-45" />
              <Cpu size={120} className="text-teal-300/80 relative z-10" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-3xl p-5">
                <p className="font-bold">Raqamli texnologiyalar</p>
                <p className="text-sm text-muted mt-1">AI, Web Development, Education Technology</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    <Section id="about" eyebrow="About" title="Men haqimda">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="glass rounded-[2rem] p-8 min-h-[420px] flex items-center justify-center relative overflow-hidden">
          <img src="/about-it-technology.jpg" alt="IT sohasiga doir rasm" className="absolute inset-0 w-full h-full object-cover opacity-55" />
          <Globe2 size={140} className="text-blue-300/70 relative z-10" />
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
        <div className="space-y-5">
          {[
            ['2004','Tug‘ilgan yili'], ['Kompyuter injiniringi','Mutaxassislik'], ['TOSHKENT AXBOROT TEXNOLOGIYALARI UNIVERSITETI FARG‘ONA FILIALI','Universitet'], ['Marg‘ilon shahar 4-son texnikumi','Hozirgi ish joyi'], ['IT sohasida 3 yil. Ta’limda 1 yil.','Tajriba']
          ].map(([a,b],i)=><div key={i} className="glass rounded-3xl p-5 flex gap-5 card-hover"><div className="w-12 h-12 rounded-2xl bg-teal-300/15 text-teal-300 flex items-center justify-center font-black">{i+1}</div><div><p className="font-bold">{b}</p><p className="text-muted mt-1">{a}</p></div></div>)}
        </div>
      </div>
    </Section>

    <Section id="skills" eyebrow="Skills" title="Ko‘nikmalar">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {skills.map((s)=><div key={s.title} className="glass rounded-[2rem] p-5 card-hover"><s.icon className="text-teal-300 mb-4" size={32}/><h3 className="text-xl font-black mb-4">{s.title}</h3><div className="flex flex-wrap gap-2">{s.items.map(x=><span key={x} className="rounded-full bg-white/10 border border-white/10 px-2.5 py-1.5 text-xs text-muted">{x}</span>)}</div></div>)}
      </div>
    </Section>

    <Section id="portfolio" eyebrow="Portfolio" title="Loyihalar">
      <div className="mb-7 flex flex-wrap gap-4"><a href={githubUrl} target="_blank" className="btn-primary"><ExternalLink size={18}/> GitHub account</a></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p)=><a key={p.name} href={p.link} className="glass rounded-[2rem] p-6 card-hover block"><div className="h-40 rounded-3xl overflow-hidden bg-gradient-to-br from-teal-400/20 to-blue-500/20 mb-5"><img src={p.image} alt={p.name} className="w-full h-full object-cover" /></div><p className="text-sm text-teal-300 font-bold">{p.tag}</p><h3 className="text-xl font-black mt-2">{p.name}</h3><p className="text-muted mt-3 leading-7">{p.desc}</p></a>)}
      </div>
    </Section>

    <Section id="certificates" eyebrow="Certificates" title="Sertifikatlar">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        {certs.map((c)=><button key={c.title} onClick={() => setPreview(c)} className="glass rounded-[2rem] p-5 card-hover text-left"><div className="h-40 rounded-3xl overflow-hidden bg-white/10 border border-white/10 mb-4"><img src={c.image} alt={c.title} className="w-full h-full object-cover" /></div><h3 className="font-black">{c.title}</h3></button>)}
      </div>
    </Section>

    <Section id="gallery" eyebrow="Gallery" title="Galereya">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gallery.map((g)=><button key={g.title} onClick={() => setPreview(g)} className="glass rounded-[2rem] p-5 card-hover text-left"><div className="h-52 rounded-3xl overflow-hidden bg-white/10 border border-white/10 mb-4"><img src={g.image} alt={g.title} className="w-full h-full object-cover" /></div><h3 className="font-black text-xl">{g.title}</h3></button>)}
      </div>
    </Section>

    <Section id="services" eyebrow="Services" title="Xizmatlar">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s)=><div key={s} className="glass rounded-3xl p-6 flex gap-4 items-center card-hover"><CheckCircle2 className="text-teal-300"/><h3 className="font-bold text-lg">{s}</h3></div>)}
      </div>
    </Section>

    <Section id="contact" eyebrow="Contact" title="Bog‘lanish">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="glass rounded-[2rem] p-8 space-y-5">
          <h3 className="text-3xl font-black">Hamkorlik yoki buyurtma bo‘yicha bog‘laning</h3>
          <p className="text-muted leading-8">Web sayt, Telegram bot, AI integratsiya va ta’lim platformalari bo‘yicha murojaat qilishingiz mumkin.</p>
          <p className="flex items-center gap-3"><Mail className="text-teal-300"/> abdulahadxonazimov295@gmail.com</p>
          <p className="flex items-center gap-3"><Phone className="text-teal-300"/> +998 90 787 79 29</p>
          <p className="flex items-center gap-3"><Bot className="text-teal-300"/> @Abdulahadxon_Azimov</p>
          <p className="flex items-center gap-3"><MapPin className="text-teal-300"/> Marg‘ilon, Farg‘ona, Uzbekistan</p>
        </div>
        <ContactForm />
      </div>
    </Section>

    <footer className="border-t border-white/10 py-8 text-center text-muted">© 2026 Azimov Abdulahadxon. All rights reserved.</footer>
  </main>;
}
