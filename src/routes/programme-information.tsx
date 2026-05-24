import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { BookOpen, Users, Briefcase, Laptop } from "lucide-react";
import progInfoTop from "@/assets/prog-info-top.jpg";
import programmeOverview from "@/assets/programme-overview.png";
import entryRequirements from "@/assets/entry-requirements.jpg";
import programmeDuration from "@/assets/programme-duration.jpg";
import skillsGained from "@/assets/skills-gained.jpg";

export const Route = createFileRoute("/programme-information")({
  head: () => ({
    meta: [
      { title: "Programme Information — BBA at KLUST" },
      { name: "description", content: "Programme structure, subjects, admission requirements, and study duration for the BBA at KLUST." },
      { property: "og:title", content: "Programme Information — BBA at KLUST" },
      { property: "og:description", content: "Learn about the BBA programme at KLUST." },
    ],
  }),
  component: ProgrammeInfo,
});

function ProgrammeInfo() {
  return (
    <>
      <PageHero
        eyebrow="Programme Information"
        title="Programme Information"
        description="Programme structure, subjects offered, admission requirements, and study duration at Kuala Lumpur University of Science and Technology (KLUST)."
        image={progInfoTop}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-forwards">
            <h2 className="accent-bar text-3xl font-bold">Programme Overview</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              The Bachelor of Business Administration programme at Kuala Lumpur University
              of Science and Technology (KLUST) is designed to provide students with
              knowledge and practical skills in management, marketing, entrepreneurship,
              finance, and human resource management.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The programme helps students develop leadership, communication, teamwork,
              and problem-solving skills required in the business industry.
            </p>
          </div>
          <div className="group relative animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-forwards">
            <div className="absolute -inset-4 scale-95 rounded-[2rem] bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 blur-xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/50 transition-colors duration-300 group-hover:ring-primary/20" />
              <img
                src={programmeOverview}
                alt="Programme overview"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Section>

      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-border/60 to-transparent" aria-hidden="true" />

      <section className="relative bg-secondary/60 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.58_0.22_27_/_0.04),transparent_60%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,oklch(0.24_0.07_260_/_0.04),transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="group relative animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-forwards">
                <div className="absolute -inset-4 scale-95 rounded-[2rem] bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 blur-xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/50 transition-colors duration-300 group-hover:ring-primary/20" />
                  <img
                    src={entryRequirements}
                    alt="Entry requirements"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-forwards">
              <h2 className="accent-bar text-3xl font-bold">Entry Requirements</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Applicants are generally required to possess qualifications such as STPM,
                diploma, foundation, matriculation, or other equivalent qualifications
                approved by Kuala Lumpur University of Science and Technology (KLUST).
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Applicants may also be required to meet the English language requirements
                set by the university.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-border/60 to-transparent" aria-hidden="true" />

      <Section>
        <div className="animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-forwards">
          <h2 className="accent-bar text-3xl font-bold">Course Structure / Subjects</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, title: "Core Subjects", desc: "Core subjects provide students with fundamental business knowledge and skills in areas such as management, communication, leadership, and business operations." },
            { icon: Briefcase, title: "Major Subjects", desc: "Major subjects in management, marketing, entrepreneurship, finance, and human resource management help students develop specialized knowledge." },
            { icon: Users, title: "Free Electives", desc: "Free elective subjects provide opportunities for students to broaden their academic knowledge and develop additional soft skills outside their main field of study." },
            { icon: Laptop, title: "Industrial Training", desc: "Industrial training allows students to gain practical working experience and apply their business knowledge in a real workplace environment." },
          ].map((c, i) => (
            <div
              key={c.title}
              className="group relative animate-in fade-in slide-in-from-bottom-6 animation-duration-500 fill-mode-forwards rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant hover:border-primary/20"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 text-primary ring-1 ring-primary/10 transition-all duration-300 group-hover:from-primary/15 group-hover:to-accent/10 group-hover:ring-accent/20 group-hover:scale-110">
                  <c.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-accent">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-border/60 to-transparent" aria-hidden="true" />

      <section className="relative bg-secondary/60 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,oklch(0.24_0.07_260_/_0.04),transparent_60%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,oklch(0.58_0.22_27_/_0.03),transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-forwards">
              <h2 className="accent-bar text-3xl font-bold">Programme Duration</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                The Bachelor of Business Administration programme is designed to be
                completed within approximately 3 years of full-time study.
              </p>
            </div>
            <div className="group relative animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-forwards">
              <div className="absolute -inset-4 scale-95 rounded-[2rem] bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 blur-xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/50 transition-colors duration-300 group-hover:ring-primary/20" />
                <img
                  src={programmeDuration}
                  alt="Programme duration"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-border/60 to-transparent" aria-hidden="true" />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <div className="group relative animate-in fade-in slide-in-from-bottom-4 animation-duration-700 fill-mode-forwards">
              <div className="absolute -inset-4 scale-95 rounded-[2rem] bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-0 blur-xl transition-all duration-500 group-hover:scale-100 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/50 transition-colors duration-300 group-hover:ring-primary/20" />
                <img
                  src={skillsGained}
                  alt="Skills gained"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-bottom-4 animation-duration-700 delay-150 fill-mode-forwards">
            <h2 className="accent-bar text-3xl font-bold">Skills Gained</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Students will develop communication, leadership, teamwork, analytical
              thinking, and problem-solving skills throughout the programme.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The Bachelor of Business Administration programme at KLUST prepares
              students with both academic knowledge and practical skills needed for
              future careers in the business industry.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
