"use client";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <main className="w-full max-w-md bg-white/90 dark:bg-zinc-900/80 rounded-xl p-8 shadow">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              className="w-full rounded border px-3 py-2"
              type="text"
              placeholder="Enter username"
              disabled
              value="johndoe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              className="w-full rounded border px-3 py-2"
              type="email"
              placeholder="Enter email"
              disabled
              value="johndoe@example.com"
            />
          </div>
          <button className="w-full mt-6 rounded bg-foreground text-background py-2">
            Save Changes
          </button>
          <div className="flex gap-4 mt-8">
            <button
              onClick={() => router.replace("/profile")}
              className="rounded bg-foreground text-background px-4 py-2 hover:bg-zinc-800"
            >
              Go to Profile
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
