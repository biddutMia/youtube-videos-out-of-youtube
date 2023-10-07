import { Grid, Stack } from "@mui/material";
import { useStoreState } from "easy-peasy";
import { useParams } from "react-router-dom";
import VideoItemCard from "../videoItemCard/videoItemCard";
import { Link } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const ContentAndVideoPlayer = () => {
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
            <VideoPlayer videoId={videoId} opts={opts} />
            {getVideoDetailsByVideoId.videoTitle && (
              <div style={{ marginTop: "20px" }}>
                Title:
                {" " + getVideoDetailsByVideoId?.videoTitle}
              </div>
            )}

            {playList.channelTitle && (
              <div
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                channel title:
                {" " + playList?.channelTitle}
              </div>
            )}

            {getVideoDetailsByVideoId.videoDescription && (
              <div>
                <div style={{ marginBottom: "5px" }}>Description:</div>
                <div
                  style={{
                    height: "130px",
                    overflow: "auto",
                  }}
                >
                  {" " + getVideoDetailsByVideoId?.videoDescription}
                </div>
              </div>
            )}
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContentAndVideoPlayer;
