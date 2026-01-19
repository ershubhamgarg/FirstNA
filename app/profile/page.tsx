"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <main className="w-full max-w-2xl bg-white/90 dark:bg-zinc-900/80 rounded-xl p-8 shadow">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <Image
              src="/file.svg"
              alt="Avatar"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              johndoe@example.com
            </p>
          </div>

          <div className="ml-auto">
            <button className="rounded-full bg-foreground text-background px-4 py-2">
              Edit Profile
            </button>
          </div>
        </div>

        <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Bio
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              This is a short bio about the user.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Location
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              San Francisco, CA
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Website
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              https://example.com
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
              Member since
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              January 2024
            </p>
          </div>
        </section>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => router.push("/settings")}
            className="rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
          >
            Go to Settings
          </button>
        </div>
      </main>
    </div>
  );
}
