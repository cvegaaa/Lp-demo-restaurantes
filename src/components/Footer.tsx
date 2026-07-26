import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-ink-700/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-3xl text-ink-50 mb-4">
              <span className="text-gold-400">L</span>umière
            </h3>
            <p className="text-ink-400 text-sm font-light leading-relaxed">
              Cocina de autor mediterránea desde 2008. Producto de temporada, vinos excepcionales y
              un servicio que cuida cada detalle.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 border border-ink-700 flex items-center justify-center text-ink-300 hover:border-gold-400 hover:text-gold-300 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 border border-ink-700 flex items-center justify-center text-ink-300 hover:border-gold-400 hover:text-gold-300 transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300 mb-5">Contacto</h4>
            <ul className="space-y-4 text-sm text-ink-300 font-light">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span>Paseo de la Castellana, 45<br />28046 Madrid</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold-400 shrink-0" />
                <a href="tel:+34910000000" className="hover:text-gold-300 transition-colors">
                  +34 910 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold-400 shrink-0" />
                <a href="mailto:reservas@lumiere.es" className="hover:text-gold-300 transition-colors">
                  reservas@lumiere.es
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300 mb-5">Horario</h4>
            <ul className="space-y-3 text-sm text-ink-300 font-light">
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <p>Comidas · Mar a Sáb</p>
                  <p className="text-ink-500">13:00 — 15:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <div>
                  <p>Cenas · Mar a Sáb</p>
                  <p className="text-ink-500">20:00 — 23:30</p>
                </div>
              </li>
              <li className="text-ink-500 pt-1">Domingo y Lunes cerrado</li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold-300 mb-5">Reservas</h4>
            <p className="text-sm text-ink-300 font-light mb-5">
              Reserve online o llámenos. Para eventos privados y grupos, contáctenos con antelación.
            </p>
            <a
              href="#reserve"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#reserve')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block px-6 py-3 border border-gold-500 text-gold-300 text-xs uppercase tracking-[0.2em] hover:bg-gold-500 hover:text-ink-950 transition-all duration-300"
            >
              Reservar mesa
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-ink-500 text-xs font-light">
            © {new Date().getFullYear()} Lumière. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-ink-500 text-xs">
            <a href="#" className="hover:text-ink-300 transition-colors">Aviso legal</a>
            <a href="#" className="hover:text-ink-300 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-ink-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
