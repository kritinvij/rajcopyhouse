import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Raj Copy House. Call or WhatsApp Manoj Sachdeva directly for bulk orders and wholesale enquiries. Chawri Bazaar, Delhi.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-slate-800 px-4 py-16 sm:px-6">
        <div className="hero-dot-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">Speak to Us Directly</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              No forms, no queues. Manoj Sachdeva picks up. Call or WhatsApp during
              business hours and get an answer on the spot.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col rounded-2xl bg-slate-900 p-8 text-white">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">Call Us</div>
              <div className="mb-2 text-2xl font-bold">+91 98100 35108</div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-300">
                Fastest for urgent requirements. Manoj answers directly - no receptionist, no callback queue.
              </p>
              <a
                href="tel:+919810035108"
                className="inline-block rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 transition-opacity hover:opacity-90"
              >
                Call Now
              </a>
            </div>

            <div className="flex flex-col rounded-2xl bg-green-600 p-8 text-white">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-green-200">WhatsApp</div>
              <div className="mb-2 text-2xl font-bold">+91 98100 35108</div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-green-100">
                Send your product list or specs. Most quotes turned around within 2 hours during business hours.
              </p>
              <a
                href="https://wa.me/919810035108"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-green-700 transition-opacity hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-xl font-bold text-slate-900">What to Include in Your Message</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-slate-800">For a fast quote, share:</h3>
              <ol className="flex flex-col gap-3 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 font-mono text-xs font-bold text-teal-700">1</span>
                  <span><span className="font-medium text-slate-800">Product and quantity</span> — e.g. Spiral Wire 1/2&quot;, 20 kg</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 font-mono text-xs font-bold text-teal-700">2</span>
                  <span><span className="font-medium text-slate-800">Gauge, size, or GSM</span> — e.g. 22 SWG, 100 GSM, A4 Shine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 font-mono text-xs font-bold text-teal-700">3</span>
                  <span><span className="font-medium text-slate-800">Delivery pincode</span> — or nearest railway junction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 font-mono text-xs font-bold text-teal-700">4</span>
                  <span><span className="font-medium text-slate-800">GST number</span> — required for compliant invoice</span>
                </li>
              </ol>
              <p className="mt-5 text-xs text-slate-400">No spec sheet? No problem — describe what you make and we&apos;ll recommend the right grade.</p>
            </div>
            <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">Sample Message</h3>
              <div className="flex-1 rounded-xl bg-stone-50 p-4 font-mono text-sm leading-relaxed text-slate-700">
                &ldquo;Need 50 kg Stitching Wire 22 SWG, 200 covers A4 Shine finish, and 2 boxes OHP 100 micron A4. Delivery to 302001 Jaipur. GST: [number]. Please confirm stock and pricing.&rdquo;
              </div>
              <a
                href={`https://wa.me/919810035108?text=${encodeURIComponent("Need [product] [quantity] [spec]. Delivery to [pincode]. GST: [number]. Please confirm stock and pricing.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-600"
              >
                <WhatsAppIcon />
                Open WhatsApp to Send Order
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-slate-900">Our Location</h2>
              <div className="mb-4 flex items-start gap-3">
                <MapPinIcon />
                <div>
                  <div className="font-semibold text-slate-800">Raj Copy House</div>
                  <address className="mt-1 not-italic text-sm leading-relaxed text-slate-500">
                    Chawri Bazaar, Chandni Chowk,<br />
                    Delhi - 110006, India
                  </address>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PersonIcon />
                <div>
                  <div className="text-sm font-semibold text-slate-800">Manoj Sachdeva</div>
                  <div className="text-xs text-slate-500">Proprietor</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-bold text-slate-900">Business Hours</h2>
              <div className="flex flex-col gap-2">
                {[
                  { day: "Monday - Saturday", hours: "10:00 AM - 7:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between rounded-lg bg-stone-50 px-4 py-3 text-sm">
                    <span className="font-medium text-slate-700">{row.day}</span>
                    <span className={row.hours === "Closed" ? "text-red-500" : "text-slate-600"}>{row.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-400">
                For urgent requirements, WhatsApp is monitored outside business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Raj Copy House location - Chawri Bazaar, Delhi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.588!2d77.22683!3d28.65264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37e5ca2b05%3A0x9e3631bda9e90d73!2sChawri%20Bazaar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1681547200000!5m2!1sen!2sin"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-center text-sm text-slate-400">Chawri Bazaar, Chandni Chowk, Delhi - 110006</p>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" aria-hidden="true">
      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
    </svg>
  );
}
function PersonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 shrink-0 text-teal-600" aria-hidden="true">
      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
    </svg>
  );
}
