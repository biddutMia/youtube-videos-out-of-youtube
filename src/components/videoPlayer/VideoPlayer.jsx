import { Grid, Stack } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import VideoItemCard from "../videoItemCard/videoItemCard";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

const VideoPlayer = () => {
  const {
    playList: { data },
  } = useStoreState((state) => state);
  const { playListId, videoId } = useParams();
  const playList = data[playListId];

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
        <Grid item md={4} sx={{ height: "600px", overflow: "auto" }}>
          {playList?.playListItems.map((item, i) => {
            if (item.videoId == videoId) {
              getVideoDetailsByVideoId = item;
            }
            console.log(getVideoDetailsByVideoId);

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
            <div style={{ marginTop: "20px" }}>
              Title:
              {getVideoDetailsByVideoId?.videoTitle}
            </div>
            <div
              style={{
                marginTop: "10px",
                overflowY: "scroll",
                height: "150px",
              }}
            >
              description:
              {getVideoDetailsByVideoId?.videoDescription}
            </div>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoPlayer;
