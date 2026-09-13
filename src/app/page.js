"use client";

import { useState } from "react";
import Image from "next/image";
import FrostingOption from "./components/FrostingOption";

export default function Home() {
  const [cake, setCake] = useState("/cake.svg");
  const [candle, setCandle] = useState(false);
  const [message, setMessage] = useState("");

  const frostings = [
    {
      name: "Vanilla",
      image: "/cakevanilla.svg",
    },
    {
      name: "Strawberry",
      image: "/cakestrawberry.svg",
    },
    {
      name: "Chocolate",
      image: "/cakechocolate.svg",
    },
    {
      name: "Blueberry",
      image: "/cakeblueberry.svg",
    },
  ];

  const resetCake = () => {
    setCake("/cake.svg");
    setCandle(false);
    setMessage("");
  };

  return (
    <main className="min-h-screen bg-purple-50 px-6 py-10">
      <div className="mx-auto mb-10 max-w-6xl text-center">
        <h1 className="text-4xl font-bold text-purple-600">
          Custom Cake Builder
        </h1>

        <p className="mt-2 text-purple-900">
          Create your own cake
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <section className="rounded-3xl bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Your Cake
          </h2>

          <div className="relative flex items-center justify-center rounded-2xl bg-purple-50">
            <Image
              src={cake}
              alt="Custom Cake"
              width={300}
              height={300}
            />

            {candle && (
              <Image
                src="/candle.svg"
                alt="Candle"
                width={64}
                height={64}
                className="absolute mb-64"
              />
            )}
          </div>

          {message && (
            <div className="mt-6 text-center">
              <p className="text-xl font-semibold text-purple-600">
                {message}
              </p>
            </div>
          )}
        </section>

        <section className="space-y-6">
          <FrostingOption
            frostings={frostings}
            setCake={setCake}
          />

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h2 className="mb-5 text-xl font-bold text-gray-800">
              Add Candle
            </h2>

            <button
              onClick={() => setCandle(!candle)}
              className={`w-full rounded-xl border-2 p-4 font-semibold transition ${
                candle
                  ? "border-purple-500 bg-purple-50 text-purple-600"
                  : "border-gray-200 hover:border-purple-500 text-gray-400"
              }`}
            >
              {candle ? "Candle Added" : "Add Candle"}
            </button>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-md">
            <h2 className="mb-5 text-xl font-bold text-gray-800">
              Cake Message
            </h2>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Happy Birthday!"
              className="w-full placeholder:text-gray-300 text-purple-600 rounded-xl border-2 border-gray-200 px-4 py-3 outline-none transition focus:border-purple-500"
            />
          </div>

          <button
            onClick={resetCake}
            className="w-full rounded-xl bg-gray-900 py-4 font-semibold text-white transition hover:bg-gray-700"
          >
            Reset Cake
          </button>
        </section>
      </div>
    </main>
  );
}