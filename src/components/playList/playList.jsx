import { useStoreState, useStoreActions } from "easy-peasy";
import PlayListItemCard from "../playListItemCard/PlayListItemCard";
import { Box, Grid, ListItem, Stack, Typography } from "@mui/material";

const PlayList = () => {
  const {
    playList: { data },
  } = useStoreState((state) => state);

  return (
    <Box>
      <Box>
        <Stack direction="row" justifyContent={"space-between"}>
          <Typography variant="overline">Youtube video Playlists</Typography>
          <Typography variant="button">Reset</Typography>
        </Stack>
      </Box>

      <Grid container spacing={2}>
        {Object.keys(data).length != 0
          ? Object.values(data).map((item, i) => {
              const {
                playListTitle,
                playListDescription,
                playListThumbnalis,
                channelTitle,
                playListId,
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
          : ""}
      </Grid>
    </Box>
  );
};

export default PlayList;
