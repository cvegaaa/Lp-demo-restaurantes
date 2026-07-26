import { useReveal } from '@/hooks/useReveal';

const images = [
  {
    src: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Plato gourmet',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Interior del restaurante',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Copa de vino',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Postre de autor',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Detalle del emplatado',
    span: '',
  },
];

export default function Gallery() {
  useReveal();
  return (
    <section id="gallery" className="relative py-28 md:py-40 bg-ink-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-gold-300 uppercase tracking-[0.3em] text-xs mb-5">Atmósfera</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink-50 text-balance">
            Un espacio para recordar
          </h2>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`reveal relative overflow-hidden group ${img.span}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink-950/20 group-hover:bg-ink-950/0 transition-all duration-500" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold-400/0 group-hover:ring-gold-400/40 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
