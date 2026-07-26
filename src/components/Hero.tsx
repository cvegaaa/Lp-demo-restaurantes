import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Ambiente del restaurante"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/60 to-ink-950" />
        <div className="absolute inset-0 bg-ink-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="flex items-center justify-center gap-1 mb-6 animate-fade-in">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={16} className="text-gold-400 fill-gold-400" />
          ))}
        </div>

        <p
          className="text-gold-300 uppercase tracking-[0.4em] text-xs sm:text-sm mb-6 animate-fade-up"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          Cocina de autor · Desde 2008
        </p>

        <h1
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-ink-50 leading-none mb-8 animate-fade-up text-balance"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          Lumière
        </h1>

        <p
          className="text-ink-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-up text-balance"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          Una experiencia gastronómica donde la tradición mediterránea se encuentra con la
          vanguardia. Ingredientes de temporada, vinos excepcionales y un ambiente que invita a
          quedarse.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.65s', opacity: 0 }}
        >
          <a
            href="#reserve"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#reserve')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 bg-gold-500 text-ink-950 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gold-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,67,0.4)]"
          >
            Reservar mesa
          </a>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-10 py-4 border border-ink-300 text-ink-100 text-sm uppercase tracking-[0.2em] hover:bg-ink-100 hover:text-ink-950 transition-all duration-300"
          >
            Ver la carta
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-gold-400 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
