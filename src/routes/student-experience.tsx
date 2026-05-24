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

function StudentLife() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-primary" style={{ backgroundImage: `url(${studentExpTop})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl text-primary-foreground">
            <span className="inline-flex items-center rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">Student Experience</span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">Student Life at KLUST</h1>
            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-accent" />
            <p className="mt-6 max-w-2xl text-primary-foreground/85 sm:text-lg">
              A supportive and interactive learning environment that encourages teamwork,
              communication, leadership, and personal growth.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
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
            <img src={studentIntro} alt="Student introduction" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
          </div>
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <img src={campusLife} alt="Learning experience" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
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

      <Section>
        <h2 className="accent-bar text-3xl font-bold">3. Campus Activities and Facilities</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          KLUST students are encouraged to participate in workshops, seminars, university
          activities, and student programmes. The university also provides facilities such
          as classrooms, libraries, study areas, and computer labs to support students
          throughout their studies.
        </p>

        <div className="mt-10">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-foreground">
            <Instagram className="h-5 w-5 text-accent" /> Campus Videos
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "DYdkOA6CnU5",
              "DYV7C3BCqRd",
              "C-u23p7qZKF",
            ].map((id) => (
              <div key={id} className="group flex flex-col overflow-hidden bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]" style={{ borderRadius: 18, height: 500, border: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="w-full shrink-0 overflow-hidden bg-black" style={{ height: 340 }}>
                  <iframe
                    src={`https://www.instagram.com/reel/${id}/embed`}
                    className="h-full w-full"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="flex flex-1 items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af)" }}>
                      <Instagram className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">@myklust</p>
                      <p className="text-xs text-gray-400">Instagram</p>
                    </div>
                  </div>
                  <a href={`https://www.instagram.com/reel/${id}`} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white transition-all hover:bg-gray-800">
                    Open
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              <img src={accommodation} alt="Student accommodation" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <img src={personalExperience} alt="Personal experience" loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover shadow-elegant" />
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

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <Lightbulb className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">Tips for New Students</h3>
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
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <MessageCircle className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">5. What I Wish I Knew Before Joining</h3>
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
            <div className="rounded-xl border border-border bg-card p-6 shadow-card md:col-span-2 lg:col-span-1">
              <Heart className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">6. Student Reflection</h3>
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
