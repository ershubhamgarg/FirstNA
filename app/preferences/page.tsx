export default function PreferencesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <main className="w-full max-w-md bg-white/90 dark:bg-zinc-900/80 rounded-xl p-8 shadow">
        <h1 className="text-2xl font-bold mb-4">Preferences</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Theme</label>
            <select className="w-full rounded border px-3 py-2">
              <option>System</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Language</label>
            <select className="w-full rounded border px-3 py-2">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <button className="w-full mt-6 rounded bg-foreground text-background py-2">
            Save Preferences
          </button>
        </div>
      </main>
    </div>
  );
}
