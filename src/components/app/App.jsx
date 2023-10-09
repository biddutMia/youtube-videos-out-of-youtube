import { Box, Container, Typography } from "@mui/material";
import Menu from "../menu/Menu";
import PlayList from "../playList/playList";
import { Routes, Route, useParams } from "react-router-dom";
import { useStoreState } from "easy-peasy";
import RecentItems from "../recentItems/RecentItems";
import FavoriteItems from "../favoriteItems/FavoriteItems";
import ContentAndVideoPlayer from "../videoPlayer/ContentAndVideoPlayer";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import ContentCheck from "../contentCheck/contentCheck";

const text = () => {
  return (
    <div>
      <Typography variant="h4">There are no playlist items</Typography>
      <Typography
        variant="body1"
        sx={{ fontSize: "20px", marginBottom: "20px" }}
      >
        please add one or more playlist items
      </Typography>
    </div>
  );
};

const Home = () => {
  const playLists = useStoreState((state) => state.playLists);

  const opts = {
    height: "350",
    width: "600",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div>
      {Object.keys(playLists.data).length == 0 ? (
        <Box>
          <ContentCheck content={text()} />
          <VideoPlayer
            sx={{ textAlign: "center" }}
            opts={opts}
            alignment="center"
          />
        </Box>
      ) : (
        <div>
          <FavoriteItems />
          <RecentItems />
          <PlayList />
        </div>
      )}
    </div>
  );
};

const About = () => {
  return <div style={{ marginTop: "100px" }}>this is about page</div>;
};

const PageNotFound = () => {
  return <div style={{ marginTop: "100px" }}>404 error, page not found</div>;
};

const App = () => {
  return (
    <div>
      <Menu />
      <Container maxWidth="md" sx={{ marginTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/player/:playListId"
            element={<ContentAndVideoPlayer />}
          />
          <Route
            path="/player/:playListId/:videoId"
            element={<ContentAndVideoPlayer />}
          />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
