import { Grid, Stack } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import VideoItemCard from "../videoItemCard/videoItemCard";

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
      <Grid container>
        <Grid item md={4} sx={{ height: "600px", overflow: "auto" }}>
          {playList?.playListTitle}
          {playList?.playListItems.map((item) => {
            return (
              <Stack sx={{ marginTop: "15px", padding: "4px" }}>
                <VideoItemCard videos={item} />
              </Stack>
            );
          })}
        </Grid>
        <Grid
          item
          md={7.2}
          sx={{
            background: "green",
            height: "550px",
            marginLeft: "40px",
          }}
        >
          video player
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;
