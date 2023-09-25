import axios from "axios";

const key = "AIzaSyCe2WMcmqZsVUpOe0a0KBZ0INO3q6hNX-4";

const getPlaylistItems = async (playListId, result = [], pageToken = "") => {
  let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&maxResults=50&playlistId=${playListId}&key= ${key}&pageToken=${pageToken}`;

  const { data } = await axios.get(url);
  result = [...result, ...data.items];

  if (data.nextPageToken) {
    return getPlaylistItems(playListId, result, data.nextPageToken);
  }

  result = result.map((item) => {
    const {
      title: videoTitle,
      description: videoDescription,
      thumbnails,
      resourceId: { videoId },
    } = item.snippet;

    return {
      videoTitle,
      videoDescription,
      thumbnails,
      videoId,
    };
  });

  return result;
};

const getPlayList = async (playListId) => {
  const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playListId}&key=${key}`;

  const { data } = await axios.get(url);
  const items = await getPlaylistItems(playListId);

  const {
    title: playListTitle,
    description: playListDescription,
    channelId,
    channelTitle,
    thumbnails,
  } = data.items[0].snippet;

  return {
    playListTitle,
    playListDescription,
    playListId,
    playListThumbnalis: thumbnails,
    playListItems: items,
    channelId,
    channelTitle,
  };
};

export default getPlayList;
