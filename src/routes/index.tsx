import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Briefcase, Users, GraduationCap, Calendar, Clock, Award, Building2, Instagram } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";
import students from "@/assets/students-collaborating.jpg";
import boardroom from "@/assets/career-boardroom.jpg";
import graduates from "@/assets/graduates.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KLUST — Bachelor of Business Administration" },
      { name: "description", content: "A guide to the BBA programme at Kuala Lumpur University of Science and Technology. Explore programme structure, careers, and student life." },
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
        <img
          src={heroCampus}
          alt="KLUST campus building with the iconic red KLUST signage"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
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

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="accent-bar text-3xl font-bold text-foreground sm:text-4xl">
              Welcome to the BBA at KLUST
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our Bachelor of Business Administration prepares the next generation of
              leaders, entrepreneurs, and managers. Through a structured curriculum,
              experienced faculty, and a vibrant student community, you'll build the
              skills, mindset and network to thrive in any sector.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              This website provides important academic programme information —
              programme structure, subjects offered, admission requirements, skills
              gained, and career opportunities for prospective students.
            </p>
          </div>
          <div className="relative">
            <img
              src={students}
              alt="KLUST business students collaborating in a classroom"
              loading="lazy"
              width={1600}
              height={1000}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rounded-xl bg-accent sm:block" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="accent-bar accent-bar-center text-3xl font-bold sm:text-4xl">Explore the Programme</h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to know before you apply — at a glance.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: BookOpen, title: "Programme Information", desc: "Programme structure, subjects offered, admission requirements, and study duration.", to: "/programme-information" },
              { icon: Briefcase, title: "Career Opportunities", desc: "Future pathways in management, marketing, entrepreneurship, finance, and HR.", to: "/career-opportunities" },
              { icon: Users, title: "Student Experience", desc: "Communication, leadership and problem-solving — built through teamwork and presentations.", to: "/student-experience" },
            ].map((c) => (
              <Link key={c.title} to={c.to} className="group rounded-xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/5 text-primary">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM VIDEOS */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <a href="https://www.instagram.com/myklust" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground shadow-sm hover:bg-secondary transition-colors">
              <Instagram className="h-4 w-4 text-accent" /> @myklust
            </a>
            <h2 className="accent-bar accent-bar-center mt-5 text-3xl font-bold sm:text-4xl">Life at KLUST</h2>
            <p className="mt-4 text-muted-foreground">
              Follow us on Instagram for a closer look at campus life, events, and student moments.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              "DYdkOA6CnU5",
              "DYV7C3BCqRd",
              "C-u23p7qZKF",
            ].map((id) => (
              <div key={id} className="group flex flex-col overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]" style={{ borderRadius: 18, height: 650, border: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="w-full shrink-0 overflow-hidden bg-black" style={{ height: 420 }}>
                  <iframe
                    src={`https://www.instagram.com/reel/${id}/embed`}
                    className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-1 items-center justify-between px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af)" }}>
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">@myklust</p>
                      <p className="text-xs text-gray-400">Instagram Reel</p>
                    </div>
                  </div>
                  <a
                    href={`https://www.instagram.com/reel/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:scale-[1.02]"
                  >
                    Open
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMME DETAILS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <img
              src={boardroom}
              alt="Business graduate presenting in a corporate boardroom"
              loading="lazy"
              width={1600}
              height={1000}
              className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="accent-bar text-3xl font-bold text-foreground sm:text-4xl">Programme Details</h2>
            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                { icon: Calendar, label: "Intakes", value: "March, June and October" },
                { icon: Clock, label: "Duration", value: "3 years (Full Time)" },
                { icon: Award, label: "Credits", value: "120" },
                { icon: GraduationCap, label: "Level", value: "Undergraduate" },
                { icon: Building2, label: "Faculty", value: "FBIHS" },
                { icon: BookOpen, label: "Field", value: "Business Administration" },
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img src={graduates} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1000} />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center text-primary-foreground sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Start Your Business Journey Today</h2>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
            Join a supportive learning environment, experienced lecturers, and a community
            of future leaders. The BBA at KLUST is your launchpad.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-elegant hover:scale-[1.02]">
              Apply Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/programme-information" className="inline-flex items-center rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-primary-foreground/20">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
