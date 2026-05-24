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
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        <div className="absolute -top-40 -right-40 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 -z-10 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
        <img src={homeTop} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/60" />
        <div
          className="absolute inset-0 -z-10 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur transition-all duration-300 hover:bg-primary-foreground/20">
              Faculty of Business, Information &amp; Human Sciences
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Bachelor of Business Administration
            </h1>
            <div className="mt-4 h-1 w-28 rounded-full bg-gradient-accent" />
            <p className="mt-6 max-w-2xl text-base text-primary-foreground/85 sm:text-lg leading-relaxed">
              A guide to academic programme information at Kuala Lumpur University of
              Science and Technology — programme structure, subjects, admissions, and
              the career pathways that await.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/programme-information"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
              >
                Explore Programme <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-5 py-3 text-sm font-semibold text-primary-foreground backdrop-blur transition-all duration-300 hover:bg-primary-foreground/20 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Talk to Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* A GUIDE TO ACADEMIC PROGRAMME INFORMATION */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute top-10 right-10 -z-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="accent-bar text-3xl font-bold text-foreground sm:text-4xl tracking-tight">
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
          <div className="group relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/0 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={guide}
                alt="Academic programme information"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover shadow-lg transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        </div>
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* PROGRAMME INFORMATION */}
      <section className="relative bg-secondary/60 py-20">
        <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 -z-10 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={programmeInfo}
                    alt="Programme information"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover shadow-lg transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="accent-bar text-3xl font-bold text-foreground sm:text-4xl tracking-tight">Programme Information</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Learn about programme structure, subjects offered, admission requirements,
                and study duration at KLUST.
              </p>
              <Link
                to="/programme-information"
                className="group mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
              >
                Learn More <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute bottom-10 left-10 -z-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="accent-bar text-3xl font-bold text-foreground sm:text-4xl tracking-tight">Career Opportunities</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Explore future career pathways in management, marketing, entrepreneurship,
              finance, and human resources.
            </p>
            <Link
              to="/career-opportunities"
              className="group mt-6 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              View Careers <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="group relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/0 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={careerOpps}
                alt="Career opportunities"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover shadow-lg transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        </div>
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </section>

      {/* PROGRAMME DETAILS */}
      <section className="relative bg-secondary/60 py-20">
        <div className="absolute top-1/2 right-0 -z-10 h-96 w-96 translate-x-1/3 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="group relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/0 opacity-0 blur transition-all duration-300 group-hover:opacity-100" />
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={programmeDetails}
                    alt="Programme details"
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover shadow-lg transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="accent-bar text-3xl font-bold text-foreground sm:text-4xl tracking-tight">Programme Details</h2>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Calendar, label: "Intakes", value: "March, June and October" },
                  { icon: Clock, label: "Mode of Study", value: "Full Time" },
                  { icon: Clock, label: "Duration", value: "3 years" },
                  { icon: Award, label: "Credits", value: "120" },
                  { icon: GraduationCap, label: "Level of Study", value: "Undergraduate" },
                  { icon: Building2, label: "Faculty", value: "FBIHS" },
                ].map((f) => (
                  <div
                    key={f.label}
                    className="group flex gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-lg"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/5 text-primary transition-all duration-300 group-hover:bg-accent/10 group-hover:text-accent">
                      <f.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{f.label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-foreground">{f.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-sm text-muted-foreground">
                <strong>Field of Study:</strong> Business Administration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE KLUST */}
      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute top-1/2 left-0 -z-10 h-80 w-80 -translate-x-1/3 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-gradient-accent" />
          <h2 className="text-3xl font-bold sm:text-4xl tracking-tight">Why Choose KLUST?</h2>
          <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-gradient-accent" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground max-w-3xl mx-auto">
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
