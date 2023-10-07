import { Box } from "@mui/material";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId, opts, alignment = "" }) => {
  return (
    <Box align={alignment}>
      <YouTube videoId={videoId} opts={opts} />
    </Box>
  );
};

export default VideoPlayer;
