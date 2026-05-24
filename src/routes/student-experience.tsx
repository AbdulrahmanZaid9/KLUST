import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/PageHero";
import { Instagram, Lightbulb, Heart, MessageCircle } from "lucide-react";
import studentExpTop from "@/assets/student-exp-top.jpg";
import studentIntro from "@/assets/student-intro.jpg";
import campusLife from "@/assets/campus-life.jpg";
import personalExperience from "@/assets/personal-experience.jpg";
import accommodation from "@/assets/accommodation.jpg";

export const Route = createFileRoute("/student-experience")({
  head: () => ({
    meta: [
      { title: "Student Experience — BBA at KLUST" },
      { name: "description", content: "Student life at KLUST — campus activities, learning experience, accommodation, and tips for new students." },
      { property: "og:title", content: "Student Experience — BBA at KLUST" },
      { property: "og:description", content: "Discover student life at KLUST." },
    ],
  }),
  component: StudentLife,
});

function DecorativeDots({ className = "", dotColor = "rgba(255,255,255,0.08)" }: { className?: string; dotColor?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ backgroundImage: `radial-gradient(circle, ${dotColor} 1px, transparent 1px)`, backgroundSize: "24px 24px" }}
      aria-hidden="true"
    />
  );
}

function DecorativeCircle({ className = "" }: { className?: string }) {
  return <div className={`pointer-events-none absolute rounded-full opacity-[0.04] ${className}`} aria-hidden="true" />;
}

function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8" aria-hidden="true">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="flex gap-1.5">
        {[1, 2, 3].map((i) => (
          <div key={i} className={`h-1.5 w-1.5 rounded-full bg-accent/${i === 2 ? "60" : "30"}`} />
        ))}
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
}

function ImageWithGlow({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-accent opacity-0 blur-md transition-all duration-500 group-hover:opacity-20" />
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="relative aspect-[4/3] w-full rounded-xl object-cover shadow-elegant transition-all duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );
}

function StudentLife() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        className="relative isolate overflow-hidden bg-primary"
        style={{
          backgroundImage: `url(${studentExpTop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <DecorativeDots />
        <DecorativeCircle className="-left-20 -top-20 h-80 w-80 bg-accent blur-3xl" />
        <DecorativeCircle className="-bottom-32 -right-20 h-96 w-96 bg-primary blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex animate-pulse items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              Student Experience
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Student Experience</h1>
            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-accent" />
            <p className="mt-6 max-w-2xl text-primary-foreground/85 sm:text-lg">
              A supportive and interactive learning environment that encourages teamwork,
              communication, leadership, and personal growth.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: INTRODUCTION ===== */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-accent/40 to-transparent" aria-hidden="true" />
            <div className="absolute left-[-4px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-background" aria-hidden="true" />
            <h2 className="accent-bar text-3xl font-bold">1. Introduction</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Students at Kuala Lumpur University of Science and Technology (KLUST) experience
              a supportive and interactive learning environment that encourages teamwork,
              communication, leadership, and personal growth.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Through academic activities, campus events, and student collaboration, students
              are able to develop both professional and interpersonal skills throughout their
              university journey.
            </p>
          </div>
          <div>
            <ImageWithGlow src={studentIntro} alt="Student introduction" />
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ===== SECTION 2: LEARNING EXPERIENCE ===== */}
      <section className="relative isolate overflow-hidden bg-secondary/60 py-16">
        <DecorativeDots dotColor="rgba(0,0,0,0.03)" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <ImageWithGlow src={campusLife} alt="Learning experience" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="accent-bar text-3xl font-bold">2. Learning Experience &amp; Daily Campus Life</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Students at KLUST participate in presentations, group assignments, discussions,
                and practical learning activities that help improve communication, teamwork,
                and leadership skills.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Daily campus life also includes attending classes, studying in the library, and
                collaborating with classmates on academic projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 3: CAMPUS ACTIVITIES ===== */}
      <Section>
        <div className="relative">
          <h2 className="accent-bar text-3xl font-bold">3. Campus Activities and Facilities</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
            KLUST students are encouraged to participate in workshops, seminars, university
            activities, and student programmes. The university also provides facilities such
            as classrooms, libraries, study areas, and computer labs to support students
            throughout their studies.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold text-foreground">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10">
              <Instagram className="h-4 w-4 text-accent" />
            </span>
            Campus Videos
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "DYdkOA6CnU5",
              "DYV7C3BCqRd",
              "C-u23p7qZKF",
            ].map((id) => (
              <div
                key={id}
                className="group relative flex flex-col overflow-hidden bg-white transition-all duration-300 ease-out hover:-translate-y-1.5"
                style={{
                  borderRadius: 18,
                  height: 500,
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
                }}
              >
                <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-gradient-to-r from-accent via-accent/50 to-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="w-full shrink-0 overflow-hidden bg-black" style={{ height: 340 }}>
                  <iframe
                    src={`https://www.instagram.com/reel/${id}/embed`}
                    className="h-full w-full"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-1 items-center justify-between border-t border-gray-100 bg-white px-4 py-3 transition-colors duration-300 group-hover:bg-gray-50/80">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af)",
                      }}
                    >
                      <Instagram className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">@myklust</p>
                      <p className="text-xs text-gray-400">Instagram</p>
                    </div>
                  </div>
                  <a
                    href={`https://www.instagram.com/reel/${id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-gray-800"
                  >
                    Open
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ===== SECTION 4: ACCOMMODATION ===== */}
      <section className="relative isolate overflow-hidden bg-secondary/60 py-16">
        <DecorativeDots dotColor="rgba(0,0,0,0.03)" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="accent-bar text-3xl font-bold">Student Accommodation &amp; Facilities</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Students at KLUST also have access to nearby accommodation areas such as
                Unipark condominium and De Centrum residence, which provide convenience
                and easy access to campus facilities.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                These areas offer restaurants, shops, study spaces, and daily necessities
                that support student life and comfort throughout their studies.
              </p>
            </div>
            <div>
              <ImageWithGlow src={accommodation} alt="Student accommodation" />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ===== SECTION 5: PERSONAL EXPERIENCE ===== */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <ImageWithGlow src={personalExperience} alt="Personal experience" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="accent-bar text-3xl font-bold">4. Personal Experience &amp; Tips for New Students</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Studying at KLUST helps students become more confident, independent, and
              responsible throughout their university journey. Through presentations, group
              assignments, and campus activities, students are able to improve their
              communication, teamwork, leadership, and problem-solving skills.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              New students are encouraged to manage their time wisely, communicate actively
              with lecturers and classmates, and make full use of campus facilities such as
              the library, study spaces, and student activity areas.
            </p>
          </div>
        </div>
      </Section>

      <SectionDivider />

      {/* ===== SECTION 6: TIPS / WISH I KNEW / REFLECTION ===== */}
      <section className="relative isolate overflow-hidden bg-secondary/60 py-16">
        <DecorativeDots dotColor="rgba(0,0,0,0.03)" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              className="group relative rounded-xl bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute left-0 right-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-accent via-accent/60 to-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all duration-300 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/25">
                <Lightbulb className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">Tips for New Students</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Studying at KLUST helps students become more confident, independent, and
                responsible. Through presentations, group assignments, classroom discussions,
                and campus activities, students improve their communication, teamwork,
                leadership, and problem-solving skills.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                New students are encouraged to manage their time wisely, communicate actively
                with lecturers and classmates, and make full use of campus facilities.
                Participating in university events can help build friendships and adapt more
                comfortably to university life.
              </p>
            </div>

            <div
              className="group relative rounded-xl bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute left-0 right-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-accent via-accent/60 to-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all duration-300 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/25">
                <MessageCircle className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">5. What I Wish I Knew Before Joining</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                One important thing many students learn after joining KLUST is the importance
                of teamwork, communication, and time management in handling assignments,
                presentations, and academic projects successfully.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Participating actively in classroom discussions and group activities also
                helps students become more confident and independent throughout their studies.
              </p>
            </div>

            <div
              className="group relative rounded-xl bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl md:col-span-2 lg:col-span-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="absolute left-0 right-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-accent via-accent/60 to-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-all duration-300 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/25">
                <Heart className="h-6 w-6 text-accent transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">6. Student Reflection</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Many students initially feel nervous about presentations and group assignments,
                but through teamwork and classroom activities at KLUST, they gradually become
                more confident in sharing ideas and communicating with others.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                University life at KLUST also allows students to build friendships, gain new
                experiences, and develop valuable personal and academic skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
