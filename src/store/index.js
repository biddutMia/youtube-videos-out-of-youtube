import { createStore } from "easy-peasy";
import playListModel from "./playListModel";
import favoriteModel from "./favoriteModel";
import recentModel from "./recentModel";

const store = createStore({
  playList: playListModel,
  favorites: favoriteModel,
  recent: recentModel,
});

export default store;
