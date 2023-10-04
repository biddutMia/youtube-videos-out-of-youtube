import { Grid, Stack } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import VideoItem from "../videoItem/videoItem";

const VideoPlayer = () => {
  const {
    playList: { data },
  } = useStoreState((state) => state);

  const { playListId } = useParams();

  const playList = data[playListId];
  console.log(playList?.playListItems);
  console.log(playList);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item md={4}>
          {playList?.playListTitle}
          {playList?.playListItems.map((item) => {
            const { videoTitle } = item;

            return (
              <Stack sx={{ marginTop: "15px", padding: '4px' }}>
                <VideoItem videoTitle={videoTitle} />
              </Stack>
            );
          })}
        </Grid>
        <Grid item md={8} sx={{ background: "green" }}>
          video player
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;
