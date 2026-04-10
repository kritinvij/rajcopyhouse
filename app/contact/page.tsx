import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Raj Copy House. Call or WhatsApp Manoj Sachdeva directly for bulk orders and wholesale enquiries. Chawri Bazaar, Delhi.",
};

const contactMethods = [
  {
    label: "Call Us",
    value: "+91 98100 35108",
    href: "tel:+919810035108",
    description: "Available during business hours. Fastest for urgent requirements.",
    cta: "Call Now",
    color: "bg-blue-950 text-white",
    ctaColor: "bg-white text-blue-950 hover:bg-blue-50",
  },
  {
    label: "WhatsApp",
    value: "+91 98100 35108",
    href: "https://wa.me/919810035108",
    description: "Send your product list and quantities. We respond quickly.",
    cta: "Chat on WhatsApp",
    color: "bg-green-600 text-white",
    ctaColor: "bg-white text-green-700 hover:bg-green-50",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Get in Touch
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              No contact forms. Reach us directly on call or WhatsApp — we prefer
              talking to our customers personally.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className={`flex flex-col rounded-2xl p-8 ${method.color}`}
              >
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider opacity-80">
                  {method.label}
                </div>
                <div className="mb-2 text-2xl font-bold">{method.value}</div>
                <p className="mb-6 flex-1 text-sm leading-relaxed opacity-80">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  className={`inline-block rounded-xl px-5 py-3 text-center text-sm font-semibold transition-colors ${method.ctaColor}`}
                >
                  {method.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address & Hours */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Address */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-bold text-slate-900">Our Location</h2>
              <div className="mb-4 flex items-start gap-3">
                <MapPinIcon />
                <div>
                  <div className="font-semibold text-slate-800">Raj Copy House</div>
                  <address className="mt-1 not-italic text-sm leading-relaxed text-slate-500">
                    Chawri Bazaar, Chandni Chowk,
                    <br />
                    Delhi - 110006
                    <br />
                    India
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

            {/* Hours */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="mb-4 text-lg font-bold text-slate-900">Business Hours</h2>
              <div className="flex flex-col gap-2">
                {[
                  { day: "Monday - Saturday", hours: "10:00 AM - 7:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((row) => (
                  <div
                    key={row.day}
                    className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm"
                  >
                    <span className="font-medium text-slate-700">{row.day}</span>
                    <span
                      className={
                        row.hours === "Closed"
                          ? "text-red-500"
                          : "text-slate-600"
                      }
                    >
                      {row.hours}
                    </span>
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

      {/* Map embed */}
      <section className="bg-white px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              title="Raj Copy House location - Chawri Bazaar, Delhi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5!2d77.2297!3d28.6527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9e1b1b1b1b%3A0x1!2sChawri+Bazaar%2C+Delhi!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-center text-sm text-slate-400">
            Chawri Bazaar, Chandni Chowk, Delhi - 110006
          </p>
        </div>
      </section>
    </>
  );
}

function MapPinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5 shrink-0 text-blue-700"
      aria-hidden="true"
    >
      <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
    </svg>
  );
}
