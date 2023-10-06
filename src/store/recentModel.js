import { action } from "easy-peasy";

const recentModel = {
  items: [],

  addToRecent: action((state, payload) => {
    const index = state.items.indexOf(payload);
    if (index < 0) {
      state.items = [...state.items, payload];
    }

    state.items = state.items.slice(0, 5);
  }),

  clearRecents: action((state, payload) => {
    state.items = [];
  }),

  removeOneRecentItem: action((state, payload) => {
    const index = state.items.indexOf(payload);
    state.items.splice(index, 1);
  }),
};

export default recentModel;
