import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";

const javascriptPlayListId = "PL_XxuZqN0xVAu_dWUVFbscqZdTzE8t6Z1";
const fullStackArmy = "PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl";

const App = () => {
  const data = useStoreState((state) => state);
  console.log(data);
  const {
    playList: { getPlayListItem },
  } = useStoreActions((actions) => actions);
  // console.log(playList);

  useEffect(() => {
    getPlayListItem(javascriptPlayListId);
    getPlayListItem(fullStackArmy);
  }, []);

  return (
    <div>
      <div>hello youtube project</div>
    </div>
  );
};

export default App;
