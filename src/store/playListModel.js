import { action, thunk } from "easy-peasy";
import getPlayList from "../api/getPlaylist";

const playListModel = {
  data: {},

  addPlayListItem: action((state, payload) => {
    state.data[payload.playListId] = payload;
  }),

  getPlayListItem: thunk(async ({ addPlayListItem }, payload, { getState }) => {
    const state = getState();

    if (!state.data[payload]) {
      const playList = await getPlayList(payload);
      addPlayListItem(playList);
    }
  }),
};

export default playListModel;
