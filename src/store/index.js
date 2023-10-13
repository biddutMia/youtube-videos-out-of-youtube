import { createStore } from "easy-peasy";
import playListModel from "./playListModel";
import favoriteModel from "./favoriteModel";
import recentModel from "./recentModel";
import { persist } from "easy-peasy";

const store = createStore({
  playLists: playListModel,
  favorites: favoriteModel,
  recents: recentModel,
});

export default store;
