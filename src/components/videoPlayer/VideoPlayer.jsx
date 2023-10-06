import { Grid, Stack } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import VideoItemCard from "../videoItemCard/videoItemCard";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  const {
    playLists: { data },
  } = useStoreState((state) => state);
  const { playListId, videoId } = useParams();

  const playList = data[playListId];
  console.log("play", playList);

  const opts = {
    height: "350",
    width: "530",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  let getVideoDetailsByVideoId = {};

  return (
    <div>
      <Grid container>
        <Grid item md={4} sx={{ height: "590px", overflow: "auto" }}>
          {playList?.playListItems.map((item, i) => {
            if (item.videoId == videoId) {
              getVideoDetailsByVideoId = item;
            }

            return (
              <Link to={`/player/${playListId}/${item.videoId}`} key={i}>
                <Stack sx={{ marginBottom: "10px", padding: "4px" }}>
                  <VideoItemCard videos={item} />
                </Stack>
              </Link>
            );
          })}
        </Grid>
        <Grid item md={7.2} sx={{ marginLeft: "20px" }}>
          <Stack>
            <YouTube videoId={videoId} opts={opts} />

            {getVideoDetailsByVideoId.videoTitle && (
              <div style={{ marginTop: "20px" }}>
                Title:
                {" " +
                  getVideoDetailsByVideoId?.videoTitle +
                  "" +
                  playList.channelTitle}
              </div>
            )}

            {getVideoDetailsByVideoId.videoDescription && (
              <div
                style={{ marginTop: "20px", height: "160px", overflow: "auto" }}
              >
                Description:
                {" " + getVideoDetailsByVideoId?.videoDescription}
              </div>
            )}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;
