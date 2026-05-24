import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/PageHero";
import { TrendingUp, Megaphone, UsersRound, Lightbulb, Wallet, Landmark } from "lucide-react";
import careerTop from "@/assets/career-top.jpg";
import introduction from "@/assets/introduction.png";
import management from "@/assets/management.jpg";
import marketing from "@/assets/marketing.jpg";
import hr from "@/assets/hr.jpg";
import entrepreneurship from "@/assets/entrepreneurship.jpg";
import financeBanking from "@/assets/finance-banking.jpg";
import islamicFinance from "@/assets/islamic-finance.jpg";
import skills from "@/assets/skills.png";
import futureOpportunities from "@/assets/future-opportunities.jpg";

export const Route = createFileRoute("/career-opportunities")({
  head: () => ({
    meta: [
      { title: "Career Opportunities — BBA at KLUST" },
      { name: "description", content: "Explore career pathways for KLUST BBA graduates in management, marketing, entrepreneurship, finance, HR and more." },
      { property: "og:title", content: "Career Opportunities — BBA at KLUST" },
      { property: "og:description", content: "Discover career pathways for KLUST BBA graduates." },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-primary"
        style={{ backgroundImage: `url(${careerTop})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-accent/5 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">Career Opportunities</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Career Opportunities</h1>
            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-accent" />
            <p className="mt-6 max-w-2xl text-primary-foreground/85 sm:text-lg">
              Graduates of the Bachelor of Business Administration programme at Kuala Lumpur
              University of Science and Technology (KLUST) can pursue careers in various
              business fields.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="relative">
          <div className="absolute -top-8 -right-8 h-48 w-48 rounded-full bg-gradient-accent/5 blur-2xl" aria-hidden="true" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <h2 className="accent-bar text-3xl font-bold">1. Introduction</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Graduates of the Bachelor of Business Administration programme at Kuala Lumpur
                University of Science and Technology (KLUST) can pursue careers in various
                business fields.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The programme equips students with practical knowledge, leadership abilities,
                communication skills, and problem-solving skills required in modern organizations.
              </p>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-accent/20 blur-sm transition-all duration-300 group-hover:blur-md" aria-hidden="true" />
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-accent/10" aria-hidden="true" />
              <img
                src={introduction}
                alt="Career introduction"
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-xl object-cover shadow-elegant transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <section className="relative bg-secondary/60 py-16">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-gradient-accent/[0.03] blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-accent/[0.02] blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="accent-bar text-3xl font-bold">2. Career Areas</h2>
          <div className="mt-10 grid gap-10">
            {[
              { img: management, title: "Management", desc: "Graduates may work in management positions involving planning, organizing, and supervising business operations.", icon: TrendingUp },
              { img: marketing, title: "Marketing", desc: "Marketing careers involve promoting products and services, understanding customer needs, and developing business strategies.", icon: Megaphone },
              { img: hr, title: "Human Resource Management", desc: "Human resource careers focus on recruitment, employee development, communication, and workplace management.", icon: UsersRound },
              { img: entrepreneurship, title: "Entrepreneurship", desc: "Graduates may pursue entrepreneurship opportunities by starting and managing their own businesses.", icon: Lightbulb },
              { img: financeBanking, title: "Finance and Banking", desc: "Finance and banking careers involve financial planning, budgeting, investment management, and banking operations within organizations and financial institutions.", icon: Wallet },
              { img: islamicFinance, title: "Islamic Finance and Banking", desc: "Islamic finance and banking focus on Shariah-compliant financial services, Islamic banking operations, and ethical financial management practices.", icon: Landmark },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="group relative">
                  <div className="pointer-events-none absolute -inset-x-6 -inset-y-4 rounded-2xl bg-card opacity-0 shadow-card transition-all duration-500 group-hover:opacity-100" aria-hidden="true" />
                  <div className={`relative grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                    <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-accent text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold text-foreground">{c.title}</h3>
                          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.desc}</p>
                        </div>
                      </div>
                    </div>
                    <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                      <div className="group/img relative overflow-hidden rounded-xl shadow-elegant transition-all duration-500 hover:shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-accent/0 transition-all duration-500 group-hover/img:bg-gradient-accent/10" />
                        <img
                          src={c.img}
                          alt={c.title}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-all duration-500 group-hover/img:opacity-100" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <Section>
        <div className="relative">
          <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-gradient-accent/[0.03] blur-3xl" aria-hidden="true" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="accent-bar text-3xl font-bold">3. Skills for Employment</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                The Bachelor of Business Administration programme helps students develop
                important employability skills that are highly valued in the business industry.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Through presentations, group assignments, discussions, and practical learning
                activities, students are able to improve communication, leadership, teamwork,
                analytical thinking, decision-making, problem-solving, and time management
                skills that are essential for future careers in business.
              </p>
            </div>
            <div className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-accent/20 blur-sm transition-all duration-300 group-hover:blur-md" aria-hidden="true" />
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-accent/10" aria-hidden="true" />
              <img
                src={skills}
                alt="Skills for employment"
                loading="lazy"
                className="relative aspect-[4/3] w-full rounded-xl object-cover shadow-elegant transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <section className="relative bg-secondary/60 py-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-accent/[0.02] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-accent/20 blur-sm transition-all duration-300 group-hover:blur-md" aria-hidden="true" />
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-accent/10" aria-hidden="true" />
                <img
                  src={futureOpportunities}
                  alt="Future opportunities"
                  loading="lazy"
                  className="relative aspect-[4/3] w-full rounded-xl object-cover shadow-elegant transition-all duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="accent-bar text-3xl font-bold">4. Future Opportunities</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Graduates may continue their studies at higher academic levels or pursue
                professional development opportunities to strengthen their business knowledge
                and career growth.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The Bachelor of Business Administration programme at KLUST prepares students
                for diverse career pathways in the modern business industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
