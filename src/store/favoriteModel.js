import { action } from "easy-peasy";

const favoriteModel = {
  items: [],
  toggleFavoriteItem: action((state, payload) => {
    const index = state.items.indexOf(payload);
    if (index > -1) {
      state.items.splice(index, 1);
    } else {
      state.items = [...state.items, payload];
    }

    state.items = state.items.slice(0, 5);
  }),
  clearFavorites: action((state, payload) => {
    state.items = [];
  }),

  removeOneFavoriteItem: action((state, payload) => {
    const index = state.items.indexOf(payload);
    console.log("index", index);
    state.items.splice(index, 1);
  }),
};

export default favoriteModel;
