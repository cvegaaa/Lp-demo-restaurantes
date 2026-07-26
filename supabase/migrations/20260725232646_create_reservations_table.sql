/*
# Create reservations table (single-tenant, no auth)

1. New Tables
- `reservations`
  - `id` (uuid, primary key)
  - `name` (text, not null) — guest full name
  - `email` (text, not null) — guest contact email
  - `phone` (text, not null) — guest contact phone
  - `party_size` (integer, not null) — number of guests
  - `reservation_date` (date, not null) — date of the reservation
  - `reservation_time` (time, not null) — time of the reservation
  - `special_request` (text, nullable) — optional notes / dietary needs
  - `status` (text, not null, default 'pending') — pending | confirmed | cancelled
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated CRUD because reservations are submitted publicly without a sign-in screen.
3. Notes
- Single-tenant app: no user_id, no auth flow.
- Index on reservation_date + reservation_time for availability lookups.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  party_size integer NOT NULL CHECK (party_size > 0 AND party_size <= 20),
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  special_request text,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','confirmed','cancelled')),
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_reservations_date_time ON reservations (reservation_date, reservation_time);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reservations" ON reservations;
CREATE POLICY "anon_select_reservations" ON reservations FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations" ON reservations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_reservations" ON reservations;
CREATE POLICY "anon_update_reservations" ON reservations FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_reservations" ON reservations;
CREATE POLICY "anon_delete_reservations" ON reservations FOR DELETE
  TO anon, authenticated USING (true);
