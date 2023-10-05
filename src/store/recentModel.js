import { action } from "easy-peasy";

const recentModel = {
  items: [],

  addToRecent: action((state, payload) => {
    if (state.items.length == 0) {
      state.items = [...state.items, payload];
    }

    const index = state.items.indexOf(payload);
    if (index < 0) {
      state.items = [...state.items, payload];
    }

    state.items = state.items.slice(0, 5);
  }),

  clearRecent: action((state, payload) => {
    state.items = [];
  }),
};

export default recentModel;
