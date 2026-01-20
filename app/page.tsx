"use client";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800 p-6">
      <main className="w-full max-w-2xl bg-white/90 dark:bg-zinc-900/80 rounded-xl p-8 shadow-lg flex flex-col items-center">
        <Image
          className="dark:invert mb-6"
          src="/file.svg"
          alt="Profile Picture"
          width={120}
          height={120}
        />
        <h1 className="text-3xl font-bold mb-2">Shubham Garg</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
          Frontend Developer | React Native | React | Next.js | Tailwind CSS
        </p>
        <div className="flex gap-4 mb-8">
          <a
            href="mailto:your.email@example.com"
            className="rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition"
          >
            Contact
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-zinc-800 text-white px-4 py-2 hover:bg-zinc-900 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-blue-800 text-white px-4 py-2 hover:bg-blue-900 transition"
          >
            LinkedIn
          </a>
        </div>
        <section className="w-full">
          <h2 className="text-xl font-semibold mb-4">About Me</h2>
          <p className="mb-6 text-zinc-700 dark:text-zinc-300">
            I am a passionate frontend developer with experience building modern
            web applications using React, Next.js, and Tailwind CSS. I love
            creating beautiful, performant, and accessible user interfaces.
          </p>
          <h2 className="text-xl font-semibold mb-4">Projects</h2>
          <ul className="space-y-4">
            <li className="border rounded-lg p-4 bg-zinc-50 dark:bg-zinc-800">
              <h3 className="font-bold">Project One</h3>
              <p className="text-sm">
                A brief description of your project goes here.
              </p>
            </li>
            <li className="border rounded-lg p-4 bg-zinc-50 dark:bg-zinc-800">
              <h3 className="font-bold">Project Two</h3>
              <p className="text-sm">
                A brief description of your project goes here.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
