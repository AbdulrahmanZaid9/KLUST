import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/PageHero";
import { Mail, MapPin, Phone, Instagram, ArrowRight, ChevronRight } from "lucide-react";
import faqTop from "@/assets/faq-top.jpg";
import faqInfo from "@/assets/faq-info.jpg";
import socialMedia from "@/assets/social-media.png";
import callToAction from "@/assets/call-to-action.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "FAQ / Contact — BBA at KLUST" },
      { name: "description", content: "FAQ and contact information for the BBA programme at KLUST." },
      { property: "og:title", content: "FAQ / Contact — BBA at KLUST" },
      { property: "og:description", content: "Get in touch with KLUST BBA admissions." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      {/* ──────── Hero ──────── */}
      <section className="relative isolate overflow-hidden bg-primary" style={{ backgroundImage: `url(${faqTop})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSI0IiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iLjA0IiAvPjwvc3ZnPg==')] opacity-30" />
        {/* Decorative glow circles */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm transition-colors hover:bg-primary-foreground/20">FAQ / Contact</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">FAQ and Contact Information</h1>
            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-accent" />
            <p className="mt-6 max-w-2xl text-primary-foreground/85 sm:text-lg">
              This section provides answers to common questions regarding the Bachelor of
              Business Administration programme at KLUST, as well as useful contact and
              social media information for prospective students.
            </p>
          </div>
        </div>
      </section>

      {/* ──────── 1. Introduction ──────── */}
      <Section>
        <div className="relative">
          {/* Decorative background dot */}
          <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-accent/5 blur-2xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative z-10">
              <h2 className="accent-bar text-3xl font-bold">1. Introduction</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                This section provides answers to common questions regarding the Bachelor of
                Business Administration programme at Kuala Lumpur University of Science and
                Technology (KLUST), as well as useful contact and social media information
                for prospective students.
              </p>
            </div>
            <div className="group relative z-10">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-accent opacity-20 blur-sm transition-opacity group-hover:opacity-40" />
              <div className="relative overflow-hidden rounded-xl">
                <img src={faqInfo} alt="FAQ and contact information" loading="lazy" className="aspect-[4/3] w-full object-cover shadow-elegant transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ──────── 2. FAQ ──────── */}
      <section className="relative overflow-hidden bg-secondary/60 py-16">
        {/* Decorative accents */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="accent-bar text-3xl font-bold">2. Frequently Asked Questions (FAQs)</h2>
          <div className="mt-8 space-y-4">
            {[
              { q: "How long is the programme?", a: "The programme is designed to be completed within 3 years of full-time study." },
              { q: "What career opportunities are available after graduation?", a: "Graduates may pursue careers in management, marketing, entrepreneurship, finance, human resource management, and banking." },
              { q: "Does the programme include industrial training?", a: "Yes. Students are provided with industrial training opportunities to gain practical working experience." },
              { q: "Are there accommodation facilities near the campus?", a: "Students may stay at nearby accommodation areas such as Unipark condominium and De Centrum residence for convenient access to campus facilities." },
            ].map((f) => (
              <details key={f.q} className="group overflow-hidden rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 open:shadow-lg open:shadow-accent/5">
                <summary className="relative flex cursor-pointer list-none items-center justify-between p-5 pr-12 text-base font-semibold text-foreground transition-colors hover:text-accent sm:p-6 sm:pr-14">
                  {/* Left accent bar */}
                  <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-gradient-accent opacity-0 transition-all duration-300 group-open:opacity-100 group-hover:opacity-60" />
                  <span className="flex-1 pl-3">{f.q}</span>
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-sm text-accent transition-all duration-300 group-open:rotate-45 group-open:bg-accent group-open:text-accent-foreground sm:right-6">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </summary>
                <div className="border-t border-border/50 px-5 pb-6 pt-4 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pb-6 sm:pt-4">
                  <span className="pl-3 block">{f.a}</span>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── 3. Contact Information ──────── */}
      <Section>
        <div className="relative">
          <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
          <h2 className="accent-bar text-3xl font-bold">3. Contact Information</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            For more information regarding the Bachelor of Business Administration programme,
            prospective students may contact KLUST through the official university website and
            communication platforms.
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="group relative rounded-xl bg-primary p-8 text-primary-foreground shadow-elegant transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30">
              {/* Subtle accent top border */}
              <div className="absolute left-0 right-0 top-0 h-1 rounded-t-xl bg-gradient-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="text-xl font-bold">Admissions Office</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur">
                    <MapPin className="h-4 w-4 text-accent" />
                  </span>
                  Kuala Lumpur University of Science and Technology, Kuala Lumpur, Malaysia
                </li>
                <li className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-1">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur">
                    <Instagram className="h-4 w-4 text-accent" />
                  </span>
                  <a href="https://instagram.com/myklust" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors hover:text-accent">@myklust</a>
                </li>
                <li className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-1">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur">
                    <Phone className="h-4 w-4 text-accent" />
                  </span>
                  <a href="https://wa.me/601124260734" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors hover:text-accent">+6011-24260734</a>
                </li>
                <li className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-1">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur">
                    <Mail className="h-4 w-4 text-accent" />
                  </span>
                  <a href="mailto:s@klust.edu.my" className="underline underline-offset-2 transition-colors hover:text-accent">@s.klust.edu.my</a>
                </li>
              </ul>
            </div>
            <div className="relative rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-lg sm:p-8">
              {/* Form heading */}
              <h3 className="text-lg font-semibold text-foreground">Send us a message</h3>
              <form action="https://api.web3forms.com/submit" method="POST" className="mt-4 grid gap-4">
                <input type="hidden" name="access_key" value="40e338ef-79b3-4e16-a2c7-969e8f3be73a" />
                <input type="hidden" name="_subject" value="New contact from KLUST website" />
                <input type="hidden" name="_redirect" value="https://klust-bba.pages.dev/contact" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-foreground">Full name <span className="text-accent">*</span></label>
                    <input name="full_name" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none transition-all duration-200 ring-ring/30 hover:border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground">Email <span className="text-accent">*</span></label>
                    <input name="email" type="email" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none transition-all duration-200 ring-ring/30 hover:border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-medium text-foreground">Phone (optional)</label>
                    <input name="phone" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none transition-all duration-200 ring-ring/30 hover:border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-foreground">Programme</label>
                    <input name="programme" value="Bachelor of Business Administration" readOnly className="mt-1 w-full cursor-default rounded-md border border-input bg-muted px-3 py-2 text-sm text-muted-foreground shadow-sm outline-none ring-ring/30" />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-foreground">Student status</label>
                  <div className="flex gap-4">
                    <label className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-input px-3 py-2 text-xs text-muted-foreground transition-all duration-200 hover:border-accent/30 has-[:checked]:border-accent has-[:checked]:bg-accent/5 has-[:checked]:text-accent">
                      <input type="radio" name="student_status" value="Malaysian" defaultChecked className="h-3.5 w-3.5 text-accent" />
                      Malaysian
                    </label>
                    <label className="flex cursor-pointer items-center gap-1.5 rounded-lg border border-input px-3 py-2 text-xs text-muted-foreground transition-all duration-200 hover:border-accent/30 has-[:checked]:border-accent has-[:checked]:bg-accent/5 has-[:checked]:text-accent">
                      <input type="radio" name="student_status" value="International" className="h-3.5 w-3.5 text-accent" />
                      International
                    </label>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground">Message <span className="text-accent">*</span></label>
                  <textarea name="message" required minLength={10} rows={4} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none transition-all duration-200 ring-ring/30 hover:border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20" />
                </div>
                <button type="submit" className="group/btn inline-flex items-center justify-center gap-2 self-start rounded-md bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-elegant transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/25 active:scale-[0.98]">
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* ──────── 4. Social Media ──────── */}
      <section className="relative overflow-hidden bg-secondary/60 py-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="accent-bar text-3xl font-bold">4. Social Media &amp; Platforms</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Follow KLUST on official social media platforms to receive updates regarding
                academic programmes, student activities, campus events, and university
                announcements.
              </p>
              <div className="mt-6 space-y-3">
                <a href="https://instagram.com/myklust" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover/link:bg-accent group-hover/link:text-accent-foreground">
                    <Instagram className="h-4 w-4" />
                  </span>
                  <span className="flex-1">Instagram</span>
                  <span className="text-xs text-muted-foreground underline underline-offset-2 transition-colors group-hover/link:text-accent">@myklust</span>
                </a>
                <a href="https://wa.me/601124260734" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover/link:bg-accent group-hover/link:text-accent-foreground">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="flex-1">WhatsApp</span>
                  <span className="text-xs text-muted-foreground underline underline-offset-2 transition-colors group-hover/link:text-accent">+6011-24260734</span>
                </a>
                <a href="mailto:s@klust.edu.my" className="group/link flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm transition-all duration-200 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover/link:bg-accent group-hover/link:text-accent-foreground">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="flex-1">Email</span>
                  <span className="text-xs text-muted-foreground underline underline-offset-2 transition-colors group-hover/link:text-accent">@s.klust.edu.my</span>
                </a>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-accent opacity-20 blur-sm transition-opacity group-hover:opacity-40" />
              <div className="relative overflow-hidden rounded-xl">
                <img src={socialMedia} alt="Social media" loading="lazy" className="aspect-[4/3] w-full object-cover shadow-elegant transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────── 5. Call to Action ──────── */}
      <section className="relative overflow-hidden">
        <img src={callToAction} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        {/* Grain overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJmIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSI0IiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNmKSIgb3BhY2l0eT0iLjA0IiAvPjwvc3ZnPg==')] opacity-20" />
        {/* Decorative circles */}
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center text-primary-foreground sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">5. Start Your Journey With KLUST</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Explore the Bachelor of Business Administration programme and discover exciting
            opportunities for your academic and professional future at KLUST.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="https://klust-bba.pages.dev" className="group/btn inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/30 active:scale-[0.98]">
              Learn More <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
