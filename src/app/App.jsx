import { useEffect } from "react";
import getPlayList from "../api/getPlaylist";

const javascriptPlayListId = "PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1";
const fullStackArmy = "PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl";

const App = () => {
  useEffect(() => {
    getPlayList(javascriptPlayListId).then((item) => console.log("data", item));
  }, []);

  return (
    <div>
      <div>hello youtube project</div>
    </div>
  );
};

export default App;
