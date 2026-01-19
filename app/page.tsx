"use client";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <main className="">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <button
          onClick={() => router.push("/profile")}
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] mb-4"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Profile
        </button>
        <button
          onClick={() => router.push("/settings")}
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-5 text-white transition-colors hover:bg-blue-700 md:w-[158px]"
        >
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="dark:invert"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m0 4a2 2 0 002-2h-4a2 2 0 002 2zm6-6V7a2 2 0 00-2-2h-1.5a2 2 0 01-2-2V3a2 2 0 00-4 0v.5a2 2 0 01-2 2H6a2 2 0 00-2 2v8a2 2 0 002 2h1.5a2 2 0 012 2v.5a2 2 0 004 0V17a2 2 0 012-2H18a2 2 0 002-2z"
            />
          </svg>
          Settings
        </button>
        <button
          onClick={() => router.push("/preferences")}
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 text-white transition-colors hover:bg-green-700 md:w-[158px] mt-4"
        >
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="dark:invert"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Preferences
        </button>
        <button
          onClick={() => {
            const orderId = prompt("Enter Order ID:");
            if (!orderId) return;
            const orderDate = prompt("Enter Order Date (YYYY-MM-DD):");
            if (!orderDate) return;
            const orderName = prompt("Enter Order Name:");
            if (!orderName) return;
            if (orderDate)
              router.push(`/orders/${orderId}/${orderDate}/${orderName}`);
          }}
          type="button"
          className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-yellow-600 px-5 text-white transition-colors hover:bg-yellow-700 md:w-[158px] mt-4"
        >
          <svg
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="dark:invert"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7h18M3 12h18M3 17h18"
            />
          </svg>
          My Orders
        </button>
      </main>
    </div>
  );
}
