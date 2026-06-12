import { create } from "zustand";

type DietaryPreference = "VEG" | "NON_VEG";
type RSVPStatus = "PENDING" | "CONFIRMED" | "DECLINED";

interface GuestRecord {
  dietaryPreference: DietaryPreference;
  rsvpStatus: RSVPStatus;
}

interface WeddingState {
  guests: GuestRecord[];

  budgetLimit: number;
  currentExpenses: number;

  addGuest: (
    dietaryPreference: DietaryPreference,
    rsvpStatus: RSVPStatus
  ) => void;

  setBudgetLimit: (amount: number) => void;

  addExpense: (amount: number) => void;

  getTotalGuests: () => number;

  getConfirmedGuests: () => number;

  getVegCount: () => number;

  getNonVegCount: () => number;

  getExpectedCateringPlates: () => number;

  getRemainingBudget: () => number;
}

export const useWeddingStore =
  create<WeddingState>((set, get) => ({
    guests: [],

    budgetLimit: 0,
    currentExpenses: 0,

    addGuest: (
      dietaryPreference,
      rsvpStatus
    ) =>
      set((state) => ({
        guests: [
          ...state.guests,
          {
            dietaryPreference,
            rsvpStatus
          }
        ]
      })),

    setBudgetLimit: (amount) =>
      set({
        budgetLimit: amount
      }),

    addExpense: (amount) =>
      set((state) => ({
        currentExpenses:
          state.currentExpenses + amount
      })),

    getTotalGuests: () =>
      get().guests.length,

    getConfirmedGuests: () =>
      get().guests.filter(
        (g) =>
          g.rsvpStatus === "CONFIRMED"
      ).length,

    getVegCount: () =>
      get().guests.filter(
        (g) =>
          g.rsvpStatus ===
            "CONFIRMED" &&
          g.dietaryPreference ===
            "VEG"
      ).length,

    getNonVegCount: () =>
      get().guests.filter(
        (g) =>
          g.rsvpStatus ===
            "CONFIRMED" &&
          g.dietaryPreference ===
            "NON_VEG"
      ).length,

    getExpectedCateringPlates: () => {
      const confirmed =
        get().guests.filter(
          (g) =>
            g.rsvpStatus ===
            "CONFIRMED"
        ).length;

      return Math.ceil(
        confirmed * 1.1
      );
    },

    getRemainingBudget: () =>
      get().budgetLimit -
      get().currentExpenses
  }));
