import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/PageHero";
import { TrendingUp, Megaphone, Lightbulb, Wallet, UsersRound, Globe2, ArrowRight } from "lucide-react";
import boardroom from "@/assets/career-hero.jpg";

export const Route = createFileRoute("/career-opportunities")({
  head: () => ({
    meta: [
      { title: "Career Opportunities — BBA at KLUST" },
      { name: "description", content: "Future career pathways for KLUST BBA graduates in management, marketing, entrepreneurship, finance, HR and global business." },
      { property: "og:title", content: "Career Opportunities — BBA at KLUST" },
      { property: "og:description", content: "Explore career pathways for KLUST BBA graduates." },
    ],
  }),
  component: Careers,
});

const careers = [
  { icon: TrendingUp, t: "Management", d: "Operations manager, project manager, business analyst, management trainee." },
  { icon: Megaphone, t: "Marketing", d: "Brand executive, digital marketer, market researcher, communications specialist." },
  { icon: Lightbulb, t: "Entrepreneurship", d: "Founder, startup operator, family-business successor, innovation lead." },
  { icon: Wallet, t: "Finance", d: "Financial analyst, banking executive, credit officer, corporate finance associate." },
  { icon: UsersRound, t: "Human Resources", d: "HR executive, talent acquisition, learning & development, employee relations." },
  { icon: Globe2, t: "International Business", d: "Trade specialist, supply-chain coordinator, export manager, regional sales lead." },
];

function Careers() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl text-primary-foreground">
              <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">Career Opportunities</span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Where a KLUST BBA can take you</h1>
              <div className="mt-4 h-1 w-24 rounded-full bg-gradient-accent" />
              <p className="mt-6 max-w-2xl text-primary-foreground/85 sm:text-lg">Our graduates lead, build and innovate across industries. Discover the pathways unlocked by a strong foundation in business.</p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src={boardroom} alt="" className="max-w-full rounded-xl shadow-elegant" style={{ maxHeight: 320 }} />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {careers.map((c) => (
            <div key={c.t} className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="accent-bar text-2xl font-bold">Skills You'll Gain</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["Strategic Thinking", "Leadership", "Data-Driven Decisions", "Negotiation", "Cross-Cultural Communication", "Financial Literacy", "Problem Solving", "Project Management"].map((s) => (
              <div key={s} className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium text-foreground shadow-card">
                {s}
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant hover:scale-[1.02]">
              Speak with Admissions <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}