import { createStore } from "easy-peasy";
import playListModel from "./playListModel";
import favoriteModel from "./favoriteModel";
import recentModel from "./recentModel";
import { persist } from "easy-peasy";

const store = createStore(
  persist(
    {
      playLists: playListModel,
      favorites: favoriteModel,
      recents: recentModel,
    },
    {
      storage: "localStorage",
    }
  )
);

export default store;
