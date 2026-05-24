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
      <section className="relative isolate overflow-hidden bg-primary" style={{ backgroundImage: `url(${careerTop})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-hero" />
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
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
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
          <div>
            <img src={introduction} alt="Career introduction" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
          </div>
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="accent-bar text-3xl font-bold">2. Career Areas</h2>
          <div className="mt-10 grid gap-8">
            {[
              { img: management, title: "Management", desc: "Graduates may work in management positions involving planning, organizing, and supervising business operations." },
              { img: marketing, title: "Marketing", desc: "Marketing careers involve promoting products and services, understanding customer needs, and developing business strategies." },
              { img: hr, title: "Human Resource Management", desc: "Human resource careers focus on recruitment, employee development, communication, and workplace management." },
              { img: entrepreneurship, title: "Entrepreneurship", desc: "Graduates may pursue entrepreneurship opportunities by starting and managing their own businesses." },
              { img: financeBanking, title: "Finance and Banking", desc: "Finance and banking careers involve financial planning, budgeting, investment management, and banking operations within organizations and financial institutions." },
              { img: islamicFinance, title: "Islamic Finance and Banking", desc: "Islamic finance and banking focus on Shariah-compliant financial services, Islamic banking operations, and ethical financial management practices." },
            ].map((c, i) => (
              <div key={c.title} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <h3 className="text-2xl font-semibold text-foreground">{c.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <img src={c.img} alt={c.title} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
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
          <div>
            <img src={skills} alt="Skills for employment" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
          </div>
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <img src={futureOpportunities} alt="Future opportunities" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
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
