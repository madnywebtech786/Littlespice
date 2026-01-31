"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { categories, menuItems } from "../data/menuData";

/**
 * FuturisticMenuItemsOnly.jsx
 * - No cart / no state beyond category filter
 * - Focused, modern, high-contrast item list UI
 * - Responsive: 1-col mobile / 2-col desktop lists inside category sections
 * - Tag badges supported (graceful if absent)
 * - Uses your color scheme: bg #FFFBF2, accent #E53E3E, darkText #0F172A
 */

const categoryHero = {
  All:"/images/categories/all.webp",
  Starters: "/images/categories/starters.webp",
  Chicken: "/images/categories/chicken.webp",
  Rolls: "/images/categories/Rolls.webp",
  "Beef & Lamb": "/images/categories/Beef & Lamb.webp",
  Bread: "/images/categories/Bread.webp",
  Tandoori: "/images/categories/Tandoori.webp",
  Vindalo: "/images/categories/Vindalo.webp",
  Rice: "/images/categories/Rice.webp",
  Combos: "/images/categories/Combos.webp",
  Seafood: "/images/categories/Seafood.webp",
  Biryani: "/images/categories/biryani.webp",
  Vegetarian: "/images/categories/vegetarian.webp",
  Drinks: "/images/categories/drinks.webp",
  Desserts: "/images/categories/desserts.webp",
};

const accent = "#E53E3E";
const pageBg = "#FFFBF2";
const darkText = "#0F172A";

export default function FuturisticMenuItemsOnly() {
  const [activeCategory, setActiveCategory] = useState("All");

  const grouped = useMemo(() => {
    const map = {};
    menuItems.forEach((it) => {
      map[it.category] = map[it.category] || [];
      map[it.category].push(it);
    });
    return map;
  }, []);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? menuItems
        : menuItems.filter((m) => m.category === activeCategory),
    [activeCategory],
  );

  return (
    <div
      style={{ background: pageBg }}
      className="min-h-screen py-12 px-4 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1
            className="text-3xl md:text-5xl font-extrabold leading-tight"
            style={{ color: darkText }}
          >
            Little <span style={{ color: accent }}>Spice</span> — Menu
          </h1>
          <div
            aria-hidden
            className="mx-auto mt-4 h-1 rounded-full"
            style={{
              width: 220,
              background: `linear-gradient(90deg, ${accent} 0%, rgba(229,62,62,0.35) 70%)`,
              boxShadow: `0 8px 24px ${accent}22`,
            }}
          />
          <p className="mt-3 text-sm text-gray-600">
            Fine-tuned selection • Open 11:00 AM - 10:00 PM
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Category Pills (desktop vertical on lg) */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24">
              <div
                className="rounded-2xl p-4"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.6))",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(15,23,42,0.04)",
                }}
              >
                <h3 className="font-semibold mb-3" style={{ color: darkText }}>
                  Categories
                </h3>

                <div className="flex flex-col gap-3">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setActiveCategory(c)}
                      className="w-full text-left px-4 py-3 rounded-xl transition"
                      style={{
                        background:
                          activeCategory === c ? accent : "transparent",
                        color: activeCategory === c ? "white" : darkText,
                        border:
                          activeCategory === c
                            ? "none"
                            : "1px solid rgba(15,23,42,0.04)",
                        boxShadow:
                          activeCategory === c
                            ? `0 10px 30px ${accent}22`
                            : undefined,
                      }}
                      aria-pressed={activeCategory === c}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold truncate">{c}</span>
                        <span
                          className={`text-xs  ${activeCategory === c ? "text-white" : "text-gray-400"}`}
                        >
                          {c === "All"
                            ? menuItems.length
                            : (grouped[c] || []).length}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 rounded-lg overflow-hidden" aria-hidden>
                  <div className="relative h-28 bg-[#faf7f6]">
                    {/* decorative small hero */}
                    {activeCategory !== "All" &&
                    categoryHero[activeCategory] ? (
                      <Image
                        src={categoryHero[activeCategory]}
                        alt={`${activeCategory} hero`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 grid grid-cols-3 gap-1 p-2">
                        <div className="bg-[#fff6f6] rounded-md" />
                        <div className="bg-[#fff4f4] rounded-md" />
                        <div className="bg-[#fff6f6] rounded-md" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main */}
          <main className="lg:col-span-9">
            {/* mobile category scroller */}
            <div className="mb-6 lg:hidden">
              <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className="flex-shrink-0 py-2 px-4 rounded-full text-sm font-semibold whitespace-nowrap"
                    style={{
                      background: activeCategory === c ? accent : "white",
                      color: activeCategory === c ? "white" : darkText,
                      border:
                        activeCategory === c
                          ? `1px solid ${accent}`
                          : "1px solid #E6E6E6",
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Category hero banner */}
            <div
              className="rounded-2xl overflow-hidden mb-6 p-4 md:p-6 flex items-center gap-6"
              style={{
                border: "1px solid rgba(15,23,42,0.04)",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.65), rgba(255,255,255,0.45))",
                boxShadow: "0 8px 30px rgba(2,6,23,0.04)",
              }}
            >
              <div className="w-28 h-20 relative flex-shrink-0 rounded-lg overflow-hidden bg-[#fff6f6]">
                {activeCategory !== "All" && categoryHero[activeCategory] ? (
                  <Image
                    src={categoryHero[activeCategory]}
                    alt={`${activeCategory} hero`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{
                      background: `linear-gradient(135deg, ${accent}22 0%, #11182711 100%)`,
                    }}
                  />
                )}
              </div>

              <div className="flex-1">
                <h2
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: darkText }}
                >
                  {activeCategory === "All" ? "Full Menu" : activeCategory}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  {activeCategory === "All"
                    ? "Browse our curated selection, grouped by category"
                    : `Signature dishes from the ${activeCategory} section`}
                </p>
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-400">Items</div>
                <div className="text-lg font-bold" style={{ color: accent }}>
                  {filtered.length}
                </div>
              </div>
            </div>

            {/* Menu content */}
            {activeCategory === "All" ? (
              <div className="space-y-8">
                {categories
                  .filter((c) => c !== "All")
                  .map((c) => {
                    const items = grouped[c] || [];
                    if (!items.length) return null;
                    return (
                      <section
                        key={c}
                        className="rounded-xl p-4 md:p-6 bg-white border border-gray-50 shadow-sm"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3
                            className="font-bold text-lg"
                            style={{ color: darkText }}
                          >
                            {c}
                          </h3>
                          <div className="text-xs text-gray-400">
                            {items.length} items
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {items.map((it) => (
                            <article
                              key={it.id}
                              className="rounded-lg p-4 group hover:shadow-md transition"
                              style={{
                                border: "1px solid rgba(15,23,42,0.04)",
                                background:
                                  "linear-gradient(180deg, #ffffff, #fffefc)",
                              }}
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div className="min-w-0">
                                  <div className="flex items-center gap-3">
                                    <h4
                                      className="text-base font-semibold truncate"
                                      style={{
                                        color: darkText,
                                        letterSpacing: "0.2px",
                                      }}
                                    >
                                      {it.name}
                                    </h4>

                                    <div className="flex items-center gap-2">
                                      {(it.tags || []).map((t) => (
                                        <span
                                          key={t}
                                          className="text-xs font-semibold uppercase px-2 py-0.5 rounded-full"
                                          style={{
                                            background:
                                              t === "spicy"
                                                ? "#FFF0F0"
                                                : t === "veg"
                                                  ? "#F0FFF6"
                                                  : "#F0F8FF",
                                            color:
                                              t === "spicy"
                                                ? "#C53030"
                                                : t === "veg"
                                                  ? "#047857"
                                                  : "#034E7B",
                                            border:
                                              "1px solid rgba(0,0,0,0.02)",
                                          }}
                                        >
                                          {t}
                                        </span>
                                      ))}
                                    </div>
                                  </div>

                                  <p className="text-sm text-gray-500 mt-1 truncate">
                                    {it.desc}
                                  </p>
                                </div>

                                <div className="flex-shrink-0 text-right ml-3">
                                  <div
                                    className="text-base font-bold"
                                    style={{ color: accent }}
                                  >
                                    {it.price}
                                  </div>
                                  <div className="text-xs text-gray-400 mt-1">
                                    {it.category}
                                  </div>
                                </div>
                              </div>

                              {/* subtle divider and footer row */}
                              <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                                <div>
                                  {/* placeholder for spice level / calorie if added later */}
                                </div>
                                <div className="opacity-90">{it?.time}</div>
                              </div>
                            </article>
                          ))}
                        </div>
                      </section>
                    );
                  })}
              </div>
            ) : (
              <section className="rounded-xl p-4 md:p-6 bg-white border border-gray-50 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filtered.map((it) => (
                    <article
                      key={it.id}
                      className="rounded-lg p-4 group hover:shadow-md transition"
                      style={{
                        border: "1px solid rgba(15,23,42,0.04)",
                        background: "linear-gradient(180deg, #ffffff, #fffefc)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex items-center gap-3">
                            <h4
                              className="text-lg font-semibold truncate"
                              style={{ color: darkText }}
                            >
                              {it.name}
                            </h4>

                            <div className="flex items-center gap-2">
                              {(it.tags || []).map((t) => (
                                <span
                                  key={t}
                                  className="text-xs font-semibold uppercase px-2 py-0.5 rounded-full"
                                  style={{
                                    background:
                                      t === "spicy"
                                        ? "#FFF0F0"
                                        : t === "veg"
                                          ? "#F0FFF6"
                                          : "#F0F8FF",
                                    color:
                                      t === "spicy"
                                        ? "#C53030"
                                        : t === "veg"
                                          ? "#047857"
                                          : "#034E7B",
                                    border: "1px solid rgba(0,0,0,0.02)",
                                  }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          <p className="text-sm text-gray-500 mt-1">
                            {it.desc}
                          </p>
                        </div>

                        <div className="flex-shrink-0 text-right ml-3">
                          <div
                            className="text-lg font-bold"
                            style={{ color: accent }}
                          >
                            {it.price}
                          </div>
                          <div className="text-xs text-gray-400 mt-1">
                            {it.category}
                          </div>
                        </div>
                      </div>
                      {it.time && (
                        <div className="mt-3 text-xs text-gray-400 flex items-center justify-between">
                          <div>{/* optional micro-info */}</div>
                          <div className="opacity-90">{it?.time}</div>
                        </div>
                      )}
                      {it.note && (
                        <div className="mt-3 text-xs text-gray-400 flex items-center justify-between">
                          <div>{/* optional micro-info */}</div>
                          <div className="opacity-90">{it?.note}</div>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500">
          © Little Spice • Ask staff for allergens
        </footer>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Slight lift on hover for article cards */
        article {
          transition:
            transform 140ms ease,
            box-shadow 140ms ease;
        }
        article:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(2, 6, 23, 0.06);
        }
      `}</style>
    </div>
  );
}
