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
        title="Bachelor of Business Administration"
        description="Programme structure, subjects offered, admission requirements, and study duration at Kuala Lumpur University of Science and Technology (KLUST)."
        image={progInfoTop}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
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
          <div>
            <img
              src={programmeOverview}
              alt="Programme overview"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
            />
          </div>
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <img
                src={entryRequirements}
                alt="Entry requirements"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
              />
            </div>
            <div className="order-1 lg:order-2">
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

      <Section>
        <h2 className="accent-bar text-3xl font-bold">Course Structure / Subjects</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpen, title: "Core Subjects", desc: "Core subjects provide students with fundamental business knowledge and skills in areas such as management, communication, leadership, and business operations." },
            { icon: Briefcase, title: "Major Subjects", desc: "Major subjects in management, marketing, entrepreneurship, finance, and human resource management help students develop specialized knowledge." },
            { icon: Users, title: "Free Electives", desc: "Free elective subjects provide opportunities for students to broaden their academic knowledge and develop additional soft skills outside their main field of study." },
            { icon: Laptop, title: "Industrial Training", desc: "Industrial training allows students to gain practical working experience and apply their business knowledge in a real workplace environment." },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="accent-bar text-3xl font-bold">Programme Duration</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                The Bachelor of Business Administration programme is designed to be
                completed within approximately 3 years of full-time study.
              </p>
            </div>
            <div>
              <img
                src={programmeDuration}
                alt="Programme duration"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <img
              src={skillsGained}
              alt="Skills gained"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
            />
          </div>
          <div className="order-1 lg:order-2">
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
