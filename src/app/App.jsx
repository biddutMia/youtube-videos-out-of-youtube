import { Container } from "@mui/material";
import Menu from "../components/menu/Menu";
import PlayList from "../components/playList/playList";
import { Routes, Route, useParams } from "react-router-dom";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import { useStoreState } from "easy-peasy";

const javascriptPlayListId = "PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1";
const fullStackArmyPlayListId = "PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl";
const songPlayListId = "PLPL4K7cytXzOOKVxSjWtYL4c0sdHXaHqN";
const anotherSongPlayListId = "PLPL4K7cytXzMMaq94sxdEcmwNZxfD6x4U";
const expressPlayListid = "PL_XxuZqN0xVBfji5SwKd-CQijtdmcUTMU";

const Home = () => {
  return <PlayList />;
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
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/player/:playListId" element={<VideoPlayer />} />
          <Route
            path="/player/:playListId/:videoId"
            element={<VideoPlayer />}
          />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
