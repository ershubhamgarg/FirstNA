"use client";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-950 dark:to-zinc-900 flex justify-center p-6">
      <main className="w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 md:p-12">
        {/* ===== Header ===== */}
        <div className="flex flex-col items-center text-center border-b border-zinc-200 dark:border-zinc-700 pb-8">
          <Image
            src="/profile.jpeg"
            alt="Shubham Garg"
            width={200}
            height={200}
            className="rounded-full mb-6 border-4 border-zinc-300 dark:border-zinc-700"
          />

          <h1 className="text-3xl md:text-4xl font-bold">Shubham Garg</h1>

          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">
            Senior Front-End / React Native Engineer
          </p>

          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 max-w-xl">
            8+ years of experience building scalable React Native & React.js
            applications powering 100K+ users across enterprise and consumer
            products.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a href="mailto:shubhamgarg0203@gmail.com" className="btn-primary">
              Contact
            </a>
            <a
              href="https://github.com/ershubhamgarg"
              target="_blank"
              className="btn-dark"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ershubhamgarg"
              target="_blank"
              className="btn-blue"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* ===== About ===== */}
        <Section title="About Me">
          Front-End Engineer with 8+ years of experience specializing in React
          Native, React.js, and TypeScript. Strong background in delivering
          enterprise-grade mobile applications, leading cross-functional teams,
          and shipping high-performance apps with secure cloud integrations
          using Firebase and GCP.
        </Section>

        {/* ===== Skills ===== */}
        <Section title="Technical Skills">
          <SkillGroup title="Frontend">
            React Native, React.js, Next.js, TypeScript, JavaScript
          </SkillGroup>
          <SkillGroup title="State & Data">
            Redux, Redux Toolkit, Redux-Saga, MobX, REST APIs
          </SkillGroup>
          <SkillGroup title="Cloud & Tools">
            Firebase, GCP, CI/CD (Bitrise), MoEngage, Twilio
          </SkillGroup>
          <SkillGroup title="Testing & Analytics">
            Jest, Google Analytics, AppsFlyer, Smartlook
          </SkillGroup>
        </Section>

        {/* ===== Experience ===== */}
        <Section title="Experience">
          <Experience
            role="Team Lead"
            company="NeoSOFT Technologies"
            period="July 2020 – Present | Noida"
            points={[
              "Led development of scalable React Native applications using Redux and Firebase.",
              "Managed cross-functional teams of 20+ engineers across RN, Android, iOS, and Ionic.",
              "Resolved technical escalations and improved delivery quality for enterprise clients.",
            ]}
          />

          <Experience
            role="Associate Software Engineer"
            company="SmartData Enterprises"
            period="Aug 2017 – Mar 2020 | Dehradun"
            points={[
              "Built cross-platform applications across healthcare, social media, and e-commerce domains.",
              "Delivered pixel-perfect UI with strong focus on performance and user experience.",
            ]}
          />
        </Section>

        {/* ===== Projects ===== */}
        <Section title="Key Projects">
          <Project
            name="LogiRYD"
            desc="Employee transportation platform with Driver & Employee apps, live tracking, OTP auth."
          />
          <Project
            name="Slurrp"
            desc="Recipe aggregator app with 100K+ downloads on Android & iOS."
          />
          <Project
            name="Cheil Perfect Store (CPS)"
            desc="Enterprise retail management app for field force operations."
          />
          <Project
            name="CrewCompanion"
            desc="Seafarer utility app with offline sync and secure maritime integrations."
          />
        </Section>

        {/* ===== Education ===== */}
        <Section title="Education">
          <p className="font-semibold">
            B.Tech – Computer Science & Engineering
          </p>
          <p className="text-sm text-zinc-500">
            Maharishi Markandeshwar University (MMDU), 2017
          </p>
        </Section>
      </main>
    </div>
  );
}

/* ===== Reusable Components ===== */

const Section = ({ title, children }: any) => (
  <section className="mt-10">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed space-y-3">
      {children}
    </div>
  </section>
);

const SkillGroup = ({ title, children }: any) => (
  <div>
    <p className="font-semibold">{title}</p>
    <p className="text-sm text-zinc-600 dark:text-zinc-400">{children}</p>
  </div>
);

const Experience = ({ role, company, period, points }: any) => (
  <div className="mb-6">
    <p className="font-semibold">
      {role} – {company}
    </p>
    <p className="text-sm text-zinc-500 mb-2">{period}</p>
    <ul className="list-disc ml-6 space-y-1 text-sm">
      {points.map((p: any, i: any) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </div>
);

const Project = ({ name, desc }: any) => (
  <div>
    <p className="font-semibold">{name}</p>
    <p className="text-sm text-zinc-600 dark:text-zinc-400">{desc}</p>
  </div>
);
