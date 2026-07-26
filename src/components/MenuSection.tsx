import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { menu } from '@/data/menu';

export default function MenuSection() {
  useReveal();
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <section id="menu" className="relative py-28 md:py-40 bg-ink-900 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 border-l border-t border-ink-700/40 -translate-x-px -translate-y-px pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 border-r border-b border-ink-700/40 translate-x-px translate-y-px pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-gold-300 uppercase tracking-[0.3em] text-xs mb-5">Nuestra propuesta</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink-50 text-balance">
            La carta
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-8" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-14 reveal" style={{ transitionDelay: '0.1s' }}>
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 sm:px-8 py-3 text-xs sm:text-sm uppercase tracking-[0.18em] transition-all duration-300 border ${
                active === cat.id
                  ? 'bg-gold-500 text-ink-950 border-gold-500'
                  : 'border-ink-700 text-ink-300 hover:border-gold-500/60 hover:text-ink-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 reveal" style={{ transitionDelay: '0.2s' }}>
          {current.items.map((item, i) => (
            <div
              key={item.name}
              className="group border-b border-ink-700/50 pb-6 hover:border-gold-500/40 transition-colors duration-300"
              style={{
                animation: `fadeIn 0.6s ease-out ${i * 0.08}s both`,
              }}
            >
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <h3 className="font-serif text-xl md:text-2xl text-ink-50 group-hover:text-gold-300 transition-colors duration-300">
                  {item.name}
                </h3>
                <span className="flex-1 border-b border-dotted border-ink-600/60 mb-1" />
                <span className="font-serif text-xl text-gold-300">{item.price}€</span>
              </div>
              <p className="text-ink-400 text-sm leading-relaxed font-light pr-4">{item.description}</p>
              {item.tags.length > 0 && (
                <div className="flex gap-2 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 bg-ink-800 text-ink-300 border border-ink-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-ink-500 text-sm mt-14 font-light italic reveal">
          La carta cambia con cada estación. Disponemos de menú degustación de 7 tiempos (65€) y
          opción maridaje (+35€).
        </p>
      </div>
    </section>
  );
}
