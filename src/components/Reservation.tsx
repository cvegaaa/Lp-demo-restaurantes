import { useState, type FormEvent } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { supabase, type NewReservation } from '@/lib/supabase';
import { Check, Loader2, AlertCircle, CalendarDays, Users, Clock } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const times = [
  '13:00', '13:30', '14:00', '14:30',
  '20:00', '20:30', '21:00', '21:30', '22:00',
];

const today = new Date().toISOString().split('T')[0];

export default function Reservation() {
  useReveal();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState<NewReservation>({
    name: '',
    email: '',
    phone: '',
    party_size: 2,
    reservation_date: '',
    reservation_time: '20:30',
    special_request: '',
  });

  const update = (field: keyof NewReservation, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('reservations').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        party_size: form.party_size,
        reservation_date: form.reservation_date,
        reservation_time: form.reservation_time,
        special_request: form.special_request?.trim() || null,
      });

      if (error) throw error;

      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        party_size: 2,
        reservation_date: '',
        reservation_time: '20:30',
        special_request: '',
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'No se pudo completar la reserva.');
    }
  };

  return (
    <section id="reserve" className="relative py-28 md:py-40 bg-ink-950 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/80 to-ink-950" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <div className="text-center mb-12 reveal">
          <p className="text-gold-300 uppercase tracking-[0.3em] text-xs mb-5">Reserve su mesa</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink-50 text-balance mb-6">
            Una velada le espera
          </h2>
          <p className="text-ink-300 font-light max-w-xl mx-auto leading-relaxed">
            Complete el formulario y nuestro equipo confirmará su reserva en menos de 24 horas.
            Para grupos de más de 10 personas, contáctenos directamente.
          </p>
          <div className="w-16 h-px bg-gold-400 mx-auto mt-8" />
        </div>

        {status === 'success' ? (
          <div className="reveal text-center py-16 px-8 border border-gold-500/30 bg-ink-900/60 backdrop-blur-sm">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold-500/20 flex items-center justify-center">
              <Check className="text-gold-300" size={32} />
            </div>
            <h3 className="font-serif text-3xl text-ink-50 font-light mb-4">Reserva recibida</h3>
            <p className="text-ink-300 font-light max-w-md mx-auto mb-8">
              Gracias. Le enviaremos un correo de confirmación con todos los detalles en breve.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-8 py-3 border border-ink-300 text-ink-100 text-sm uppercase tracking-[0.2em] hover:bg-ink-100 hover:text-ink-950 transition-all duration-300"
            >
              Hacer otra reserva
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal space-y-6 p-8 md:p-10 border border-ink-700/60 bg-ink-900/50 backdrop-blur-sm"
            style={{ transitionDelay: '0.1s' }}
          >
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-ink-300 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className="w-full bg-transparent border-b border-ink-600 py-3 text-ink-50 font-light focus:border-gold-400 outline-none transition-colors"
                placeholder="Su nombre"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-ink-300 mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="w-full bg-transparent border-b border-ink-600 py-3 text-ink-50 font-light focus:border-gold-400 outline-none transition-colors"
                  placeholder="correo@ejemplo.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-ink-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="w-full bg-transparent border-b border-ink-600 py-3 text-ink-50 font-light focus:border-gold-400 outline-none transition-colors"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>

            {/* Date + Time */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-ink-300 mb-2 flex items-center gap-2">
                  <CalendarDays size={14} /> Fecha
                </label>
                <input
                  type="date"
                  required
                  min={today}
                  value={form.reservation_date}
                  onChange={(e) => update('reservation_date', e.target.value)}
                  className="w-full bg-transparent border-b border-ink-600 py-3 text-ink-50 font-light focus:border-gold-400 outline-none transition-colors [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-ink-300 mb-2 flex items-center gap-2">
                  <Clock size={14} /> Hora
                </label>
                <select
                  value={form.reservation_time}
                  onChange={(e) => update('reservation_time', e.target.value)}
                  className="w-full bg-transparent border-b border-ink-600 py-3 text-ink-50 font-light focus:border-gold-400 outline-none transition-colors [&>option]:bg-ink-900"
                >
                  {times.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Party size */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-ink-300 mb-2 flex items-center gap-2">
                <Users size={14} /> Número de comensales
              </label>
              <div className="flex items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => update('party_size', Math.max(1, form.party_size - 1))}
                  className="w-10 h-10 border border-ink-600 text-ink-100 hover:border-gold-400 hover:text-gold-300 transition-colors text-lg"
                  aria-label="Restar comensal"
                >
                  −
                </button>
                <span className="font-serif text-2xl text-ink-50 w-10 text-center">{form.party_size}</span>
                <button
                  type="button"
                  onClick={() => update('party_size', Math.min(20, form.party_size + 1))}
                  className="w-10 h-10 border border-ink-600 text-ink-100 hover:border-gold-400 hover:text-gold-300 transition-colors text-lg"
                  aria-label="Sumar comensal"
                >
                  +
                </button>
                <span className="text-ink-500 text-sm font-light ml-2">
                  {form.party_size === 1 ? 'persona' : 'personas'}
                </span>
              </div>
            </div>

            {/* Special request */}
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-ink-300 mb-2">
                Peticiones especiales (opcional)
              </label>
              <textarea
                value={form.special_request ?? ''}
                onChange={(e) => update('special_request', e.target.value)}
                rows={3}
                className="w-full bg-transparent border-b border-ink-600 py-3 text-ink-50 font-light focus:border-gold-400 outline-none transition-colors resize-none"
                placeholder="Alergias, celebraciones, preferencias de mesa…"
              />
            </div>

            {/* Error */}
            {status === 'error' && (
              <div className="flex items-center gap-3 text-wine-300 text-sm border border-wine-700/40 bg-wine-950/30 px-4 py-3">
                <AlertCircle size={18} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 bg-gold-500 text-ink-950 text-sm uppercase tracking-[0.2em] font-medium hover:bg-gold-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(212,168,67,0.3)]"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Enviando…
                </>
              ) : (
                'Confirmar reserva'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
