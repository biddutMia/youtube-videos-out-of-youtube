import { useStoreState } from "easy-peasy";
import PlayListItemCard from "../playListItemCard/PlayListItemCard";
import { Box, Grid, ListItem, Stack, Typography, Button } from "@mui/material";

const PlayList = () => {
  const {
    playLists: { data },
  } = useStoreState((state) => state);

  return (
    <Box>
      <Box>
        <Stack>
          <Typography variant="overline">Youtube video Playlists</Typography>
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
