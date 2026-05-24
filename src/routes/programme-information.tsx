import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { CheckCircle2 } from "lucide-react";
import students from "@/assets/students-collaborating.jpg";

export const Route = createFileRoute("/programme-information")({
  head: () => ({
    meta: [
      { title: "Programme Information — BBA at KLUST" },
      { name: "description", content: "Programme structure, subjects offered, admission requirements and study duration for the BBA at KLUST." },
      { property: "og:title", content: "Programme Information — BBA at KLUST" },
      { property: "og:description", content: "Structure, subjects, admissions, duration and credits for the KLUST BBA." },
    ],
  }),
  component: ProgrammeInfo,
});

const year1 = ["Principles of Management", "Microeconomics", "Business Mathematics", "Fundamentals of Accounting", "Business Communication", "Introduction to Marketing"];
const year2 = ["Organisational Behaviour", "Macroeconomics", "Financial Management", "Human Resource Management", "Operations Management", "Business Law"];
const year3 = ["Strategic Management", "International Business", "Entrepreneurship", "Business Research Methods", "Marketing Strategy", "Industrial Training / Final Project"];

function ProgrammeInfo() {
  return (
    <>
      <PageHero
        eyebrow="Programme Information"
        title="A structured path to business mastery"
        description="Three years. 120 credits. A curriculum that blends core business fundamentals with specialised electives and real-world practice."
        image={students}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="accent-bar text-2xl font-bold">Quick Facts</h2>
            <dl className="mt-6 space-y-4 text-sm">
              {[
                ["Intakes", "March, June and October"],
                ["Mode of Study", "Full Time"],
                ["Duration", "3 Years"],
                ["Credits", "120"],
                ["Level of Study", "Undergraduate"],
                ["Faculty", "Faculty of Business, Information and Human Sciences (FBIHS)"],
                ["Field of Study", "Business Administration"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg border border-border bg-card p-4">
                  <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{k}</dt>
                  <dd className="mt-1 font-semibold text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-2">
            <h2 className="accent-bar text-2xl font-bold">Programme Structure</h2>
            <p className="mt-4 text-muted-foreground">
              The programme is delivered across three full-time years, organised around core
              business knowledge in Year 1, applied management in Year 2, and strategic
              specialisation plus industry training in Year 3.
            </p>

            <div className="mt-8 space-y-6">
              {[
                { year: "Year 1 — Foundations", list: year1 },
                { year: "Year 2 — Applied Management", list: year2 },
                { year: "Year 3 — Strategy & Industry", list: year3 },
              ].map((y) => (
                <div key={y.year} className="rounded-xl border border-border bg-card p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-foreground">{y.year}</h3>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {y.list.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="accent-bar text-2xl font-bold">Admission Requirements</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "STPM / A-Level", d: "Minimum 2 principal passes (Grade C) in any subjects, plus SPM credit in Mathematics and English." },
              { t: "UEC", d: "Minimum 5 Grade B passes including Mathematics and English." },
              { t: "Foundation / Diploma", d: "Recognised Foundation with CGPA >= 2.00, or relevant Diploma with CGPA >= 2.50." },
            ].map((r) => (
              <div key={r.t} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold text-foreground">{r.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}