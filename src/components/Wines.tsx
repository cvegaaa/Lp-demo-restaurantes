import { useReveal } from '@/hooks/useReveal';
import { wines } from '@/data/menu';
import { Wine } from 'lucide-react';

export default function Wines() {
  useReveal();
  return (
    <section id="wines" className="relative py-28 md:py-40 bg-ink-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <Wine className="mx-auto text-gold-400 mb-4" size={28} />
          <p className="text-gold-300 uppercase tracking-[0.3em] text-xs mb-5">Cava seleccionada</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink-50 text-balance">
            Carta de vinos
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-8" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {wines.map((w, i) => (
            <div
              key={w.name}
              className="reveal group p-8 border border-ink-700/60 hover:border-gold-500/50 transition-all duration-500 hover:bg-ink-900/50"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="font-serif text-2xl text-ink-50 group-hover:text-gold-300 transition-colors duration-300">
                    {w.name}
                  </h3>
                  <p className="text-gold-400/80 text-xs uppercase tracking-[0.2em] mt-1">{w.origin}</p>
                </div>
                <span className="font-serif text-2xl text-gold-300 whitespace-nowrap">{w.price}€</span>
              </div>
              <p className="text-ink-400 text-sm leading-relaxed font-light">{w.note}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-ink-500 text-sm mt-14 font-light italic reveal">
          Más de 120 referencias. Nuestro sommelier le asesorará con gusto.
        </p>
      </div>
    </section>
  );
}
