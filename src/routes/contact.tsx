import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/PageHero";
import { Mail, MapPin, Phone, Instagram, ArrowRight } from "lucide-react";
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
      <section className="relative isolate overflow-hidden bg-primary" style={{ backgroundImage: `url(${faqTop})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">FAQ / Contact</span>
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

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="accent-bar text-3xl font-bold">1. Introduction</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              This section provides answers to common questions regarding the Bachelor of
              Business Administration programme at Kuala Lumpur University of Science and
              Technology (KLUST), as well as useful contact and social media information
              for prospective students.
            </p>
          </div>
          <div>
            <img src={faqInfo} alt="FAQ and contact information" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
          </div>
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="accent-bar text-3xl font-bold">2. Frequently Asked Questions (FAQs)</h2>
          <div className="mt-8 space-y-4">
            {[
              { q: "How long is the programme?", a: "The programme is designed to be completed within 3 years of full-time study." },
              { q: "What career opportunities are available after graduation?", a: "Graduates may pursue careers in management, marketing, entrepreneurship, finance, human resource management, and banking." },
              { q: "Does the programme include industrial training?", a: "Yes. Students are provided with industrial training opportunities to gain practical working experience." },
              { q: "Are there accommodation facilities near the campus?", a: "Students may stay at nearby accommodation areas such as Unipark condominium and De Centrum residence for convenient access to campus facilities." },
            ].map((f) => (
              <details key={f.q} className="group rounded-xl border border-border bg-card shadow-card">
                <summary className="flex cursor-pointer list-none items-center justify-between p-5 text-base font-semibold text-foreground">
                  {f.q}
                  <span className="ml-4 text-accent transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="border-t border-border px-5 pb-5 pt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <h2 className="accent-bar text-3xl font-bold">3. Contact Information</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          For more information regarding the Bachelor of Business Administration programme,
          prospective students may contact KLUST through the official university website and
          communication platforms.
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-primary p-8 text-primary-foreground shadow-elegant">
            <h3 className="text-xl font-bold">Admissions Office</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-accent" /> Kuala Lumpur University of Science and Technology, Kuala Lumpur, Malaysia</li>
              <li className="flex items-center gap-3"><Instagram className="h-5 w-5 text-accent" /> <a href="https://instagram.com/myklust" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">@myklust</a></li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-accent" /> <a href="https://wa.me/601124260734" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">+6011-24260734</a></li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-accent" /> <a href="mailto:s@klust.edu.my" className="underline underline-offset-2 hover:text-accent">@s.klust.edu.my</a></li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-semibold text-foreground">Send us a message</h3>
            <form action="https://api.web3forms.com/submit" method="POST" className="mt-4 grid gap-4">
              <input type="hidden" name="access_key" value="40e338ef-79b3-4e16-a2c7-969e8f3be73a" />
              <input type="hidden" name="_subject" value="New contact from KLUST website" />
              <input type="hidden" name="_redirect" value="https://klust-bba.pages.dev/contact" />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-foreground">Full name <span className="text-accent">*</span></label>
                  <input name="full_name" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-ring/30 focus:ring-2" />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground">Email <span className="text-accent">*</span></label>
                  <input name="email" type="email" required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-ring/30 focus:ring-2" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-foreground">Phone (optional)</label>
                  <input name="phone" className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-ring/30 focus:ring-2" />
                </div>
                <div>
                  <label className="text-xs font-medium text-foreground">Programme</label>
                  <input name="programme" value="Bachelor of Business Administration" readOnly className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-ring/30 focus:ring-2" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-foreground">Student status</label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer">
                    <input type="radio" name="student_status" value="Malaysian" defaultChecked className="h-3.5 w-3.5 text-accent" />
                    Malaysian
                  </label>
                  <label className="flex items-center gap-1.5 text-xs text-muted-foreground cursor-pointer">
                    <input type="radio" name="student_status" value="International" className="h-3.5 w-3.5 text-accent" />
                    International
                  </label>
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-foreground">Message <span className="text-accent">*</span></label>
                <textarea name="message" required minLength={10} rows={4} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm outline-none ring-ring/30 focus:ring-2" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 self-start rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-elegant transition-transform hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="accent-bar text-3xl font-bold">4. Social Media &amp; Platforms</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Follow KLUST on official social media platforms to receive updates regarding
                academic programmes, student activities, campus events, and university
                announcements.
              </p>
              <div className="mt-6 space-y-3">
                <p className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Instagram className="h-5 w-5 text-accent" /> <a href="https://instagram.com/myklust" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">@myklust</a>
                </p>
                <p className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Phone className="h-5 w-5 text-accent" /> <a href="https://wa.me/601124260734" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent">+6011-24260734</a>
                </p>
                <p className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <Mail className="h-5 w-5 text-accent" /> <a href="mailto:s@klust.edu.my" className="underline underline-offset-2 hover:text-accent">@s.klust.edu.my</a>
                </p>
              </div>
            </div>
            <div>
              <img src={socialMedia} alt="Social media" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={callToAction} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center text-primary-foreground sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">5. Start Your Journey With KLUST</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Explore the Bachelor of Business Administration programme and discover exciting
            opportunities for your academic and professional future at KLUST.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href="https://klust-bba.pages.dev" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant hover:scale-[1.02] transition-transform">
              Learn More <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
