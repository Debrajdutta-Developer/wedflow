"use client";

import { useWeddingStore } from "../store/useWeddingStore";

export default function HomePage() {
  const {
    addGuest,
    getTotalGuests,
    getConfirmedGuests,
    getVegCount,
    getNonVegCount
  } = useWeddingStore();

  return (
    <main style={{ padding: "20px" }}>
      <h1>💍 WedFlow</h1>

      <p>AI Powered Wedding Logistics Platform</p>

      <hr />

      <h2>Dashboard</h2>

      <p>👥 Total Guests: {getTotalGuests()}</p>

      <p>✅ Confirmed Guests: {getConfirmedGuests()}</p>

      <p>🥗 Veg Guests: {getVegCount()}</p>

      <p>🍗 Non-Veg Guests: {getNonVegCount()}</p>

      <hr />

      <button
        onClick={() =>
          addGuest("VEG", "CONFIRMED")
        }
      >
        Add Veg Guest
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() =>
          addGuest("NON_VEG", "CONFIRMED")
        }
      >
        Add Non-Veg Guest
      </button>
    </main>
  );
}
