import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/PageHero";
import { Quote } from "lucide-react";
import graduates from "@/assets/graduates.jpg";
import students from "@/assets/students-2.jpg";

export const Route = createFileRoute("/student-experience")({
  head: () => ({
    meta: [
      { title: "Student Experience — BBA at KLUST" },
      { name: "description", content: "Life at KLUST — teamwork, presentations, leadership, and a supportive learning environment for BBA students." },
      { property: "og:title", content: "Student Experience — BBA at KLUST" },
      { property: "og:description", content: "Discover student life, clubs and activities at KLUST." },
    ],
  }),
  component: StudentLife,
});

function StudentLife() {
  return (
    <>
      <PageHero
        eyebrow="Student Experience"
        title="More than a degree — a launchpad"
        description="KLUST provides a supportive learning environment, experienced lecturers, and opportunities to develop practical business skills through teamwork, presentations, and academic activities."
        image={graduates}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img src={students} alt="Students collaborating" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
          <div>
            <h2 className="accent-bar text-3xl font-bold">A vibrant campus community</h2>
            <p className="mt-6 text-muted-foreground">
              Throughout the programme, students improve their communication, leadership,
              and problem-solving abilities. From case-study competitions to industry
              guest lectures and student-led societies, there's always something happening.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              {[
                "Business case competitions & hackathons",
                "Industry mentors and guest speakers",
                "Student-led clubs and entrepreneurship society",
                "International exchange opportunities",
                "Career fairs and recruiter visits",
              ].map((i) => (
                <li key={i} className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" /> {i}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="accent-bar accent-bar-center text-center text-3xl font-bold">Hear from our students</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { name: "Aisha R.", role: "BBA, Year 3", q: "The lecturers genuinely care. I went from nervous presenter to leading my team in a national case competition." },
              { name: "Daniel L.", role: "BBA Graduate", q: "KLUST gave me both the theory and the network. I joined a multinational marketing team straight after graduation." },
              { name: "Mei Yin", role: "BBA, Year 2", q: "I love the diverse community. Group projects feel like a mini international company." },
            ].map((t) => (
              <figure key={t.name} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <Quote className="h-6 w-6 text-accent" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.q}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}