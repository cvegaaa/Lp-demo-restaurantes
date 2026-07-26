import { useReveal } from '@/hooks/useReveal';

export default function About() {
  useReveal();
  return (
    <section id="about" className="relative py-28 md:py-40 bg-ink-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="reveal relative">
            <div className="relative overflow-hidden group">
              <img
                src="https://images.pexels.com/photos/533902/pexels-photo-533902.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Chef en cocina"
                className="w-full h-[520px] object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold-500 text-ink-950 px-8 py-6 hidden sm:block">
              <p className="font-serif text-4xl font-light">15</p>
              <p className="text-xs uppercase tracking-[0.2em] mt-1">años de pasión</p>
            </div>
          </div>

          {/* Text */}
          <div className="reveal" style={{ transitionDelay: '0.15s' }}>
            <p className="text-gold-300 uppercase tracking-[0.3em] text-xs mb-5">Nuestra historia</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink-50 leading-tight mb-8 text-balance">
              Donde cada plato cuenta una historia
            </h2>
            <div className="space-y-5 text-ink-300 leading-relaxed font-light">
              <p>
                Fundado en 2008 por el chef Martín Aguilar, Lumière nació de un sueño simple: crear
                un espacio donde la cocina de autor pudiera dialogar con la mejor tradición
                mediterránea, sin perder el alma.
              </p>
              <p>
                Trabajamos con productores locales y de temporada. Cada ingrediente se elige con
                criterio, cada técnica se afina con paciencia. El resultado es una carta que cambia
                con el calendario y que premia la honestidad del producto.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 pt-8 border-t border-ink-700/60">
              <div>
                <p className="font-serif text-3xl text-gold-300 font-light">★★</p>
                <p className="text-xs text-ink-400 uppercase tracking-wider mt-2">Michelin</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold-300 font-light">42</p>
                <p className="text-xs text-ink-400 uppercase tracking-wider mt-2">Platos de temporada</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold-300 font-light">9.4</p>
                <p className="text-xs text-ink-400 uppercase tracking-wider mt-2">Valoración media</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
