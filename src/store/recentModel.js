import { action } from "easy-peasy";

const recentModel = {
  items: [],

  addToRecent: action((state, payload) => {
    state.items = [...state.items, payload];
  }),

  clearRecent: action((state, payload) => {
    state.items = [];
  }),
};

export default recentModel;
