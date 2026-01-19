"use client";
import { useParams } from "next/navigation";

export default function OrderPage() {
  const params = useParams();
  const orderId = params?.id;
  const orderDate = params?.date;
  const orderName = params?.name;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <main className="w-full max-w-md bg-white/90 dark:bg-zinc-900/80 rounded-xl p-8 shadow">
        <h1 className="text-2xl font-bold mb-4">Order Details</h1>
        <div className="space-y-4">
          <p className="text-lg">
            Order ID: <span className="font-mono text-blue-600">{orderId}</span>
          </p>
          <p className="text-lg">
            Order Date:{" "}
            <span className="font-mono text-green-600">{orderDate}</span>
          </p>

          <p className="text-lg">
            Order Name:{" "}
            <span className="font-mono text-red-600">{orderName}</span>
          </p>
        </div>
      </main>
    </div>
  );
}
