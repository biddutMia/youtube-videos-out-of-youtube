import { useStoreState, useStoreActions } from "easy-peasy";
import PlayListItemCard from "../playListItemCard/PlayListItemCard";
import { Grid, ListItem } from "@mui/material";

const PlayList = () => {
  const {
    playList: { data },
  } = useStoreState((state) => state);

  return (
    <Grid container spacing={2}>
      {Object.keys(data).length != 0 ? (
        Object.values(data).map((item, i) => {
          const {
            playListTitle,
            playListDescription,
            playListThumbnalis,
            channelTitle,
            playListId
          } = item;
          return (
            <Grid item md={4} key={i}>
              <PlayListItemCard
                title={playListTitle}
                description={playListDescription}
                thumbnail={playListThumbnalis}
                channelTitle={channelTitle}
                playListId={playListId}
              />
            </Grid>
          );
        })
      ) : (
        <div style={{ marginTop: "20px", marginLeft: "35px" }}>
          no video found
        </div>
      )}
    </Grid>
  );
};

export default PlayList;
