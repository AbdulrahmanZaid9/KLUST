import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Clock, Award, GraduationCap, Building2, BookOpen } from "lucide-react";
import homeTop from "@/assets/home-top.png";
import guide from "@/assets/guide.jpg";
import programmeInfo from "@/assets/programme-info.jpg";
import careerOpps from "@/assets/career-opps.jpg";
import programmeDetails from "@/assets/programme-details.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KLUST — Bachelor of Business Administration" },
      { name: "description", content: "A guide to the BBA programme at Kuala Lumpur University of Science and Technology." },
      { property: "og:title", content: "KLUST — Bachelor of Business Administration" },
      { property: "og:description", content: "Programme info, careers, student life, and admissions for the BBA at KLUST." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={homeTop} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              Faculty of Business, Information &amp; Human Sciences
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Bachelor of Business Administration
            </h1>
            <div className="mt-4 h-1 w-28 rounded-full bg-gradient-accent" />
            <p className="mt-6 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
              A guide to academic programme information at Kuala Lumpur University of
              Science and Technology — programme structure, subjects, admissions, and
              the career pathways that await.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/programme-information"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition-transform hover:scale-[1.02]"
              >
                Explore Programme <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20"
              >
                Talk to Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* A GUIDE TO ACADEMIC PROGRAMME INFORMATION */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="accent-bar text-3xl font-bold text-foreground sm:text-4xl">
              A Guide to Academic Programme Information
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Welcome to the Bachelor of Business Administration website at Kuala Lumpur
              University of Science and Technology (KLUST).
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              This website provides important academic programme information including
              programme structure, subjects offered, admission requirements, skills
              gained, and career opportunities for prospective students.
            </p>
          </div>
          <div className="relative">
            <img
              src={guide}
              alt="Academic programme information"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* PROGRAMME INFORMATION */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <img
                src={programmeInfo}
                alt="Programme information"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="accent-bar text-3xl font-bold text-foreground sm:text-4xl">Programme Information</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Learn about programme structure, subjects offered, admission requirements,
                and study duration at KLUST.
              </p>
              <Link
                to="/programme-information"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition-transform hover:scale-[1.02]"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="accent-bar text-3xl font-bold text-foreground sm:text-4xl">Career Opportunities</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Explore future career pathways in management, marketing, entrepreneurship,
              finance, and human resources.
            </p>
            <Link
              to="/career-opportunities"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-elegant transition-transform hover:scale-[1.02]"
            >
              View Careers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div>
            <img
              src={careerOpps}
              alt="Career opportunities"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* PROGRAMME DETAILS */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <img
                src={programmeDetails}
                alt="Programme details"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="accent-bar text-3xl font-bold text-foreground sm:text-4xl">Programme Details</h2>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Calendar, label: "Intakes", value: "March, June and October" },
                  { icon: Clock, label: "Mode of Study", value: "Full Time" },
                  { icon: Clock, label: "Duration", value: "3 years" },
                  { icon: Award, label: "Credits", value: "120" },
                  { icon: GraduationCap, label: "Level of Study", value: "Undergraduate" },
                  { icon: Building2, label: "Faculty", value: "FBIHS" },
                ].map((f) => (
                  <div key={f.label} className="flex gap-3 rounded-lg border border-border bg-card p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/5 text-primary">
                      <f.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-foreground">{f.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-muted-foreground">
                <strong>Field of Study:</strong> Business Administration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE KLUST */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="accent-bar accent-bar-center text-3xl font-bold sm:text-4xl">Why Choose KLUST?</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            KLUST provides students with a supportive learning environment, experienced
            lecturers, and opportunities to develop practical business skills through
            teamwork, presentations, and academic activities. Students are also able to
            improve their communication, leadership, and problem-solving abilities
            throughout the programme.
          </p>
        </div>
      </section>
    </>
  );
}
