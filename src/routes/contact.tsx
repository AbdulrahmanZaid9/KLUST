import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import campus from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "FAQ / Contact — BBA at KLUST" },
      { name: "description", content: "Contact the BBA admissions team at KLUST. Ask a question or request more information." },
      { property: "og:title", content: "FAQ / Contact — BBA at KLUST" },
      { property: "og:description", content: "Reach the KLUST BBA admissions team." },
    ],
  }),
  component: Contact,
});

const faqs = [
  { q: "When are the intakes?", a: "We have three intakes each year: March, June, and October." },
  { q: "How long is the programme?", a: "The BBA is a 3-year full-time programme, totalling 120 credits." },
  { q: "What are the admission requirements?", a: "STPM, A-Level, UEC, recognised Foundation or Diploma routes are all accepted — see the Programme page for details." },
  { q: "Is there financial aid?", a: "Yes — scholarships and study loans are available. Our admissions team will guide you through the options." },
];

function Contact() {

  return (
    <>
      <PageHero
        eyebrow="FAQ / Contact"
        title="Talk to our admissions team"
        description="Have a question about the BBA programme, intakes or admissions? Send us a message and we'll get back to you."
        image={campus}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="accent-bar text-2xl font-bold">Send us a message</h2>
            <form action="https://formsubmit.co/doaagehad03@gmail.com" method="POST" className="mt-8 grid gap-5">
              <input type="hidden" name="_subject" value="New contact from KLUST website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://klust-bba.pages.dev/contact" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="full_name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone (optional)" name="phone" />
                <Field label="Programme of interest" name="programme" defaultValue="Bachelor of Business Administration" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea name="message" required minLength={10} rows={5} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-ring/30 focus:ring-2" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition-transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-xl bg-primary p-8 text-primary-foreground shadow-elegant">
              <h3 className="text-xl font-bold">Admissions Office</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-accent" /> Kuala Lumpur University of Science and Technology, Kuala Lumpur, Malaysia</li>
                <li className="flex items-center gap-3"><Instagram className="h-5 w-5 text-accent" /> <a href="https://instagram.com/myklust" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">@myklust</a></li>
                <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /> <a href="https://wa.me/601124260734" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">+6011-24260734</a></li>
                <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent" /> <a href="mailto:s@klust.edu.my" className="underline underline-offset-2 hover:text-accent">@s.klust.edu.my</a></li>
              </ul>
              <div className="mt-8 rounded-lg bg-primary-foreground/5 p-4 text-sm text-primary-foreground/80">
                Office hours: Mon – Fri, 9:00 – 17:30
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="accent-bar accent-bar-center text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card shadow-card">
            {faqs.map((f) => (
              <details key={f.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-foreground">
                  {f.q}
                  <span className="ml-4 text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, defaultValue }: { label: string; name: string; type?: string; required?: boolean; defaultValue?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}{required && <span className="text-accent"> *</span>}</label>
      <input name={name} type={type} required={required} defaultValue={defaultValue} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-ring/30 focus:ring-2" />
    </div>
  );
}