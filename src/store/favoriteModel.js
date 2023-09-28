import { action } from "easy-peasy";

const favoriteModel = {
  items: [],
  addToFavorite: action((state, payload) => {
    state.items = [...state.items, payload];
  }),
  clearFromFovorite: action((state, payload) => {
    state.items = [];
  }),
};


export default favoriteModel