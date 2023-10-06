import { Container } from "@mui/material";
import Menu from "../menu/Menu";
import PlayList from "../playList/playList";
import { Routes, Route, useParams } from "react-router-dom";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import { useStoreState } from "easy-peasy";
import RecentItems from "../recentItems/RecentItems";
import FavoriteItems from "../favoriteItems/FavoriteItems";

const Home = () => {
  return (
    <div>
      <FavoriteItems />
      <RecentItems />
      <PlayList />
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
