import React from "react";

/**
 * Robust Destinations component for Vite + React
 * - Uses import.meta.glob to load all images present in src/assets/img
 * - Falls back to an inline SVG placeholder when an image is missing
 * - Update the `destinations` array to change items or filenames
 */

const importAllImages = () => {
  // eagerly load all jpg/png/jpeg files from src/assets/img and return a map of basename -> url
  const modules = import.meta.glob("../assets/img/*.{jpg,png,jpeg}", { eager: true, as: "url" });
  const map = {};
  for (const path in modules) {
    // path example: '../assets/img/Cubbon_park.jpg'
    const parts = path.split("/");
    const filename = parts[parts.length - 1];
    map[filename] = modules[path];
  }
  return map;
};

const imageMap = importAllImages();

// Inline SVG placeholder (data URI) to avoid external dependency
const PlaceholderSVG = () => (
  <svg
    width="100%"
    height="220"
    viewBox="0 0 600 220"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Image placeholder"
    style={{ background: "#eee", display: "block" }}
  >
    <rect width="100%" height="100%" fill="#e9e9e9" />
    <g fill="#cfcfcf">
      <rect x="30" y="30" width="160" height="120" rx="8" />
      <rect x="210" y="30" width="160" height="120" rx="8" />
      <rect x="390" y="30" width="160" height="120" rx="8" />
    </g>
    <text x="50%" y="85%" fill="#8c8c8c" fontSize="18" textAnchor="middle">
      Image not available
    </text>
  </svg>
);

const destinations = [
  { id: 1, name: "Lalbagh Botanical Garden", file: "Lalbagh-bengaluru-once.jpg", desc: "Historic botanical garden with glasshouse & lakes." },
  { id: 2, name: "Bangalore Palace", file: "Bangalore_palace_Banglore.jpg", desc: "Palatial Tudor-style architecture & grounds." },
  { id: 3, name: "Cubbon Park", file: "Cubbon_park.jpg", desc: "Large green park in the city center." },
  { id: 4, name: "ISKCON Temple", file: "ISKCONTemple_Main.jpg", desc: "Modern temple complex & cultural center." },
  { id: 5, name: "Tipu Sultan's Summer Palace", file: "Tipu_sultan.jpg", desc: "Historic teak palace with murals." },
  // add or remove items — set `file` to match filenames in src/assets/img
];

const Destinations = () => {
  return (
    <section style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h2 style={{ marginBottom: "1rem" }}>Top Destinations</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "1rem",
        }}
      >
        {destinations.map((d) => {
          const imgUrl = imageMap[d.file];
          return (
            <article
              key={d.id}
              style={{
                borderRadius: 8,
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                overflow: "hidden",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ minHeight: 160, display: "block" }}>
                {imgUrl ? (
                  <img
                    src={imgUrl}
                    alt={d.name}
                    style={{ width: "100%", height: 180, objectFit: "cover", display: "block" }}
                    onError={(e) => {
                      // fallback to placeholder if image can't load
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <PlaceholderSVG />
                )}
              </div>
              <div style={{ padding: "0.75rem 1rem", flex: 1 }}>
                <h3 style={{ margin: "0 0 .5rem", fontSize: "1.05rem" }}>{d.name}</h3>
                <p style={{ margin: 0, color: "#555", fontSize: ".95rem" }}>{d.desc}</p>
              </div>
              <div style={{ padding: "0.6rem 1rem", borderTop: "1px solid #f0f0f0", textAlign: "right" }}>
                <button
                  style={{
                    background: "#0b5fff",
                    color: "#fff",
                    border: "none",
                    padding: ".5rem .75rem",
                    borderRadius: 6,
                    cursor: "pointer",
                  }}
                  onClick={() => alert(`You clicked ${d.name}`)}
                >
                  View
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Destinations;
