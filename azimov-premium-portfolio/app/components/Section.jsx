import { motion } from 'framer-motion';
export default function Section({ id, eyebrow, title, children }) {
  return <section id={id} className="py-24">
    <div className="containerx">
      <motion.div initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}}>
        {eyebrow && <p className="text-teal-300 font-bold mb-3 uppercase tracking-[.25em] text-xs">{eyebrow}</p>}
        {title && <h2 className="section-title mb-10">{title}</h2>}
        {children}
      </motion.div>
    </div>
  </section>
}
