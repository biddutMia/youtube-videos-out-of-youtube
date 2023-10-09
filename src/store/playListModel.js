import { action, thunk } from "easy-peasy";
import getPlayList from "../api/getPlaylist";

const playListModel = {
  data: {},
  error: { message: "" },
  loading: { value: false },

  addPlayListItem: action((state, payload) => {
    state.data[payload.playListId] = payload;
  }),

  clearPlayListItem: action((state, payload) => {
    delete state.data[payload];
  }),

  getPlayListItem: thunk(async ({ addPlayListItem }, payload, { getState }) => {
    const state = getState();

    if (!state.data[payload]) {
      try {
        state.loading.value = true;
        const playList = await getPlayList(payload);
        addPlayListItem(playList);
      } catch (e) {
        state.error.message = e.message;
        alert(e.message);
      } finally {
        state.loading.value = false;
      }
    }
  }),
};

export default playListModel;
